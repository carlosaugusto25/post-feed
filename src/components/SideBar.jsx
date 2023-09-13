import { Avatar } from './Avatar';
import style from './SideBar.module.css';
import { PiPencilSimpleLineBold } from 'react-icons/pi';

export function SideBar(){
    return(
       <aside className={style.sidebar}> 
            <img className={style.cover} src={'https://images.unsplash.com/photo-1433259651738-0e74537aa8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="header pessoal" />
            
            <div className={style.profile}>
                <Avatar src={'https://avatars.githubusercontent.com/u/65244119?v=4'} alt="avatar user" />

                <strong>Carlos Augusto</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">< PiPencilSimpleLineBold  />Editar seu perfil</a>
            </footer>
       </aside>
    )
}