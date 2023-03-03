import React from 'react'
import styles from './Avatar.module.css'

export const Avatar = ({ hasBorder = true, src, }) => {
  return (
    <div>
        <img 
             src={src}
             className={hasBorder ? styles.avatarWithBorder : styles.avatar}     
             alt="" />
    </div>
  )
}
