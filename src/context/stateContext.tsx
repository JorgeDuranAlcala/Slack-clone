import React,  { useContext, createContext, ReactNode, useReducer, Reducer  } from 'react'
import { IState, IAction } from './reducer'

export const StateContext = createContext<any>([])

export interface IStateProviderProps {
    reducer: any;
    initialState: IState;
    children: ReactNode
}

export const StateProvider = ({ reducer, initialState, children }: IStateProviderProps) => (
    <StateContext.Provider value={useReducer<Reducer<IState, IAction >>(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)