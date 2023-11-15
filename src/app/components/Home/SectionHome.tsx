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

      <div className="image-container">
        <img src={imgSrc} alt="Right Image" />
      </div>
    </section>
  );
}
