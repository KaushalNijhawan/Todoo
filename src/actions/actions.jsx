export const addTodo = (data) => {
    return {
        type: "ADDTODO", payload: {
            taskName: data.taskName ? data.taskName : null,
            taskDesc: data.taskDesc ? data.taskDesc : null,
            taskId: data.taskId != null ? data.taskId : null,
            createdDate: new Date().toString()
        }
    };
}

export const deleteTodo = (taskId) => {
    return {
        type: "DELETETODO",
        payload: {
            taskId: taskId
        }
    };
}

export const updateTodo = (data) => {
    return {
        type: "UPDATETODO", payload: {
            taskName: data.taskName ? data.taskName : null,
            taskDesc: data.taskDesc ? data.taskDesc : null,
            taskId: data.taskId != null ? data.taskId : null,
            id : data.id,
            createdDate: new Date().toString()
        }
    };
}


export const updateTODOFromForm = (data) =>{
    return {
        type:'UPDATETODOFROMFORM',
        payload:{
            taskName: data.taskName ? data.taskName : null,
            taskDesc: data.taskDesc ? data.taskDesc : null,
            taskId: data.taskId != null ? data.taskId : null,
            id : data.id,
            createdDate: new Date().toString()
        }
    }
}

export const resetState = () =>{
    return {
        type :'RESET'
    }
}

export const fetchDatafromFirebase = (data) =>{
    return {
        type :'FETCH',
        payload : data
    }    
}
