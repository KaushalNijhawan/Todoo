import CreateTodo from "./createTodo";
import { Component } from "react"
import store from "../store/store";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import TodoCard from './todoCard';
import { fetchDatafromFirebase } from "../actions/actions";
class TodoHome extends Component {
    currentState;
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            updateTodo: {},
            usersCollectionRef: collection(db, "todoey")
        }
    }

    getUsers = async () => {
        const data = await getDocs(this.state.usersCollectionRef);
        store.dispatch(fetchDatafromFirebase((data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))));

    }

    componentWillUnmount() {
        this.currentState();
    }

    componentDidMount() {
        this.getUsers();
        this.currentState = store.subscribe(() => {
            this.setState({
                todo: store.getState() && store.getState().addReducers ? store.getState().addReducers : null,
                updateTodo: store.getState() && store.getState().updateReducer ? store.getState().updateReducer : null
            });
        })
    }


    render() {
        const { listTodos } = this.state.todo;
        const { currentTodo } = this.state.updateTodo;
        let index = 0;
        if (listTodos && Object.entries(currentTodo).length > 0) {
            return (
                <div>
                    <CreateTodo todo={currentTodo} />
                    <div className='row'>
                        {
                            listTodos.map((element) => {
                                index++;
                                return (
                                    <TodoCard todo={element} key={index} />
                                );

                            })
                        }
                    </div>
                </div>
            );
        } else if (listTodos && Object.entries(currentTodo).length === 0) {
            return (
                <div>
                    <CreateTodo todo={null} />
                    <div className='row'>
                        {
                            listTodos.map((element) => {
                                index++;
                                return (
                                    <TodoCard todo={element} key={index} />
                                );

                            })
                        }
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    <CreateTodo todo={null} />
                </div>
            );
        }

    }

}

export default TodoHome;