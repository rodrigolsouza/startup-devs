import Card from "./Card";
import "./style.css";

function Container() {
  return (
    <div className="main">
      <div className="container">
        <div className="learnAU">
          <p>ALGUNS PONTOS FORTES</p>
        </div>
        <div className="content-title">
          <p className="title">Por que escolher os serviçoes da Tech4?</p>
        </div>

        <div className="content-paragraph">
          <p className="paragraph">
            Aqui estão três razões pelas quais você deve nos escolher para
            construir sua infraestrutura, dar suporte a seu pessoal e sistemas,
            bem como aconselhá-lo em projetos que reduzirão seu risco,
            aumentarão sua produtividade e fornecerão uma vantagem competitiva
            real.
          </p>

          <Card />
          <Card />
          <Card />
        </div>
        <div className="img-content">
          <img
            className="img"
            src="https://cdn.lugc.link/15b2b0d0-fabc-4dcf-8db6-1b66add11964/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/x506/"
            alt="imagem de um laptop aberto"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
