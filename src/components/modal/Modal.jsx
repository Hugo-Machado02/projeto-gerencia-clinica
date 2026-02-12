import React from 'react';
import './Modal.css'; 

const Modal = ({ estaAberto, aoFechar, children, titulo }) => {
  if (!estaAberto) return null;

  return (
    <div className="modal-background" onClick={aoFechar}>
      <div 
        className="modal-conteudo" 
        onClick={e => e.stopPropagation()} 
      >
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button className="botao-fechar" onClick={aoFechar}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;