import styles from './styles.module.css'
import { PlusCircle } from 'phosphor-react'
import { TaskCard, TaskProps } from '../TaskCard'
import { ChangeEvent, FormEvent, useState } from 'react'
import {v4 as uuidv4} from 'uuid' //npm i --save-dev @types/uuid
import { EmptyList } from '../EmptyList'

export function TaskList(){
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
        onDeleteTask: deleteTask,
        onToggleCheckTask: toggleTaskCompleted,
      }
    ])

    setNewTaskText('');
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskId: string){
    const tasksWithoutDeleteOne = tasks.filter(task =>{
      return task.id !== taskId
    })
    setTasks(tasksWithoutDeleteOne)
  }
  function toggleTaskCompleted(taskId: string){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task
    })
    setTasks(newTasks)
  }
  return(
    <>
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
            <span>
              <span>Criar</span>
              <PlusCircle />
            </span>
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
                onDeleteTask={deleteTask} /* passado a função deleteTask*/
                onToggleCheckTask={toggleTaskCompleted}
              />
            )
          })}
        </div>

        {tasks.length === 0 ? <EmptyList />  : ""}

      </div>
    </>
  )
}
