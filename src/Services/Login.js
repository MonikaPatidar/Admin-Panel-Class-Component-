import {LoginRequest,LoginSuccess,LoginFailed} from '../Action/Login'
import { toast } from 'react-toastify';

export const LoginUser=(user)=>{
    return(dispatch)=>{
        dispatch(LoginRequest())
        fetch('https://staging.core.freshymart.com/api/v3/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: user,  
        })
    .then((response)=>response.json())
    .then((response)=>{
        if(response.status=== "success"){
            const userToken=response.token;
            localStorage.setItem('LoginUser', "Bearer "+userToken)
            return dispatch(LoginSuccess(response.user))
              
        }
        else{
            toast.error(
                <div style={{textAlign: 'left'}}>
                    {response.errors.map((err)=>{
                        return(
                            <div style={{width:"100%"}}>{err}</div>
                        )
                    })
                    }
                </div>
            )
            return dispatch(LoginFailed(response.errors))
        }
    })
    .catch(error=>{
   
        return error
    })
}
}


