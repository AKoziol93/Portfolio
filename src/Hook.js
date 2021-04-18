import React from "react";

class Hook extends React.Component {    

    render() {
        const { details, activeLanguage } = this.props;
        return (
            <div>

                <a  href={details[activeLanguage].contentName}>{details[activeLanguage].contentName}</a>

            </div>
            );
    }


}


export default Hook;