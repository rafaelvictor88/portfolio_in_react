import foto from '../../assets/images/rsz_1fotodeperfil.jpg';
import AboutStyle from './styles';

export default function About() {
  return (
    <AboutStyle>
      <div>
        <p>Olá, eu sou Rafael Victor, seja muito bem vindo ao meu portfólio!</p>
        <p>Sou de Macaé-RJ, tenho 33 anos e estudo desenvolvimento fullstack na Trybe.</p>
      </div>
      <div>
        <img src={ foto } alt="Minha Foto"/>
      </div>
    </AboutStyle>
  );
}