import React from 'react'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

export const Comment = () => {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/FelipeLeiteSobral.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Felipe Leite Sobral</strong>
                        <time title="11 de Maio às 08:13" dataTime="2022-05-11 08:13:30" >Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>Muito bom Devon, Parabéns!! </p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20 </span>
                </button>
            </footer>
        </div>
    </div>
  )
}
