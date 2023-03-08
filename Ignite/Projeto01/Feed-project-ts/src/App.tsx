import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import "./global.css";
import styles from "./App.module.css"

type PostsAtributes = {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

type Author = {
  name: string;
  role: string;
  avatarUrl: string;
}

type Content = {
  type: "paragraph" | "link"
  content: string;
}

const posts:PostType[] = [
  {
    id:1,
    author: {
      name: 'Felipe Leite Sobral',
      avatarUrl: "https://github.com/FelipeLeiteSobral.png",
      role: "Web Developer"
    },
    content: [
      {type:"paragraph", content:"Fala galeraa 👋"},
      {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content:"jane.design/doctorcare"},
    ],
    publishedAt:new Date("2022-05-03 20:00:00")
  },
  {
    id:2,
    author: {
      name: 'Mayk Brito',
      avatarUrl: "https://github.com/maykbrito.png",
      role: "educador @Rocketseat"
    },
    content: [
      {type:"paragraph", content:"Fala galeraa 👋"},
      {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content:"jane.design/doctorcare"},
    ],
    publishedAt:new Date("2022-05-10 20:00:00")
  }
];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper} >
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                post={post}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
