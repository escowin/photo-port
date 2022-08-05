import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  // useState hook | SPA rendering
  const [contactSelected, setContactSelected] = useState(false);

  // originally found in <Nav>
  const [categories] = useState([
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
  ])

    // initialize category state as array of objects
    // - const [...] = useState(setter) 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
      //  passing getter & setter functions allow Contact component to modify App state. conditionally render based on selection
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      />
      <main>
        {/* SPA logic | ternary operator: if contactSelected is false, Gallery & About render. if contactSelected is true, ContactForm renders. supply false codition to render with ternary operators*/}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}/>
            <About/>
          </>
        ) : (
          <ContactForm/>
        )}
      </main>
    </div>
  );
}
// ** pause 20.4.1
export default App;