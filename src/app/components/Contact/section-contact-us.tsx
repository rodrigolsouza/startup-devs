import "./style.css";

interface PropsImg {
  src: any;
}

export function ContactUs(props: PropsImg) {
  return (
    <div className="grid-container">
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

        <button type="submit">Let's talk</button>
      </form>

      <div className="image-container">
        <img src={props.src}></img>
      </div>
    </div>
  );
}

