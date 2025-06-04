import logo from './assets/logo.png'
import conheca_a_Bruna from './assets/Conheca_a_Bruna.png';
import { FaArrowRight } from "react-icons/fa6";
import './components/NavBar.css'
import './components/Content_Left.css'
import './components/Content_Right.css'
import Content_Rigth from './components/Content_Right'

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
          <section>
            <div className='main__content__left'>
              <h1 className='title' > Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
              </h1>
              <div className='main__content__left__'>
                <div className='saiba__mais'>
                  <p className='paragraph__content__left'>
                    Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
                    Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
                  </p>
                  <button className='btn__saibaMais'>
                    <p>
                      Saiba mais
                    </p>
                    <FaArrowRight />
                  </button>
                </div>
                <div className='conheca__Bruna'>
                  <img src={conheca_a_Bruna} />
                  <div className='conheca__Bruna__content'>
                    <div>
                      <h3 className='conheca__Bruna__title'>Conheça a Bruna</h3>
                      <p className='conheca__Bruna__paragraph'>Ver video</p>
                    </div>
                    <div>
                      <button className='btn__conheca__Bruna'>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='statistics'>
                <div className='statistics__itens'>
                  <h2 className='statistics__itens__title' >509</h2>
                  <p className='paragraph__content__left'>Vistos Tirados</p>
                </div>
                <div className='statistics__itens'>
                  <h2 className='statistics__itens__title'>602</h2>
                  <p className='paragraph__content__left'> Passaporte Tirados</p>
                </div>
                <div className='statistics__itens'>
                  <h2 className='statistics__itens__title'>634</h2>
                  <p className='paragraph__content__left'> Famílias Felizes</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='content-right' >
            <div className='btn_content_right'>
                <button className='btn_content_right btn'>
                    <p>
                        Tirar meu visto agora!
                    </p>
                </button>
            </div>
            <div className='main_content_right'>
                <h1 className='title_content_right'>Realize o seu sonho com a ajuda da Tirar Visto!</h1>
                <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
            </div>
        </div>
        
      </div>
    </section>
  );
}

export default Home
