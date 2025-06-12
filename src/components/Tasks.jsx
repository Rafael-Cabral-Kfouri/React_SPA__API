import { ChevronRightIcon, TrashIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


// props: App.jsx passa a função 'clicouNaTask' para o arquivo Tasks. Não precisa exportar o arquivo. Então task.id(a tarefa clicada) é passado pelo onClick para TaskId que é o parâmetro de 'clicouNaTask', que passa via props esse valor para a função 'Tasks'. 

function Tasks({tasks, clicouNaTask, deleteNaTask}) {
    const navigate = useNavigate()  

    function verDetalhesClick (task) {
        
        const query = new URLSearchParams() //trata a string elimina os conflitos.
        query.set('title', task.title)
        query.set('description', task.description)
        navigate (`/task?${query.toString()}`);
    }

    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
{/* quando vc tem uma props que é uma função e vc precisa chamar quando clicar n botão e também passar parâmetro vc passa primeiro a arrowfunction                 */}
              <button 
                onClick={() => clicouNaTask(task.id)} 
                className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}>
                    {task.title}
              </button>
              <Button  onClick={() => verDetalhesClick(task)}>
                    <ChevronRightIcon />
              </Button>
                
              <Button 
                onClick={() => deleteNaTask(task.id)}>
                <TrashIcon />
              </Button>
            </li>
        ))}
    </ul>
    );
}

export default Tasks;
