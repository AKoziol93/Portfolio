import React from "react";
import "./css/style.css";
import Top from "./Top";
import Menu from "./Menu";
import base from "./base";
import FileContent from "./FileContent";
import Links from "./Links";



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: "PL",
      files: {},
    }

    this.swapLanguage = this.swapLanguage.bind(this);
  }

  swapLanguage(language){
    console.log(language);
    console.log(this.state);
    this.setState({selectedLanguage: language})
  }

  componentDidMount() {   
    this.ref = base.syncState(`/files`, {
      context: this,
      state: "files"
    });
  }


  render() {
    return (
      <div id="mainBody">
        <Top />
        <Menu swapLanguage={this.swapLanguage} />
        <div className="bodyContent">
        {Object.keys(this.state.files).map(key=>(<FileContent activeLanguage={this.state.selectedLanguage} key={key} details={this.state.files[key]}
              />))}
        <Links activeLanguage={this.state.selectedLanguage} />
        </div>
      </div>
    );
  }
}
export default App;