import { Header } from "./components/Header";
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"
import './global.css';

export function App() {

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://github.com/diego3g.png',
        name:'Vitor Hall',
        role:'CTO @Rocketseat'
      },
      content: [
        { type:'paragraph', content:'Fala Galera'},
        { type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad dolorum omnis, quasi laborum itaque magnam provident eligendi nisi repellendus adipisci quos, aspernatur ducimus inventore cum exercitationem, iure debitis? Sed.'},
        { type:'link', content:'Jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 2,
      author:{
        avatarUrl: 'https://github.com/diego3g.png',
        name:'Felipe Hall',
        role:'CTO @Rocketseat'
      },
      content: [
        { type:'paragraph', content:'Fala Galera'},
        { type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad dolorum omnis, quasi laborum itaque magnam provident eligendi nisi repellendus adipisci quos, aspernatur ducimus inventore cum exercitationem, iure debitis? Sed.'},
        { type:'link', content:'Jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-05-16 20:00:00'),
    },

  ];

  return (
    <div>
      <Header />
      
     <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
            )
          })}
        </main>
     </div>
    </div>
  )
}
