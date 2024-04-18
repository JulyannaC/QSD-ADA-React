import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";


export const Tasks: React.FC =() => {
    const [taskTitle, setTaskTitle] = useState("");

    const { tasks, setTasks} = useContext(TasksContext);
    

    //Função disparada quando o usuário está querendo adicionar uma nova tarefa
    function handleSubmitAddTask(event: FormEvent){
        event.preventDefault();
        
        if(taskTitle.length < 3){
            alert('Não é possível adicionar uma tarefa com menos de 3 letras')

            return
        }

        const newTasks = [
            ...tasks, //pega todas as tarefas que já existam e coloca nesse novo valor do estado de tarefas
            {id: new Date().getTime(), title:taskTitle, done: false},
        ]
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks))

        setTaskTitle("");

    }

    function handleToogleTasksStatus(taskId: number) {
        const newTasks = tasks.map((task) => {
            if (taskId === task.id) {
                return {
                    ...task,
                    done: !task.done,
                }
            }

            return task;
        })

        setTasks(newTasks);
    }

    //Utilizar o filter para remover a tarefa do array de tarefas
    function handleRemoveTask(taskId: string) {

    }
    
    return(
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="">Adicionar Tarefa</label>
                    <input 
                    value= {taskTitle} 
                    onChange={(event) => setTaskTitle(event.target.value)}
                    type="text" 
                    id="task-title" 
                    placeholder="Título da Tarefa"/>
                </div>

                <button type="submit">Adicionar Tarefa</button>
            </form>

            <ul>
                {tasks.map((task) =>{
                    return(
                        <li key={task.id}> 
                        {/* react identifica melhor os elementos */}
                            <input 
                                type="checkbox" 
                                id={`task-${task.id}`} 
                                onChange={() => handleToogleTasksStatus(task.id)}
                            />
                            <label 
                                className= {task.done ? styles.done : ""}
                                htmlFor={`task-${task.id}`}>
                                {task.title}
                            </label>

                            <button> Remover</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
    
}