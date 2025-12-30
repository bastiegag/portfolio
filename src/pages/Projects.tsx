import { JSX } from 'react';
import {
	Typography,
	Box,
	Card,
	CardContent,
	CardActions,
	Button,
	Chip,
	Stack,
	Link as MuiLink,
} from '@mui/material';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

import { Page } from 'components';
import { openLink } from 'utils';

interface Project {
	title: string;
	description: string;
	tech: string[];
	github?: string;
	demo?: string;
	highlights?: string[];
}

const projects: Project[] = [
	{
		title: 'Interactive Portfolio',
		description:
			'A modern portfolio featuring a custom-built 3D SVG island scene with GSAP parallax effects, theme system, and responsive design.',
		tech: ['React 19', 'TypeScript', 'GSAP', 'Material UI v7', 'Vite'],
		github: 'https://github.com/bastiegag/portfolio',
		demo: 'https://sebastiengagne.ca',
		highlights: [
			'Custom SVG animations with parallax effects',
			'Day/night theme system with smooth transitions',
			'Fully typed with TypeScript',
		],
	},
	// Add your other projects here
	// {
	// 	title: 'Project Name',
	// 	description: 'Brief description of what the project does and the problem it solves.',
	// 	tech: ['Tech1', 'Tech2', 'Tech3'],
	// 	github: 'https://github.com/username/repo',
	// 	demo: 'https://demo-url.com',
	// 	highlights: ['Key feature 1', 'Key feature 2'],
	// },
];

const cardStyles = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	bgcolor: 'paper.background',
	transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
	'&:hover': {
		transform: 'translateY(-4px)',
		boxShadow: 3,
	},
} as const;

/**
 * Projects page component
 *
 * Displays a collection of personal and professional projects with descriptions,
 * technology stacks, and links to demos and source code.
 */
export const Projects = (): JSX.Element => {
	return (
		<Page>
			<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
				Projects
			</Typography>
			<Typography sx={{ mb: 4 }} color="text.secondary">
				A selection of personal projects showcasing various technologies
				and approaches to problem-solving.
			</Typography>

			<Stack spacing={3}>
				{projects.map((project, index) => (
					<Card key={index} sx={cardStyles}>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography
								variant="h5"
								component="h2"
								gutterBottom
							>
								{project.title}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								paragraph
							>
								{project.description}
							</Typography>

							{project.highlights && (
								<Box sx={{ mb: 2 }}>
									<Typography
										variant="subtitle2"
										gutterBottom
										sx={{ fontWeight: 600 }}
									>
										Key Features:
									</Typography>
									<Stack
										component="ul"
										spacing={0.5}
										sx={{ pl: 2, mb: 0 }}
									>
										{project.highlights.map(
											(highlight, i) => (
												<Typography
													key={i}
													component="li"
													variant="body2"
													color="text.secondary"
												>
													{highlight}
												</Typography>
											)
										)}
									</Stack>
								</Box>
							)}

							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: 1,
								}}
							>
								{project.tech.map((tech, i) => (
									<Chip
										key={i}
										label={tech}
										size="small"
										variant="outlined"
									/>
								))}
							</Box>
						</CardContent>

						<CardActions sx={{ p: 2, pt: 0 }}>
							{project.github && (
								<Button
									size="small"
									startIcon={<IconBrandGithub size={18} />}
									onClick={() => openLink(project.github!)}
								>
									View Code
								</Button>
							)}
							{project.demo && (
								<Button
									size="small"
									startIcon={<IconExternalLink size={18} />}
									onClick={() => openLink(project.demo!)}
								>
									Live Demo
								</Button>
							)}
						</CardActions>
					</Card>
				))}
			</Stack>

			<Box sx={{ mt: 4, p: 3, bgcolor: 'action.hover', borderRadius: 1 }}>
				<Typography variant="body2" color="text.secondary">
					More projects available on{' '}
					<MuiLink
						href="https://github.com/bastiegag"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</MuiLink>
				</Typography>
			</Box>
		</Page>
	);
};
