import React from 'react'
import styles from './Galery.module.css'

export default function Galery({ imgs }) {
  
  const imgs=[{src: catalogue, id: 1}, {src: home1, id: 2}, {src: home2, id: 3},{src: detail, id: 4}, {src: catalogueFilter, id: 5}]
  
  return (
    <div className={styles.container}>
      {imgs?.map(e => (
        <img className={styles.galery} src={e.src} alt={`Image ${e.id} from the galery`} key={e.id} />
      ))}
    </div>
  )
}
