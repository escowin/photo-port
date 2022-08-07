import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore consequatur tempore unde voluptatem eaque cupiditate asperiores veniam fugit eum.</p>
        </section>
    );
}

export default About;