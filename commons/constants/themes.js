export const THEME_NAMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const themes = {
    light: {
        name: THEME_NAMES.LIGHT,
        foreground: '#000000',
        background: '#eeeeee',
        statusBar: 'dark',
        // native-base colours
        colors: {
            primary: {
                50: 'green', // todo - just for testing, will need to pick colour schemes
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
                50: 'blue', // todo - just for testing, will need to pick colour schemes
            },
        },
    },
};
