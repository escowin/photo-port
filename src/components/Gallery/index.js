import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg"

function Gallery(props) {
    // using {object} data structure, every gallery page will have name & description. 
    const currentCategory = {
        name: "commercial",
        descrption: "Photos of grocery stores, food trucks, and other commercial projects",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.descrption)}</p>
            <div>
                <img 
                 src={photo}
                 alt="commercial example"
                 className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;