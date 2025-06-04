import rodaGigante from './assets/rodaGigante.png'
import logo from './assets/logo.png'
import './components/NavBar.css'
import MainContent from './components/mainContent'

function Home() {

  return (
    <section className='Home'>

      <div className='main'>
        <div className='content__left'>
          <header className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Logo Tirar Visto" />
            </div>
            <nav className="navbar-menu">
              <a href="#home" className="navbar-link"><strong>Home</strong></a>
              <a href="#quem-somos" className="navbar-link">Quem somos</a>
              <a href="#servicos" className="navbar-link">Serviços</a>
              <a href="#contato" className="navbar-link">Contato</a>
            </nav>
          </header>
          <MainContent />
        </div>
        <div className='content-right'>
          <img src={rodaGigante} />
          <button>Tirar meu visto agora!</button>
          <h1>Realize o seu sonho com a ajuda da Tirar Visto!</h1>
          <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
        </div>
      </div>
    </section>
  );
}

export default Home
