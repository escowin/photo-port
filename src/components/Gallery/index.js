import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

// prop pass down
// <App> | <Gallery currentCategory={currentCategory}/>

function Gallery({ currentCategory }) {
    // destructures name & description properties from currentCategory
    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Gallery;
// hooks
// - 1. only call hooks from React functions.
// - 2. only call hooks at the top level. cannot be used inside for loops, nested functions, or conditionals.
// - use hooks towards top of React component for organizational purposes & to follow above

// ex.
// import React, { useState } from "react";
// 
// function ClickCounter() {
//     const [count, setCount] = useState(0);
//    *const [state value, setter] = useState(initial state)
// 
//     function increment() {
//          setCount((prevState)=> )
//      }
// 
// **JSX**
//     return(
//         <div>
//             I've been clicked {count} times
//                              {state value} <- starts at initial state
//             <button onClick={increment}>add one</button>
//              event listener={function}
//         </div>
//     )
// }
// 
// export default ClickCounter;