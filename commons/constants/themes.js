export const THEME_NAMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const themes = {
    light: {
        name: THEME_NAMES.LIGHT,
        foreground: '#212121',
        background: '#ffffff',
        statusBar: 'dark',
        // native-base colours
        colors: {
            primary: {
                50: '#66B7F5',
                100: '#52AEF4',
                200: '#369ff2',
                300: '#369ff2',
                400: '#369ff2',
                500: '#369ff2',
                600: '#369ff2',
                700: '#369ff2',
                800: '#1993F0',
                900: '#0D7DD3',
            },
            green: {
                50: '#d6f3e2',
                800: '#23b972',
            },
        },
        fontConfig: {
            Inter: {
                400: {
                    normal: 'Inter-Regular',
                },
                600: {
                    normal: 'Inter-SemiBold',
                },
            },
        },
    },

    dark: {
        name: THEME_NAMES.DARK,
        foreground: '#ffffff',
        background: 'black',
        statusBar: 'light',
        // native-base colours
        colors: {
            primary: {
                50: '#369ff2', // todo - just for testing, will need to pick colour schemes
            },
        },
    },
};
