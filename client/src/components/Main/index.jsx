import React from "react";
import "./Main.css";

import colors from "../utils/colors";
import Screen from "../Screen";
import Screen2 from "../Screen2";

import ursinho_pandinha_ok from "../assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "../assets/ursinho_estudando.gif";
import pandinha_brava from "../assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "../assets/pandinha.gif";
import ursinho_S2_pandinha from "../assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "../assets/ursinha_chorando.gif";
import ursinho_chorando from "../assets/ursinho_chorando.gif";
import pandinha_martelo from "../assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "../assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "../assets/ursinho_coracao.jpg";
import pandinha_coracao from "../assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "../assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "../assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "../assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "../assets/ursinhos_bebida.gif";
import ursinha_mordidas from "../assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "../assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "../assets/ursinhos_dormindo.gif";
import eddyS2Lidiane from "../assets/eddyS2Lidiane.jpeg";

const Main = () => {

  return (
    <div className="main">
      <Screen2
        title="Helllooooooooo 💖"
        bgColor={colors.red}
        textColor={colors.white}
        text="meri pyaari pyaari jaaannnnnn!!!! 🥰🥰🥰"
        btnText="Next <3"
        sequency="1"
      />
      <Screen2
        title="Today is 14th Feburary...... 😚😚"
        maxWidth="900px"
        bgColor={colors.red}
        textColor={colors.white}
        text="(which means..........)"
        btnText="Next Next <3"
        sequency="2"
      />
      <Screen2
        fontWeight="bold"
        title="HAPPY VALENTINE'S DAY!!!! 💝🧸"
        maxWidth="900px"
        bgColor={colors.red}
        textColor={colors.white}
        text="meri jaaannnn Fatimaaa!!!! 😇😇"
        btnText="Moree..... ;)"
        sequency="3"
      />
      <Screen2
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Ursinho S2 Pandinha"
        text="Como ja disse, esses dois hoje são namorados, eles não são perfeitos... mas sempre se ajudam e superam os problemas juntos."
        btnText="Continuar"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Pandinha triste"
        text="As vezes a pandinha fica triste com algumas coisas, e fica chorando e triste... :( Mas o ursinho sempre vem tentar animar ela e quase sempre consegue fazer ela rir"
        btnText="Continuar"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Ursinho triste"
        text="As vezes é o ursinho que fica triste com alguns problemas, e ai a pandinha vem com seu amorzinho e fofura e ajuda o ursinho quando ele ta tristinho. :)"
        btnText="Continuar"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Ursinho lerdo"
        text="O ursinho é lerdo e as vezes não entende o que a pandinha quis dizer exatamente, e entende totalmente diferente..."
        btnText="Continuar"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Pandinha e sua paciência"
        text="A pandinha é MUITO AMOROSA, mas a falta de paciência é igual... e as vezes ela fica irritada porquê o ursinho é lerdo."
        btnText="Continuar"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Insistência do ursinho"
        text="A pandinha não gosta de ser direta, ai o ursinho vai perturbar a pandinha até ela falar..."
        btnText="Continuar"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="O amor do ursinho"
        text="Ai o ursinho depois de horas tentando explicar, pede desculpas por ser lerdo e fala o quanto ama a pandinha."
        btnText="Owwwwn <3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="O amor da pandinha"
        text="A pandinha por trás de toda sua falta de paciência tambem ama o ursinho, e caba falando que ama ele tambem."
        btnText="Owwwwn <3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="Depois disso..."
        text="Depois de tudo resolvido, os dois ficam bem e ficam felizes... e fazem muitas coisas juntos como amigos e namorados que são."
        btnText="Continuar"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Eles caminham juntos"
        text="Os dois adoram caminhar juntos, riem bastante principalmente das 'zinimiga' da pandinha. ~risos"
        btnText="Caminhando..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Hoje eles tiram fotos juntos"
        text="A pandinha quer sair perfeitinha nas fotos sempre pede para o ursinho tirar de novo ~risos"
        btnText="Mais fotinhas..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Bebem juntos"
        text="Ursinho e pandinha adoram beber juntos, e curtir os bons momentos com algumas músicas"
        btnText="bebidas depois..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="A ursinha fica brincando com o ursinho"
        text="Parece divertido olhando assim hahaha ... para a ursinha é claro... olha o coitado do ursinho, olha a cara pandinha! ~coitado_gente"
        btnText="Mordidas depois..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="A noite"
        text="Mas todos os dias, quando o ursinho não aguenta mais ficar acordado convernsando com a pandinha, eles se despedem e fingem dormir juntinhos"
        btnText="Cochiladas mais tarde..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="E finalmente dormem"
        text="Viu eles tem momentos dificeis as vezes, e choram, e ficam irritados... mas quando tudo fica no seu lugar, eles se amam bastante e riem."
        btnText="Eles dormem"
        sequency="18"
      />
      <Screen
        imageUrl={eddyS2Lidiane}
        bgColor={colors.red}
        textColor={colors.white}
        title="Feliz dia dos namorados"
        text="Finalmente pensei em algo que ninguem nunca lhe deu e que nunca dei a alguem... Espero que tenha gostado. Te amo Lidiane como nunca Amei alguem... ~Eddy"
        btnText="Fim"
        sequency="19"
      />
    </div>
  );
};

export default Main;


// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;
