import '../stylesheets/About.css';
import img1 from '../assets/img/about/img1.jpg';
import img2 from '../assets/img/about/img2.JPEG';
import Slideshow from '../components/Slideshow';



function About() {

  const links = [
    { name: "Youtube of MIT Class Projects", url: "https://www.youtube.com/@brillantez6272/videos"},
    { name: "GitHub", url: "https://github.com/xflynx25" },
    { name: "Kaggle", url: "https://www.kaggle.com/nanassassin"},
    { name: "Handshake", url: "https://app.joinhandshake.com/stu/users/19751486"},
    { name: "LinkedIn", url: "https://www.linkedin.com/in/john-flynn-45318419b/" }
  ];

  //However, I am still open to consider job opportunities. 
  return (
    <div className="about">
      <div className="about-header">
        <div className="left-photos">
          <img src={img1} alt="Header" className="about-header-img" />
        </div>
        <div>
          <h1 className="about-name">John Flynn</h1>
          <p className="about-intro">
            MIT class of '23 graduate with a double-major in Physics and EECS, and concentration in Music. 
            <br/><br/>
            Master's degree in EECS with a focus in AI. Thesis work involves advancing portable MRI systems with hardware and software based signal processing advances. 
            <br/><br/>
            Relentlessly pursuing automation and better abstractions for attacking hard problems. Always open to collaborate with open-minded beings. 
          </p>
          <div className="links-container">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            ))}
          </div>
        </div>
        
        <div className="right-photos">
          <img src={img2} alt="Header" className="about-header-img" />
        </div>

        
      </div>
      <hr className="about-divider" />
      <div className="slideshow-container">
        <Slideshow interval={6000} offset={0} startIndex={0} /> 
        <Slideshow interval={6000} offset={2000} startIndex={1} /> 
        <Slideshow interval={6000} offset={4000} startIndex={2} /> 
      </div>
    </div>
  );
}

export default About;
