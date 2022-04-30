import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo,updateTodo} from "../actions/actions";
const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className='card col-sm-4' style={{ marginTop: '15px', marginLeft: '15px', width: '20%' }}>
            <div className="card-header" style={{display:'flex', justifyContent:'space-between'}}>
                <FaEdit onClick ={()=>dispatch(updateTodo(todo))}/>
                <FaTrash onClick ={() => dispatch(deleteTodo(todo.id))}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{todo.taskName.toString().toUpperCase()}</h5>
                <p className="card-text">{todo.taskDesc}</p>
            </div>
        </div>
    );
}

export default TodoCard;