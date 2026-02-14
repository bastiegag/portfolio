/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree and displays a fallback UI
 */
import { Component, ReactNode, ErrorInfo } from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import type { WithChildren, PartialExcept } from '@shared/types';

const ErrorRoot = styled(Box, {
	name: 'ErrorBoundary',
	slot: 'root',
})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '200px',
	padding: theme.spacing(4),
	textAlign: 'center',
	backgroundColor: theme.vars.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	gap: theme.spacing(2),
}));

const ErrorTitle = styled(Typography, {
	name: 'ErrorBoundary',
	slot: 'title',
})(({ theme }) => ({
	color: theme.vars.palette.error.main,
	fontWeight: 600,
}));

const ErrorMessage = styled(Typography, {
	name: 'ErrorBoundary',
	slot: 'message',
})(({ theme }) => ({
	color: theme.vars.palette.text.secondary,
	maxWidth: '600px',
}));

interface ErrorBoundaryBaseProps extends WithChildren {
	fallback?: ReactNode;
	onError?: (error: Error, errorInfo: ErrorInfo) => void;
	resetKeys?: Array<string | number>;
}

export type ErrorBoundaryProps = PartialExcept<
	ErrorBoundaryBaseProps,
	'children'
>;

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// Log error to console in development
		if (import.meta.env.DEV) {
			console.error('ErrorBoundary caught an error:', error, errorInfo);
		}

		// Call optional error handler
		this.props.onError?.(error, errorInfo);
	}

	componentDidUpdate(prevProps: ErrorBoundaryProps): void {
		// Reset error state when resetKeys change
		if (
			this.state.hasError &&
			this.props.resetKeys &&
			prevProps.resetKeys &&
			this.props.resetKeys.some(
				(key, index) => key !== prevProps.resetKeys?.[index],
			)
		) {
			this.reset();
		}
	}

	reset = (): void => {
		this.setState({
			hasError: false,
			error: null,
		});
	};

	render(): ReactNode {
		if (this.state.hasError) {
			// Custom fallback provided
			if (this.props.fallback) {
				return this.props.fallback;
			}

			// Default fallback UI
			return (
				<ErrorRoot>
					<ErrorTitle variant="h5">Something went wrong</ErrorTitle>
					<ErrorMessage variant="body1">
						{import.meta.env.DEV && this.state.error
							? this.state.error.message
							: 'An unexpected error occurred. Please try refreshing the page.'}
					</ErrorMessage>
					<Button
						variant="contained"
						color="primary"
						onClick={this.reset}
					>
						Try Again
					</Button>
				</ErrorRoot>
			);
		}

		return this.props.children;
	}
}
