import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { BsTrash, BsHandThumbsUp } from 'react-icons/bs';

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={props.hasBorder} src={props.src} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authAndTime}>
                            <strong>Carlos Augusto</strong>
                            <time title='11 de setembro as 08:30h' dateTime='2023-09-10 08:30:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <BsTrash />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <BsHandThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}