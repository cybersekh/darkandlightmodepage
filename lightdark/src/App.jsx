import './App.css'
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = (useState("light"))

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="father" id={theme}>
      <div className="fullcard">
        <div className="cardbox">
          <h1>Gon</h1>
             <img className="imagem" src="https://i.pinimg.com/280x280_RS/b4/85/df/b485dfd594f08ce099feba4f96ece6ad.jpg" />
          </div>
          <div className="individual">
          "Gon é jovem, tem cabelo espetado, longo, negro e com um sombreado verde ao redor; seus olhos são grandes e castanhos. Normalmente, ele costuma usar uma jaqueta verde com bordas avermelhadas por cima de uma regata negra ou branca, veste também um short curto e esverdeado, calçado com botas da mesma cor. Em algumas sagas, como Greed Island ou Formigas Quimeras, ele deixa de usar a jaqueta, deixando a regata à mostra. Em toda a saga de Greed Island e no início da saga das Formigas Quimeras, ele usa o Colar do Paladino, uma carta de Greed Island que permite acabar com qualquer efeito externo de cartas que o usuários do colar esteja segurando."
        </div>
      </div>
      <ReactSwitch onChange={toggleTheme} checked={ theme ==="light"}/>
      </div>
      </ThemeContext.Provider>
  )
}

export default App
