import Main from "../component/main/Main";
import Header from "../component/header/Header";
import "../../src/assets/css/MainPage.css";
import React from "react";
import { useParams } from 'react-router-dom'

function MainPage({ logo, alt }) {
  const searchParams = useParams("id").id
  return (
    <>
        <Header logo={logo} alt={alt} id={searchParams}/>
        <Main logo={logo} alt={alt} id={searchParams}/>
    </>
  );
}

export default  MainPage;
