import TechsStyle from './styles';
import imageCss from '../../assets/images/icons8-css3.svg';
import imageGitHub from '../../assets/images/icons8-github.svg';
import imageHtml from '../../assets/images/icons8-html-5.svg';
import imageJavaScript from '../../assets/images/icons8-javascript.svg';
import imageReact from '../../assets/images/icons8-nativo-de-reagir.svg';
import imageRedux from '../../assets/images/icons8-redux.svg';
import imageNodeJS from '../../assets/images/icons8-nodejs.svg';
import imageSQL from '../../assets/images/icons8-sql-100.png';
import imageMongoDB from '../../assets/images/icons8-mongodb.svg';
import imageDocker from '../../assets/images/icons8-docker.svg';

export default function Techs() {
  return (
    <TechsStyle>
      <img src={imageGitHub} alt="Ícone Git Hub" />
      <img src={imageHtml} alt="Ícone HTML" />
      <img src={imageCss} alt="Ícone CSS" />
      <img src={imageJavaScript} alt="Ícone JavaScript" />
      <img src={imageReact} alt="Ícone React" />
      <img src={imageRedux} alt="Ícone Redux" />
      <img src={imageNodeJS} alt="Ícone Node JS" />
      <img src={imageSQL} alt="Ícone SQL" />
      <img src={imageMongoDB} alt="Ícone MongoDB" />
      <img src={imageDocker} alt="Ícone Docker" />
    </TechsStyle>
  );
}