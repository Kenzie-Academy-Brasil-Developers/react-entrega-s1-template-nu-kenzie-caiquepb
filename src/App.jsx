import { useState } from "react";
import FrontPageImage from "./assets/FrontPageImage.svg";
import LogoNuKenzieFrontPage from "./assets/NuKenzieLogoFrontPage.svg";
import LogoNuKenzieMainPage from "./assets/NuKenzieLogoMainPage.svg";
import NoCard from "./assets/NoCard.svg";
import "./App.css";
import "./styles/reset.css";

function App() {
  // const [listTransactions, setListTransactions] = useState([]);

  const [page, setPage] = useState(true);

  const Login = () => setPage(!page);

  const Logout = () => setPage(!page);

  return (
    <>
      {page ? (
        <main className="main__container">
          <section className="section__container">
            <img src={LogoNuKenzieFrontPage} alt="Logo Nu Kenzie" />
            <div className="section__box">
              <h1 className="section__title">
                Centralize o controle das suas finanças
              </h1>
              <p className="section__paragraph">de forma rápida e segura</p>
              <button className="section__button" type="button" onClick={Login}>
                Iniciar
              </button>
            </div>
          </section>
          <img src={FrontPageImage} alt="Front Page Image" />
        </main>
      ) : (
        <>
          <header className="header__container">
            <img src={LogoNuKenzieMainPage} alt="Logo Nu Kenzie" />
            <button className="header__button" type="button" onClick={Logout}>
              Início
            </button>
          </header>
          <main className="mainPage__container">
            <form className="form__container">
              <div className="form__box">
                <label className="form__title" htmlFor="description">
                  Descrição
                </label>
                <input
                  className="form__input"
                  type="text"
                  placeholder="Digite aqui sua descrição"
                ></input>
                <p className="form__paragraph">Ex: Compra de roupas</p>
              </div>
              <div className="form__valueBox">
                <div>
                  <label className="inputValueNumber__title" htmlFor="value">Valor</label>
                  <div className="inputValueNumber__container">
                    <input className="inputValueNumber__input" type="number" placeholder="1" />
                    <p className="inputValueNumber__paragraph">R$</p>
                  </div>
                </div>
                <div className="inputSelect__container">
                  <h1 className="inputSelect__title">Tipo de Valor</h1>
                  <select className="inputSelect__select" name="" id="">
                    <option value="">Entrada</option>
                    <option value="">Saída</option>
                  </select>
                </div>
              </div>
              <button className="form__button" type="button">
                Inserir Valor
              </button>
            </form>
            <section className="sectionPage__container">
              <h1 className="sectionPage__title">Reusumo financeiro</h1>
              <p className="sectionPage__paragraph">
                Você ainda não poussui nenhum lançamento
              </p>
              <img src={NoCard} alt="No Card Image" />
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
