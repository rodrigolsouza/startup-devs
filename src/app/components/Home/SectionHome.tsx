import "./styleHome.css";

interface SectionHomeProps {
  imgSrc: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function SectionHome({
  imgSrc,
  title,
  subtitle,
  buttonText,
}: SectionHomeProps) {
  return (
    <section id="Home" className="grid-container-home">
      <div className="section-content">
        <div className="text-container">
          <p className="p1">HELLO, WE ARE</p>
          {title && <h1>{title}</h1>}
          {subtitle && <p className="p2">{subtitle}</p>}
        </div>

        <div className="button-container">
          {buttonText && (
            <button onClick={() => alert("Fale com a gente ! ")}>
              {buttonText}
            </button>
          )}
        </div>
      </div>

      
      

      <div className="image-container-home">
        <img className="image-people" src={imgSrc} alt="Right Image" />
        <div className="shape">
        <img className="cube-one" src="https://cdn.lugc.link/3460bcf5-cd68-454e-9e4d-b7a338ac55f6/-/stretch/off/-/format/auto/-/quality/normal/-/resize/56x/" alt="Circle" />
        <img className="cube-two" src="https://cdn.lugc.link/6e88c0b1-fdd0-4df2-a546-630f09d735a0/-/stretch/off/-/format/auto/-/quality/normal/-/resize/53x/" alt="Square" />
        <img className="pyramid" src="https://cdn.lugc.link/81472342-e225-4655-935c-5d1afd2eb887/-/stretch/off/-/format/auto/-/quality/normal/-/resize/87x/" alt="Triangle" />
        </div>
        

      </div>

    </section>
  );
}
