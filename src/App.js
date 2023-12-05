import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Card from './components/card/card.jsx';
import Title from './components/title/title.jsx';
import { Link } from 'react-router-dom';
import Projets from './components/projets/projets.jsx';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <About/>
      <div className="my-skill">
      <Title titles="Minhas Skills"/>
      <div className="card-Skill">
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
      <Card Imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" tecno="js" descrição="uma linguagem voltada para desenvovimento web mas pode ser usada para tudo"/>
    </div>
    <Link to="/segunda">Ir para a Segunda Página</Link>
    </div>
    <Route path="/segunda" component={Projets} />
    </div>
    </Router>
  );
}

export default App;
