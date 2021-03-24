const initstate={
    count:0,
}
const reducer = (state=initstate,action)=>{
    if(action.type == "INCREASE"){
        return {count:state.count + 1}
    }
    if(action.type == "DECREASE"){
        return {count:state.count - 1}
    }
    return state;
}

export default reducer;