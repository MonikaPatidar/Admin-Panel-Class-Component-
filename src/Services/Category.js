import {CategoryRequest,getcategorySuccess,categoryError} from '../Action/Category'
const token=localStorage.getItem('LoginUser')
console.log(token)
export const GetCategory=()=>{
return (dispatch)=>{
    dispatch(CategoryRequest())
    fetch('https://staging.core.freshymart.com/api/v3/category', {
            method: 'GET',
            headers: new Headers({
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }), 
        })
        .then(res=>res.json())
        .then(res=>{
            const resp=res.category;
            const respdata=resp.data
            return dispatch(getcategorySuccess(respdata))
        })
        .catch(error=>{
            console.log(error)
            return dispatch(categoryError(error))
        })
}
}
