import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

// prop pass down
// <App> | <Gallery currentCategory={currentCategory}/>

function Gallery({ currentCategory }) {
    // destructures name & description properties from currentCategory
    const { name, descrption } = currentCategory;

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{descrption}</p>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Gallery;