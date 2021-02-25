const initialState={
    loading:false,
    category:[],
    error:''
}

const CategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_CATEGORY_REQ': 
            return {
                ...state,
                loading:true
            }
        case 'GET_CATEGORY_SUCCESS':
            return {
                ...state,
                loading:false,
                category:action.payload,
                error:''
            }
        case 'GET_CATEGORY_FAILED':
            return {
                ...state,
                category:'',
                error:action.payload
            }
        default: return state
    }
}

export default CategoryReducer