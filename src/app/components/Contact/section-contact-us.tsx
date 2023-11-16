"use client";

import "./style.css";

interface PropsImg {
  image1: any;
  image2: any;
}

function Button() {
  return (
    <button
    className="button-alert"
      onClick={() => alert("Contact sent. Soon we will return your contact.")}
    >
      Let´s Talk
    </button>
  );
}

export function ContactUs(props: PropsImg) {
  return (
    <div id="Contact" className="grid-container">
      <form>
        <p className="p1">LET´S TALK</p>
        <h1>contact us</h1>
        <p className="p2">We will email you back</p>

        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Your Name" />
        </div>
        <br />

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="Your Email" />
        </div>
        <br />

        <Button></Button>
      </form>

      <div className="image-container">
      <div className="image-wrapper">
          <img src={props.image1} alt="Imagem" />
          <img style={{width: 100, height: 100}} src={props.image2} alt="red cube" className="image2" />
        </div>
      </div>
    </div>
  );
}
