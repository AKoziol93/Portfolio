import React from "react";



class FileContent extends React.Component {    

    render() {
        const { details, activeLanguage } = this.props;
        const textContent=details[activeLanguage].content;
        
       
        return (
            <div>                
                
                    <h1>{details[activeLanguage].contentName}</h1>
                    <div dangerouslySetInnerHTML={{ __html: textContent }} />
                
            </div>
            );
    }


}


export default FileContent;