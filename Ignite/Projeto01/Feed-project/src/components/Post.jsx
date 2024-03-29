import React from 'react'
import { useState } from 'react'
import styles from "./Post.module.css"
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export const Post = ({author, content, publishedAt}) => {
    const publishedDateFormatted =  format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {locale:ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale:ptBR, addSuffix: true})
    
    const [comments, setComments] = useState(["Post muit massa, hein?!"])
    const [newCommentText, setNewCommentText] = useState("")

    const isNewCommentEmpty = newCommentText.length === 0;

    

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText]); 
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }
    
    function deleteComment(commentToDelete){
        const commentWithoutDeletedOne = comments.filter(comment=>{
            return comment !== commentToDelete
        }) 
        setComments(commentWithoutDeletedOne);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    return (    
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dataTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow} 
                </time>
            </header> 
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph"){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type === "link"){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    required
                    onInvalid={handleNewCommentInvalid}
                    name="comment"
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button 
                        disabled={isNewCommentEmpty}
                        type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
               {comments.map( comment => {
                return <Comment 
                    onDeleteComment={deleteComment} 
                    key={comment} 
                    content={comment}
                />
               })}
            </div>
        </article>
  )
}
