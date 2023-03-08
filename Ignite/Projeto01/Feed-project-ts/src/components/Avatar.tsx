import React, {ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props}:AvatarProps) => {
  return (
    <div>
        <img 
             className={hasBorder ? styles.avatarWithBorder : styles.avatar}     
            {...props}
        />
    </div>
  )
}
