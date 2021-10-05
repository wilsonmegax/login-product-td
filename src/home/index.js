import './Home.css';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';


function App() {

  return (
    
    <>
      <div className="Area">
        <div className="AreaLogin">
          <div className="leftAreaLogin">
            <img className="logo" src={logo} />
            <div className="form">
              <div className="titleDiv">
                <label className="title">Bem vindo ao <span>Painel</span></label><br />
              </div>
              <input placeholder="Digite seu e-mail" /><br />
              <input placeholder="Digite sua Senha" /><br />
              <Link to="/products"><button>Acessar</button></Link>
            </div>
          </div>
          <div className="rightAreaLogin"></div>
          <div className="imageAbsolut"></div>
        </div>
      </div>
    </>
  );
}

export default App;
