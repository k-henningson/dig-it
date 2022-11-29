import { SET_THEME } from '../actions/actions';

export function reducer(state, action) {
    switch (action.type) {
        case SET_THEME:
            return { ...state, themeName: action.value };
        default:
            return state;
    }
}
