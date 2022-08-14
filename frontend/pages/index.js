import ListItens from '../components/listItens'
import Sidebar from '../components/sideBar'
import TopBar from '../components/topBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Sidebar />

      <div className={styles.Content}>
        <TopBar />

        <ListItens />

      </div>

    </div>
  )
}
