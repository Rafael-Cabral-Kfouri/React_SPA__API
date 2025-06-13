import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import './index.css';
import {v4} from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
//sempre que eu mudar o meu state de task preciso atualizar meu local storage com ess state
useEffect(() =>{
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

useEffect(() => {
  const fetchTasks = async () => {
    //CHAMAR A API   
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10', //limit=10 para trazer só 10 tarefas
      {
        method: 'GET',
      }
    );  

    //PEGAR DADOS QUE ELA RETORNA E CONVERTE PARA JSON
    const data = await response.json()

    //ARMAZENAR E PERSISTIR ESSES DADOS NO STATE
    setTasks(data)
  };
  // Se quiser você pode chamar uma API PARA PEGAR AS TAREFAS
  //fetchTasks()

}, [])
  

function clicouNaTask(taskId){
  const newTasks = tasks.map((task) => {
  //preciso atualizar essa tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
    //Não preciso atulizar essa tarefa
    return task
  })
  setTasks(newTasks);
}
  function deleteNaTask(taskId){
  const newTasks = tasks.filter(task => task.id != taskId)
  setTasks(newTasks);
}

function addListaDeBaixo (title, description) {
  const newTask = {
    id: v4(),
    title: title, // pode fazer um 'short hand sintaxe'. Nome da propriedade é igual nome parametro
    description: description, 
    isCompleted: false 
  };
  setTasks([...tasks, newTask])// quando se atualiza um estado não se usa push
}
return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4" >
        <Title>Gerenciador de Tarefas</Title>
              
{/* Quando vc quer passar um valor pro componente de baixo vc usa uma props */} 
      <AddTask addListaDeBaixo={addListaDeBaixo} />
      <Tasks tasks={tasks} clicouNaTask={clicouNaTask} deleteNaTask={deleteNaTask} />
      </div>
    </div>
  );
}

export default App;
