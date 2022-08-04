import React from "react";

function Nav() {
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    const categories = [
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects",
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* [categories {objects}] are mapped over as "category" argument being passed thru map(). all 4 {name: ...} display as seperate <li> elements */}
                    {categories.map((category) => (
                        // Whenever anything is mapped in JSX, the outermost element must have a uniquely-set key attribute. React keeps track of items in the virtual DOM
                        <li
                         className="mx-1" 
                         key={category.name}
                        >
                            {/* onClick expects a callback function declaration. It's important to wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well. */}
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
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