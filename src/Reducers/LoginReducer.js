const initialState={
    loading:false,
    user:[],
    error:'',
    flag:false
}

export const LoginReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'LOGIN_REQ': 
        return{
            ...state,
            loading:true
        }
        case 'LOGIN_SUCCESS':
        return{
            ...state,
            loading:false,
            flag:true,
            user:action.payload
        }
        case 'LOGIN_FAILED':
        return{
            ...state,
            loading:false,
            user:[],
            flag:false,
            error:action.payload
        }
        default: return state
    }

}