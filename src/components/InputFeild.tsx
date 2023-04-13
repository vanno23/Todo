import React from 'react'
import './styles.css'
import { useRef } from 'react'

interface stateType {
  todo: string,
  setTodo: any,
  handleAdd: (e: React.FormEvent) => void;
}

function InputFeild({ todo, setTodo, handleAdd }: stateType) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form 
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }
    }>
      <input
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='input__box' />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputFeild;