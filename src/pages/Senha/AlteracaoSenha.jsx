import React, { useState } from 'react';

const senha_verificacao = 'senha123'; 

const AlteracaoSenha = ({ aoAlterarSenha, aoCancelar }) => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [estaCarregando, setEstaCarregando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setEstaCarregando(true);

    if (senhaAtual !== senha_verificacao) {
      setErro('A senha atual está incorreta.');
      setEstaCarregando(false);
      return;
    }

    if (novaSenha !== confirmarNovaSenha) {
      setErro('A nova senha e a confirmação não coincidem.');
      setEstaCarregando(false);
      return;
    }

    if (novaSenha.length < 6) {
      setErro('A nova senha deve ter no mínimo 6 caracteres.');
      setEstaCarregando(false);
      return;
    }
    
    setTimeout(() => {
        setSucesso('Senha alterada com sucesso!');
        aoAlterarSenha(true); 
        setEstaCarregando(false); 
        setSenhaAtual('');
        setNovaSenha('');
        setConfirmarNovaSenha('');
    }, 1500); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>{erro}</p>}
      {sucesso && <p style={{ color: 'green', fontWeight: 'bold' }}>{sucesso}</p>}

      <div className="campo-senha">
        <label htmlFor="senha-atual">Sua Senha Atual:</label>
        <input
          id="senha-atual"
          type="password"
          value={senhaAtual}
          onChange={(e) => setSenhaAtual(e.target.value)}
          required
          disabled={estaCarregando} 
        />
      </div>

      <div className="campo-senha">
        <label htmlFor="nova-senha">Nova Senha:</label>
        <input
          id="nova-senha"
          type="password"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
          disabled={estaCarregando}
        />
      </div>

      <div className="campo-senha">
        <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha:</label>
        <input
          id="confirmar-nova-senha"
          type="password"
          value={confirmarNovaSenha}
          onChange={(e) => setConfirmarNovaSenha(e.target.value)}
          required
          disabled={estaCarregando}
        />
      </div>

      <div className="botoes-acao-senha">
        <button type="button" onClick={aoCancelar} disabled={estaCarregando}>
          Cancelar
        </button>
        <button type="submit" disabled={estaCarregando}>
          {estaCarregando ? 'Aguarde...' : 'Alterar Senha'}
        </button>
      </div>
    </form>
  );
};

export default AlteracaoSenha;