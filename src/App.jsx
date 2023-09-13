import { Header } from "./components/Header.jsx"
import { SideBar } from "./components/SideBar.jsx";
import { Post } from "./components/Post.jsx";

import style from './App.module.css';
import './global.css';

export function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
        </main>

      </div>
    </>
  )
}

