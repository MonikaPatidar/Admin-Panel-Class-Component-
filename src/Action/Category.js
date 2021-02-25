export const CategoryRequest=()=>{
    return {
        type:"GET_CATEGORY_REQ"
    }
}

export const getcategorySuccess=(category)=>{
    return{
        type:"GET_CATEGORY_SUCCESS",
        payload:category
    }
}

export const categoryError=(error)=>{
    return{
        type:"GET_CATEGORY_FAILED",
        payload:error
    }
}