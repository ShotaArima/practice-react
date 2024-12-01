import React from 'react'

const TodoList = ({ todos }: { todos: any[] }) => {


    return (
        <div>
            <label>
                    <input type="checkbox" checked={todos.completed}/>
                </label>
            {todos.map((todo, index) => (
                
                <div key={index}> {todo.title} </div>
            ))}
        </div>
    )
}

export default TodoList