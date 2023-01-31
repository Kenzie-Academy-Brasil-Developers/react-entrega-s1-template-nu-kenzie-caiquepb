import NoCardImage from "../../assets/NoCard.svg";
import "./styles.css";

export const NoCard = () => (
  <section className="sectionPage__container">
    <h1 className="sectionPage__title">Reusumo financeiro</h1>
    <p className="sectionPage__paragraph">
      Você ainda não poussui nenhum lançamento
    </p>
    <img src={NoCardImage} alt="No Card Image" />
  </section>
);
