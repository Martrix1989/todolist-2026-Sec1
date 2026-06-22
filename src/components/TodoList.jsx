import { useState, Fragment } from "react";
import TodoItem from './TodoItem'

const TodoList = () => {

    const [todos, setTodos] = useState([
        {id: 1, tarea: "Estudiar React 🤓", estado: true},
        {id: 2, tarea: "Hacer la compra 🛍️", estado: false},
        {id: 3, tarea: "Llamar a la mamá 👪", estado: true},
        {id: 4, tarea: "Pasear al perro 🐶", estado: false},
    ])

    return (
        <Fragment>
            <h1 className="display-5 my-3"> Lista de tareas 😎✔️ </h1>

            <div className="input-group my-5">
                
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese una tarea"
                />

                <button className="btn btn-primary ms-2">
                    <i class="bi bi-plus-circle-fill"></i>
                </button>
                <button className="btn btn-danger ms-2">
                    <i class="bi bi-trash-fill"></i>
                </button>

            </div>

            <ul className="list-group my-5">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>

        </Fragment>
    )
}

export default TodoList;