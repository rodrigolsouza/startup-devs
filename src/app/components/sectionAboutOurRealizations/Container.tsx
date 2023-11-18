import Card from "./Card";
import "./style.css";

export function Container() {
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
          
        </div>
      </div>
    </div>
  );
}

