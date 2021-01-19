import Head from 'next/head'
import Scene from './components/Scene/Scene';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Scene />
    </div>
  )
}
