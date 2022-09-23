import styles from './styles.module.css'
import todoLogo from '../../assets/todoLogo.svg'

export function Header(){
  return(
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo To do listen"/>
    </header>
  )
}
