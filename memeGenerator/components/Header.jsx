import React from "react";

function Header(){
    return (
      <header className="header">
        <img
          src="https://source.unsplash.com/random/?troll face"
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    );
}

export default Header