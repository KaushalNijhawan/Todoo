let intialState = {
    currentTodo : {}
}
const updateReducer = (state = intialState, action) =>{
    switch (action.type){
        case 'UPDATETODO':
            let incomingState = action.payload;
            intialState.currentTodo = incomingState;
            return intialState;
        case 'RESET':
            intialState = {
                currentTodo :{}
            }
            return intialState
        default:
            return state;
    }

}

export default updateReducer;