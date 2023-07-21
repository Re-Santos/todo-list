import React from 'react';
import './App.css';
import { useState } from 'react';
import {MdDelete} from 'react-icons/md';


const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  
  //Dentro do array, tem objetos, e esses objetos  tem propriedades
  const initialTodos= [
    { id: 1, title: 'Estudar JavaScript', checked: false},
    { id: 2, title: 'Estudar React', checked: true},
    { id: 3, title: 'Pausa', checked: false},
  ]; //criando a lista de tarefas 1b (após criar, popular em use states em 1a)

  const [todos, setTodos ]= useState([]) //Criando a lista de tarefas 1a [initialTodos], com o progresso do código, foi trocado o array inicial, por um vazio.
  const [value, setValue]= useState('');


  const erase = () =>{
    setValue('');
  };

   // Por causa da função erase, quando digita algo no 'todo' da tarefa, ele envia e limpa o 'todo'.
  const submit = () => {
    console.log('submit', value);
    setTodos([...todos,
      { id: new Date().getTime(), //gera um id diferente
        title: value, 
        checked: false
      }]);

    erase();
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
  // função que risca a tarefa concluida - ul todo 
  //  const onToggle = (todo) =>{
  //   console.log ('toggle', todo)
    // neste caso o map esta funcionando como um filtro, uma manipulação de array (obj,recebe esse nome pq não pode ser todo para não entrar em conflito)
    // ira percorrer , mas só vai mexer no checked
  //   todo.map((obj) =>
  //   (obj.id === todo.id ?  {...obj, checked: true} : obj;
  //   ));
  //  };
  

  return (

    <section id = "app" className = 'container'>
      <header>
        <h1 className="title">Todo</h1>
      </header>
      <section className="main">
        <input className="new-todo"
        placeholder='Digite sua tarefa'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
        
        {/* cria ul da lista de tarefas e renderiza com o map 1c */}
        <ul className="todo-list"> 
          {todos.map((todo)=>(
            //cada elemento dentro do array, tem que ter o seu key, é o que diferencia esse elemento dos outros
           <li key={todo.id.toString()}>
            <span 
            className='todo'
            // criei uma função anônima, que invoca a função de riscar a tarefa concluida
            onclick={()=>onToggle(todo)}
            onKeyPress={()=> onToggle(todo)}
            role="button"
            tabIndex={0}
            >{todo.title}</span>
           <button className='remove' type='button'>
            <MdDelete size={28}/>
           </button>
           </li>
           
          ))}
        </ul>
      </section>
    </section>
  
  );
}

export default App;
