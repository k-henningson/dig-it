import { useContext } from 'react';
import { ThemeContext } from '../initializers';
import { themes } from '../constants/themes';

export const useTheme = () => {
    const { themeName } = useContext(ThemeContext);
    const theme = themes[themeName];
    return { theme };
};
