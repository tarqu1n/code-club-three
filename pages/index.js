import React, { useState } from 'react';
import Head from 'next/head'
import CubeCloud from './components/Scene/Scene';
import SolarSystem from './components/SolarSystem/Scene';
import styles from './index.module.css';

export default function Home() {

  const [page, setPage] = useState('solar-system')

  const handleBtnClick = name => () => setPage(name);
  return (
    <div className={styles.container}>
      <ul>
        <li><button onClick={handleBtnClick('cube-cloud')}>Cube Cloud</button></li>
        <li><button onClick={handleBtnClick('solar-system')}>Solar System</button></li>
      </ul>
      { page === 'cube-cloud' && <CubeCloud /> }
      { page === 'solar-system' && <SolarSystem/> }
    </div>
  )
}
