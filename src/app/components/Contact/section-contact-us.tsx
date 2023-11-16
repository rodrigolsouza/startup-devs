"use client";

import "./style.css";

interface PropsImg {
  image1: any;
  image2: any;
  image3: any;
}

function Button() {
  return <button onClick={() => alert("Mensagem enviada. Em breve entraremos em contato.")}>Vamos conversar</button>;
}

export function ContactUs(props: PropsImg) {
  return (
    <div className="grid-container">
      <form>
        <p className="p1">VAMOS CONVERSAR</p>
        <h1>nos contate</h1>
        <p className="p2">Entraremos em contato com você de volta </p>

        <div className="input-group">
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" name="name" placeholder="Seu Nome" />
        </div>
        <br />

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="Seu Email" />
        </div>
        <br />

        <Button />
      </form>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={props.image1} alt="Imagem" />
          <img style={{width: 100, height: 100}} src={props.image2} alt="Cubo" className="image2" />
          <img style={{width: 100, height: 100}} src={props.image3} alt="Pirâmide" className="image3" />
        </div>
      </div>
    </div>
  );
}
