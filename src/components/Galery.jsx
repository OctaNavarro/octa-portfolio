import React from 'react'
import styles from './Galery.module.css'

export default function Galery({ imgs }) {
  return (
    <div className={styles.container}>
      {imgs?.map(e => (
        <img
          className={styles.galery}
          src={e.src}
          alt={`Image ${e.id} from the galery`}
          key={e.id}
        />
      ))}
    </div>
  )
}
