import React from "react";
import './App.css';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <h1 className="nome">Paloma Wink</h1>
        <p className="sobre">Sou uma futura desenvolvedora web que adora desenhar e que está aprendendo React</p>
        <h2 className="hab">Minha habilidades</h2>
        <ul>
          <li className="list">HTML</li>
          <li className="list">CSS</li>
          <li className="list">JavaScript</li>
          <li className="list">React</li>
        </ul>
      </div>
    )
  }
}

export default AboutMe