import Head from 'next/head'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
    </div>
  )
}
