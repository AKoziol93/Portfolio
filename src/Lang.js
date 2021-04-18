import React from "react";

function Lang(){
    //  e.preventDefault();
    Lang=!Lang;
    if(Lang){
        Lang= "ENG";
    }else{
        Lang= "PL";
    }
    return Lang;
}

export default Lang;