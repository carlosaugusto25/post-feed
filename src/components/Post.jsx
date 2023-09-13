import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={'https://avatars.githubusercontent.com/u/65244119?v=4'} alt="Avatar do usuário" />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Augusto</strong>
                        <span>Dev Front-End Jr.</span>
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
        </article>
    )
}