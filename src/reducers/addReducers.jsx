import axios from "axios";
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

let intialState = {
    listTodos : []
}
const usersCollectionRef = collection(db, "todoey");

const createUser = async (todo) => {
    await addDoc(usersCollectionRef, {taskName: todo.taskName, taskDesc: todo.taskDesc, taskId : todo.taskId , 
    createdDate : new Date().toString()});
};

const deleteUser = async (id) => {
    const userDoc = doc(db, "todoey", id);
    await deleteDoc(userDoc);
};

const updateUser = async (todo) => {
    const userDoc = doc(db, "todoey", todo.id);
    const newFields = { taskName: todo.taskName , taskDesc : todo.taskDesc};
    await updateDoc(userDoc, newFields);
}

const  addReducer = (state = intialState , action)=>{
    let updatedState = {};
    let taskId = 0;
    switch(action.type){
        case 'ADDTODO':
            updatedState = state;
             taskId = updatedState.listTodos.length+1;
            if(action && action.payload && action.payload.taskId != null){
                action.payload.taskId = taskId;
                updatedState.listTodos.push(action.payload);
            }
            intialState = updatedState; 
            createUser(action.payload);
            return updatedState;
        case "DELETETODO":
            updatedState = state;
            taskId = action.payload.taskId;
            let index = 0;
            if(action && action.payload && action.payload.taskId != null){
                
            updatedState.listTodos.map((element, i)=>{
                if(element && element.id === taskId){
                    index = i;
                    deleteUser(taskId);
                }
            });
        }
        
        intialState = updatedState.listTodos.splice(index,1);     
        return updatedState;
        case 'GETTODO':
            updatedState = state;
            let incomingState = action.payload;
            updatedState.listTodos.map((element)=>{
                if(element && incomingState && element.taskId === incomingState.taskId){
                    element.taskName = incomingState.taskName;
                    element.taslDesc = incomingState.taskDesc;
                }
            });
            intialState = updatedState.listTodos;
            return intialState;
        case 'UPDATETODOFROMFORM':
                updatedState = state;
                updatedState.listTodos.map((element,i)=>{
                    if(element && action.payload && action.payload.taskId != null && element.taskId != null && 
                        element.taskId === action.payload.taskId ){
                            updateUser(action.payload);
                            element.taskName = action.payload.taskName;
                            element.taskDesc = action.payload.taskDesc
                        }
                });
            intialState = updatedState
            return updatedState;
        case 'FETCH':
            if(action.payload){
                intialState.listTodos  = action.payload; 
            }
            return intialState;
        default :
            return state;
    }
    
}

export default addReducer;