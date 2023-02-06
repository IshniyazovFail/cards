import React from 'react';
import {Main} from "../features/main/Main";
import {Header} from "../features/header/Header";
import style from "./App.module.css"

function App() {
  return (
   <div className={style.container}>
       <Header/>
       <Main/>
   </div>
  );
}

export default App;
