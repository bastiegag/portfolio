import { PopperContext, PopperContextProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const usePopper = () =>
    useContextWrapper(PopperContext, {
        contextName: usePopper.name,
        providerName: PopperContextProvider.name,
    });
