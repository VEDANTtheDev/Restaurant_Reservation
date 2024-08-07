import React from 'react';
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>Th only thing we're serious about is food.</p>
            </div>
            <p className='mid'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium, sapiente aut deleniti fugit repellat inventore, esse recusandae dolorum eaque sequi repudiandae! Voluptatem asperiores ratione non sint dolore natus repellendus excepturi fugiat iste possimus quaerat laboriosam dolores consectetur sapiente sunt, eius, debitis sit. Illo assumenda, eos debitis quidem incidunt maiores!
            </p>
            <Link to={"/"}>
              Explore Menu{" "} 
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About
