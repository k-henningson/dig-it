import { useContext } from 'react';
import { AppContext } from '../initializers';
import { themes } from '../constants/themes';

export const useTheme = () => {
    const { themeName } = useContext(AppContext);
    const theme = themes[themeName];
    return { theme };
};
