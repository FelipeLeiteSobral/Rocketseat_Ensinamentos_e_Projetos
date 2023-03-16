import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import styles from "./Post.module.css"
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Content = {
    type: "paragraph" | "link"
    content: string;
}

type PostProps = {
    post: PostType; 
}

export type PostType = {
    id:number
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export const Post = ({post}:PostProps) => {
    const publishedDateFormatted =  format(post.publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {locale:ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale:ptBR, addSuffix: true})
    
    const [comments, setComments] = useState(["Post muito massa, hein?!"])
    const [newCommentText, setNewCommentText] = useState("")

    const isNewCommentEmpty = newCommentText.length === 0;

    

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText]); 
        setNewCommentText('')
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }
    
    function deleteComment(commentToDelete:string){
        const commentWithoutDeletedOne = comments.filter(comment=>{
            return comment !== commentToDelete
        }) 
        setComments(commentWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    return (    
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow} 
                </time>
            </header> 
            <div className={styles.content}>
                {post.content.map(line => {
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
