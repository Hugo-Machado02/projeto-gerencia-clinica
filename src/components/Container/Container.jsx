import React from "react";
import './Container.css'

const Container = ({ children, name }) => {
  return (
    <>
      <div className="container-layout">
        <div className="titulo-pages"><h1>{name}</h1></div>
        <div className="conteudo-layout">{children}</div>
      </div>
    </>
  )
}

export default Container