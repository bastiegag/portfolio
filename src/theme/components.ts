interface Components {
    [key: string]: any;
}

export const components = (theme: Components) => {
    return {
        MuiPopper: {
            defaultProps: {
                placement: 'top',
            },
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    p: 1,
                    fontFamily: 'Afacad Flux',
                },
            },
        },
    };
};
