import React from "react";
import "./css/style.css";
import Hook from "./Hook";

class Menu extends React.Component {
  

  render() {

    const images = {
      "ENG": {
        scrImage: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-k8_QfOfYZhA%2FTW5sRfnAROI%2FAAAAAAAAABc%2FraM329Ll9x8%2Fs1600%2Fuk.flag.png&f=1&nofb=1",        
        altImage: "ENG",
      },
      "PL": {
        scrImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png",
        altImage: "PL",
      }
    }

    return (
      <div className="menuTop">
        <a onClick={() => this.props.swapLanguage("PL")}>
          
          <img
          src={images["PL"].scrImage}
          alt={images["PL"].altImage}
          />  
        
        </a>
        <a onClick={() => this.props.swapLanguage("ENG")}>
         
          <img
          src={images["ENG"].scrImage}
          alt={images["ENG"].altImage}
          />  
        
        </a>
      </div>
    );
  }
}

export default Menu;
