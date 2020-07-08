const initState = {
    query:"",
    data : [],
    entity: "all",
    id: "",
    singleData:[]
}


const RootReducer = (state=initState,action) => {
    if(action.type==="SEARCH"){
        return {
            ...state,
            query: action.payload
        }
    } else if(action.type==="SEARCH_API_CALL"){
        return {
            ...state,
            data : action.payload
        }
    } else if(action.type==="CHANGE_ENTITY"){
        return {
            ...state,
            entity : action.payload
        }
    } else if(action.type==="ASYNC_CHANGE_ENTITY"){
        return {
            ...state,
            data : action.payload
        }
    } else if(action.type==="INDIVIDUAL_SELECT"){
        return {
            ...state,
            id : action.payload
        }
    } else if(action.type==="INDI_ASYNC_CALL"){
        return {
            ...state,
            singleData: action.payload
        }
    }
    return state;
}

export default RootReducer;