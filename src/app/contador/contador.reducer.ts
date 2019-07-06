import * as act from './contador.actions';

export const contadorReducer = (state: number = 10, action: act.actions) => {
    switch(action.type) {
        case act.INCREMENTAR:
            return ++state;
        case act.DECREMENTAR:
            return --state;
        case act.MULTIPLICAR:
            return state * action.payload
        case act.DIVIDIR:
            return state / action.payload
        case act.RESET:
            return state = 0;
        default: return state;
    }
}
