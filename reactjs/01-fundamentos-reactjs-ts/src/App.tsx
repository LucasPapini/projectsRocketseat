import { Header } from "./components/Header";
import { Siderbar } from "./components/Siderbar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LucasPapini.png",
      name: "Lucas Papini",
      role: "Full Stack",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-10 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
