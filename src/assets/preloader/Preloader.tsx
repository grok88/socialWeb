import preloader from "../preloader/svg-loaders/oval.svg";
import React from "react";

const Preloader = () => {
    return (
        <img src={preloader} alt="preloader" style={ { margin:'300px 300px',} }/>
    );
}

export default Preloader;