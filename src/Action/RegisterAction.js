
export const storeUserApi=(res)=>{
    return{
        type:'STORE_USER_API',
        payload:res
    }
}

export const GetUserError=error=>{
   
    return{
        type:'GET_USER_ERROR',
        payload:error
    }
}
