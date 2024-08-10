import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis officia, veritatis quos dignissimos, nisi magni
            similique illum rem, distinctio minima fugiat veniam earum tenetur
            sunt nam quod aut doloribus ab. Atque nulla eaque modi labore
            deserunt voluptates id, in vero maiores saepe unde ut, expedita
            aperiam asperiores eos quisquam explicabo assumenda nam. Voluptatem
            fugit aperiam laudantium eius sequi repellat provident. Deleniti
            alias unde possimus, earum magni perspiciatis, voluptatem velit
            explicabo ullam amet similique eos minus illo soluta? Animi, error
            similique inventore rem harum itaque adipisci doloribus accusantium
            neque eligendi ipsum.
          </p>
          <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/public/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}

export default About;
