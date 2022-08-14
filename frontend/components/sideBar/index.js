import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Sidebar() {
  return (
    <div className={styles.container}>

      <h4 className={styles.logo}>
        SaaS Kit
      </h4>

      <div className={styles.userDiv}>
        <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/39846007?v=4' />

        <div className={styles.userDataDiv}>
          <strong>
            Arthur Martins
          </strong>
          <span>
            Arthurmartins08@outlook.com
          </span>
        </div>

      </div>

      <nav>
        <ul>
          <li>
            <span>Listagem</span>
          </li>
        </ul>
      </nav>

    </div>
  )
}
