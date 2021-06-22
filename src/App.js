import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ironhack from './assets/images/ironhack-logo.svg';
import menu from './assets/images/menu-top.svg';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import reactlogo from './assets/images/react-logo.svg';


function App() {
  return (
    <div className="App">
        <div className="nav">
          <img src={ironhack}/>
          <img src={menu}/>
        </div>
      <header className="App-header">
        <p>
          <div className="header">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          </div>
        </p>
        <div className="subheader">
          <p>
            You will learn hot to use
            <br />
            the most popular frontend library
            <br />
            and become a super Ninja developer.
          </p>
        </div>
      </header>
      <footer className="foot">
        
          <img src={icon1}/>
          <img src={icon2}/>
          <img src={icon3}/>
          <img src={icon4}/>
        
      </footer>
    </div>
    )
};

export default App;
