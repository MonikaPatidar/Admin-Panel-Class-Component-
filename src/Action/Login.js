export const LoginRequest=()=>{
    return{
        type:'LOGIN_REQ'
    }
}

export const LoginSuccess=(user)=>{
    return{
        type:'LOGIN_SUCCESS',
        payload:user
    }
}

export const LoginFailed=(error)=>{
    return {
        type:'LOGIN_FAILED',
        payload:error
    }
}