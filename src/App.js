import logo from './logo.svg';
import {useEffect} from "react";
import styles from "./App.module.css";
import Test from "./Test"

function App() {
  return (
    <div className="style.App">
      {console.log(styles)}
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test/>
      
      {process.env.NODE_ENV === "development" && (
        <div>
          <img src="/logo192.png" alt=""/>
          <img src={logo} alt=""/>
        </div>
      )}
    </div>
  );
}

export default App;
