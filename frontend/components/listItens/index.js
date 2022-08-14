import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ListItens() {

  const router = useRouter()
  const { page } = router.query


  const Lista = [
    {
      name: 'Nome Sobrenome 1',
      email: 'email@email.com',
      companyName: 'Copel',
      state: 'BA',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 2',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 3',
      email: 'email@email.com',
      companyName: 'Netflix',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 4',
      email: 'email@email.com',
      companyName: 'Rocketseat',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 5',
      email: 'email@email.com',
      companyName: 'Solyd',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 6',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 7',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 8',
      email: 'email@email.com',
      companyName: 'Enel',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 9',
      email: 'email@email.com',
      companyName: 'Vivo',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 10',
      email: 'email@email.com',
      companyName: 'Avalon',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 11',
      email: 'email@email.com',
      companyName: 'Copel',
      state: 'BA',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 12',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 13',
      email: 'email@email.com',
      companyName: 'Netflix',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 14',
      email: 'email@email.com',
      companyName: 'Rocketseat',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 15',
      email: 'email@email.com',
      companyName: 'Solyd',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 16',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 17',
      email: 'email@email.com',
      companyName: 'Google',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 18',
      email: 'email@email.com',
      companyName: 'Enel',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 19',
      email: 'email@email.com',
      companyName: 'Vivo',
      state: 'SP',
      role: 'editor'
    },
    {
      name: 'Nome Sobrenome 20',
      email: 'email@email.com',
      companyName: 'Avalon 2',
      state: 'SP',
      role: 'editor'
    },
  ]

  let teste = Lista.slice((0), (10));

  useState(() => {
    console.log(Lista.slice((10), (20)))
  }, [])

  const ListItem = ({ itemData }) => {
    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{itemData.email}</td>
        <td>{itemData.companyName}</td>
        <td>{itemData.state}</td>
        <td>{itemData.role}</td>
      </tr>
    )
  }

  return (
    <div className={styles.container}>

      <div className={styles.componentHead}>
        <span>Classificar por: </span>
        <button>Adicionar Produto</button>
      </div>

      <table className={styles.listItens}>

        <tr>
          <td>Nome</td>
          <td>Email</td>
          <td>Empresa</td>
          <td>Estado</td>
          <td>Cargo</td>
        </tr>

        {

          teste.map((item, index) => {
            return <ListItem itemData={item} />
          })
        }

      </table>

      <p>Pagina 1</p>

    </div>
  )
}
