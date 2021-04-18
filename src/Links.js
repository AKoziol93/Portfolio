import React from "react";


class Links extends React.Component {    

    render() {
        const language = {            
            "ENG":{
                textName: "Links"},            
            "PL":{
                textName: "Linki"}
          }

          const { activeLanguage } = this.props;
       
        return (
            <div>   

            <h1>{language[activeLanguage].textName}</h1> 

            <h2><a href="https://pa-ko-construction.pl/">Pa-Ko Tarnów</a>
            </h2>
                
            </div>
            );
    }


}


export default Links;