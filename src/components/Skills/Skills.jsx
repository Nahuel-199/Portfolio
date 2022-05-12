import React from 'react';
import css from "../../../src/img/css.png";
import html from "../../../src/img/html.png"
import js from "../../../src/img/js.png"
import git from "../../../src/img/git.png"
import mongo from "../../../src/img/mongo.png"
import next from "../../../src/img/next.png"
import node from "../../../src/img/node.png"
import postman from "../../../src/img/postman.png"
import react from "../../../src/img/react.png"
import redux from "../../../src/img/redux.png"
import sass from "../../../src/img/sass.png"
import sql from "../../../src/img/sql.png"
import styled from "../../img/styled.png"
import ts from "../../../src/img/ts.png"
import "./skill.css"

const Skills = () => {
  return (
    <div className="skills">
        <div className="title-container">
            <span className='title'>Mis Skills</span>
        </div>
        <div className="skill-item">
            <div className="container-img">
                <img src={css} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={html} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={git} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={js} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={mongo} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={next} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={node} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={postman} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={react} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={redux} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={sass} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={sql} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={styled} alt="" className="log" />
            </div>
            <div className="container-img">
                <img src={ts} alt="" className="log" />
            </div>
            </div>
            <div className="descriptions">
            <span className="item-desc">Estos son mis skills, 
             React, Redux, PostgreSQL, Nextjs, Styled-components, Postman,Typescript, Sass
             NodeJS, Figma, Express, JavaScript, HTML, CSS, MongoDB.</span>
             <span className="item-title">¿Qué incluyen mis habilidades de programación?</span>
            </div>

        <button className='bton-skill'>
            <span className='bton-span'>Full stack</span>
            </button>
    </div>
  )
}

export default Skills