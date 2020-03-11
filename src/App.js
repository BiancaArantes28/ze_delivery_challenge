import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="nav">
            <figure className="logoContainer">
              <img width="48" className="img-logo" src="https://courier-images-web.imgix.net/static/img/small-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" alt="entrar" />
            </figure>
            <div className="rightContainer">
              <button className="signInButton">Entrar</button>
              <div className="cartContainer">
                <div className="productAmount">0</div>
                <figure className="cartImageContainer">
                  <img src="https://courier-images-web.imgix.net/static/img/bag.svg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2" alt="cart" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
