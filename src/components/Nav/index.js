import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// hooks:
//  1. only all hooks from react functions
//  2. only call hooks at the top level. unable to use in for loops, nested functions, or conditionals.

// lifting states:
// 1. use if state needs to be used in sibling components
// ex. lift <Nav> state to <App> so that <Nav> props can be used in <Gallery>

function Nav(props) {
    // App | props definition
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                    </span>{" "}
                    Oh snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* [categories {objects}] are mapped over as "category" argument being passed thru map(). all 4 {name: ...} display as seperate <li> elements */}
                    {categories.map((category) => (
                        // - evaluates ${... === ...} && as long as it's true, navActive will be returned.
                        // - outermost jsx element must have a uniquely-set key attribute (bc virtual dom tracking).
                        <li
                         className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                         key={category.name}
                        >
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
// **pause 20.1.6 map()

export default Nav;