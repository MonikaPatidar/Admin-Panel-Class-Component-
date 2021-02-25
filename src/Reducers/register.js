const initialState={
    registrationSuccess:false,
    registrationError:false
}

export const RegisterReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'STORE_USER_API': 
        return{
            ...state, 
            registrationSuccess:action.payload, 
            registrationError:false
        }
        case 'GET_USER_ERROR': 
        return{
            ...state, 
            registrationError: action.payload,  
        }
        default: return state
    }
}
