import { IUser } from "../models/User.interface";

export interface IState {
    user: IUser | null;
}

export interface IAction {
    type: string,
    user: IUser;
}

export const initialState: IState = {
    user: null
}


export const actionTypes = {
    LOGIN_USER: 'LOGIN_USER'
}

const reducer = (state: IState, action: IAction) => {
        console.log(action)

        switch (action.type) {
            case actionTypes.LOGIN_USER:
                return {
                    ...state,
                    user: action.user
                }
            default:
                return state;
        }
}

export default reducer