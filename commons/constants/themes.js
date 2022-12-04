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
                50: '#369ff2',
                100: '#369ff2',
                200: '#369ff2',
                300: '#369ff2',
                400: '#369ff2',
                500: '#369ff2',
                600: '#369ff2',
                700: '#369ff2',
                800: '#369ff2',
                900: '#369ff2',
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
