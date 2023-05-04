import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";

import { Avatar } from "../components/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comments({ content, onDeleteComment }: CommentProps) {
  const [linkeCount, setLinkeCount] = useState(0);

  function handleLikeComment() {
    setLinkeCount((state) => {
      return state + 1;
    });

    setLinkeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comments}>
      <Avatar hasBoder={false} src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio as 11:13" dateTime="2022-05-11 08:13:38">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={25} />
            Aplaudir <span>{linkeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
