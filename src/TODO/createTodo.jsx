
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo,updateTODOFromForm, resetState } from "../actions/actions";
import { FaCheck, FaEdit } from "react-icons/fa";


const CreateTodo = ({ todo }) => {

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [dataList , setDataList]  = useState([]);
    const dispatch = useDispatch();

    return (
        <div className='container' style={{ marginTop: '15px', marginLeft: '12px' }}>
            <div style={{ marginBottom: '15px', marginTop: '15px', color: 'white' }} className='h3'>
                TODOey APP
            </div>
            <div style={{ border: '2px solid black', height: '250px', width: '80%', borderRadius: '15px' }}>
                <form className='col-6' style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <div className="form-group row">
                        <label htmlFor="exampleInputEmail1" className="col-sm-3" style={{ color: 'white' }}>Task Name</label>
                        <div className='col-sm-9'>
                            <input type="text" className="form-control" id="taskName" aria-describedby="emailHelp" placeholder="Enter Task Name"
                                onChange={(e) => setTaskName(e.target.value)} value={taskName ? taskName : todo && todo.taskName ? todo.taskName : ''} />
                        </div>
                    </div>
                    <div className="form-group row" style={{ marginTop: '15px' }}>
                        <label htmlFor="exampleFormControlTextarea1" className="col-sm-3" style={{ color: 'white' }}>Task Description</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" placeholder='Enter Task Description....' rows="3" onChange={(e) => setTaskDesc(e.target.value)}
                                value={taskDesc ? taskDesc : todo && todo.taskDesc ? todo.taskDesc : ''} />
                        </div>
                    </div>
                </form>
                <div style={{ display: 'flex', justifyContent: "flex-start", justifyContent: "center" }}>
                    {todo && todo.taskName && todo.taskDesc ? null :<FaCheck style={{ marginTop: '18px', fontSize: '28px' }} disabled={taskDesc.toString().trim() && taskName.toString().trim() ? false : true}
                        onClick={() => {
                            if(taskName.toString().trim() && taskDesc.toString().trim() ){
                                let todo = {
                                    taskName: taskName,
                                    taskDesc: taskDesc,
                                    taskId: 0
                                }
                                setTaskDesc('');
                                setTaskName('');
                                return dispatch(addTodo(todo));
                            }else{
                                return;
                            }
                            
                        }} />}
                    {todo && todo.taskName && todo.taskDesc ? <FaEdit onClick={() => {
                        let todoey = {
                            taskName: taskName ? taskName : todo && todo.taskName ? todo.taskName : '',
                            taskDesc: taskDesc ? taskDesc : todo && todo.todoDesc ? todo.todoDesc : '',
                            taskId: todo.taskId,
                            id : todo.id
                        }
                        setTaskDesc('');
                        setTaskName('');
                        dispatch(resetState());
                        return dispatch(updateTODOFromForm(todoey))
                    }} style={{ marginTop: '18px', fontSize: '28px', marginLeft: '25px' }} /> : null}
                </div>
            </div>
        </div>
    );
}

export default CreateTodo;