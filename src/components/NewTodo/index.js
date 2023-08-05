import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const NewTodo = ({onNewTodo}) =>{
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;
    
    const [value, setValue]= useState('');

    const erase = () =>{
        setValue('');
      };
    
       // Por causa da função erase, quando digita algo no 'todo' da tarefa, ele envia e limpa o 'todo'.
      const submit = () => {
        if(onNewTodo){
            onNewTodo(value);
            erase();
        }  
    
      };

//event, para receber o que a pessoa digitou
const onChange = (event) => {
  setValue(event.target.value)
};

  //usando o parâmentro event, podemos receber os parâmetros do input
const onKeyDown = (event)=>{
  if (event.which === ENTER_KEY){
   submit();
  }
   else if (event.which === ESCAPE_KEY){
    erase();
   
  }
};


    return(
    <input className="new-todo"
    placeholder='Digite sua tarefa'
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    />
);
 }  


 NewTodo.PropTypes ={
    onNewTodo: PropTypes.func.isRequired,
 }
export default NewTodo

