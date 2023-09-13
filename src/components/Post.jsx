import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={'https://avatars.githubusercontent.com/u/1467125?v=4'} />
                    <div className={styles.authorInfo}>
                        <strong>Albert Dias</strong>
                        <span>Dev Front-End Senior</span>
                    </div>
                </div>

                <time title='11 de setembro as 08:30h' dateTime='2023-09-10 08:30:00'>Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='#'>👉 jane.design/doctorcare</a></p>

                <div className={styles.hashtags}>
                    <p><a href='#'>#novoprojeto</a></p>
                    <p><a href='#'>#nlw </a></p>
                    <p><a href='#'>#rocketseat</a></p>
                </div>
            </div>

            <form className={styles.formComent}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário' />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment hasBorder={false} src={'https://avatars.githubusercontent.com/u/20101892?v=4'} />
                <Comment hasBorder={false} src={'https://avatars.githubusercontent.com/u/2254731?v=4'} />
                <Comment hasBorder={false} src={'https://avatars.githubusercontent.com/u/21209082?v=4'} />
            </div>
            
        </article>
    )
}