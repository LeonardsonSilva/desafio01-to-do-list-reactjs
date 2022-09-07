import './global.css'
import {Header} from './components/Header'
import styles from './App.module.css'
import {PlusCircle} from 'phosphor-react'
import { TaskCard } from './components/TaskCard'
import { ChangeEvent, FormEvent, useState } from 'react'
import {v4 as uuidv4} from 'uuid' //npm i --save-dev @types/uuid
import {TaskProps} from './components/TaskCard'

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);  //<any[]>([]) por causa da info: type string is not assignable to type never
  const [newTaskText, setNewTaskText] = useState('');

  const quantityTasks = tasks.length
  const quantityTasksCompleted = tasks.filter((task) => task.isCompleted==true).length

  function handleNewTask(event: FormEvent){
    event.preventDefault() //para previnir ser redirecionado para outra página

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTaskText,
        isCompleted: false,
      }
    ])

    setNewTaskText('');
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>

        <form onSubmit={handleNewTask} className={styles.newTaskForm}>
          <input
            type="text"
            name='inputTask'
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskInputChange}
            value={newTaskText}
            required
          />
          <button type='submit'>
            Criar <PlusCircle size={16}/>
          </button>
        </form>

        <div className={styles.taskInfo}>
          <div className={styles.taskInfoCreated}>
            Tarefas criadas <span className={styles.numberTasks}>{quantityTasks}</span>
          </div>
          <div className={styles.taskInfoCompleted}>
            Concluídas <span className={styles.numberTasks}>{quantityTasksCompleted} de {quantityTasks}</span>
          </div>
        </div>

        <div>
          {tasks.map(task =>{
            return (
              <TaskCard
                key={task.id}
                id={task.id}
                description={task.description}
                isCompleted={task.isCompleted}
              />
            )
          })}
        </div>

      </div>
    </>
  )
}
