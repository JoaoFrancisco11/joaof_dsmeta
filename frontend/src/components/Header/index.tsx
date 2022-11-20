import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/JoaoFrancisco11"> João Francisco </a>
                    durante a semana de Spring React do programa DevSuperior.
                </p>
            </div>
        </header>
    )

}

export default Header;
