import { Header } from "./components/Header.jsx"
import style from './App.module.css';
import './global.css';
import { SideBar } from "./components/SideBar.jsx";

export function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <SideBar />

        <main>
          
        </main>

      </div>
    </>
  )
}

