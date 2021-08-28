import React,{createContext,useContext,useReducer} from "react";

//Preparing the data layer
export const StateContext = createContext();


//wrap our app and provide the data layer
export function StateProvider ({reducer,initialState, children}){
    return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    )};

//pull info from the data layer.
export function useStateValue(){
    return useContext(StateContext)
}

