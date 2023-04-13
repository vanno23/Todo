import React from 'react'
import './styles.css'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: any;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <div className='todos'>
        {todos.map((todo) => {
            return (
                <SingleTodo
                    todo={todo} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            )
        })}
    </div>
  )
}

export default TodoList;