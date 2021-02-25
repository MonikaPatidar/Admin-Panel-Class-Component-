import { toast } from 'react-toastify';
import {storeUserApi, GetUserError} from '../Action/RegisterAction';

export const RegisterUser = (body) => {

    return (dispatch) => {
        fetch('https://staging.core.freshymart.com/api/v3/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        })
        .then(response => response.json())
        .then((res)=>{
            
            if(res.status==='success'){
                toast.success("User Registerd Successfully");
                return dispatch(storeUserApi(true))  
                 
            }   
            if(res.status==='fail'){
                toast.error(<div style={{textAlign: 'left'}}>
                    {res.errors.map((err)=>{
                        return (<div style={{width:"100%"}}>{err}</div>)    
                    })}
                </div>)
                return dispatch(GetUserError(res.errors))  
            }
        })
        .catch((error) => {
            console.log(error)
            return dispatch(GetUserError(error))
        });
    }
}
