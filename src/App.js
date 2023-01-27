import logo from './logo.svg';
import './App.css';
import Tela from './Tela';

function App() {
    return (
        <>
            <h1> Bem vindo a uma tela de login </h1>
            <input name="nome" placeholder="digite um nome" />
            <input name="email" placeholder="digite um email" />
            <button>Entrar</button>
            <Tela />
        </>
    );
}

export default App;
