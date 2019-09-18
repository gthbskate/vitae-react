import React, { Component } from 'react';
import Footer from '../footer/Footer';
import principal from './principal.png';
import angular from './angular-logo.png';
import bootstrap from './bootstrap-logo.png';
import css from './css3_logo.png';
import git from './git-logo.png';
import github from './github-logo.png';
import html from './html5-logo.png';
import jquery from './jquery-logo.png';
import js from './js-logo.png';
import materialize from './materialize-logo.png';
import react from './react-logo.png';
import sass from './sass-logo.png';
import scrum from './scrum-logo.png';
import uiux from './uiux-logo.png';
import vue from './vue-logo.png';
import wordpress from './wordpress-logo.png';

import './Principal.css';

export default class Principal extends Component {
    render() {
        return (
            <section id="principal">
                <div className="row">
                    <div className="col l6 xl6" id="col-img-principal">
                        <img id="img-principal" src={principal} alt=""></img>
                    </div>
                    <div className="col s12 m12 l6 xl6">
                        <div className="row">
                            <div className="col s12 m12 l12 xl12">
                                <h1 className="text-dev-es">Desarrollador Web Front End /<span className="text-dev-enu">Developer Web Front End</span></h1>
                            </div>

                            <div className="row" id="slider">
                                <div className="col s3 m3 l3 xl3 slider">
                                    <ul className="slides">
                                        <li>
                                            <img className="img-slide" src={ html }></img>
                                            <h2 className="text-slide">HTML5</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ git }></img>
                                            <h2 className="text-slide">GIT</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ sass }></img>
                                            <h2 className="text-slide">SASS</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ jquery }></img>
                                            <h2 className="text-slide">JQUERY</h2>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col s3 m3 l3 xl3 slider">
                                    <ul className="slides">
                                        <li>
                                            <img className="img-slide" src={ css }></img>
                                            <h2 className="text-slide">CSS3</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ github }></img>
                                            <h2 className="text-slide">GITHUB</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ angular }></img>
                                            <h2 className="text-slide">ANGULAR</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ uiux }></img>
                                            <h2 className="text-slide">UX / UI</h2>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col s3 m3 l3 xl3 slider">
                                    <ul className="slides">
                                        <li>
                                            <img className="img-slide" src={ js }></img>
                                            <h2 className="text-slide">JAVASCRIPT</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ materialize }></img>
                                            <h2 className="text-slide">MATERIALIZE</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ react }></img>
                                            <h2 className="text-slide">REACT</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ scrum }></img>
                                            <h2 className="text-slide">SCRUM</h2>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col s3 m3 l3 xl3 slider">
                                    <ul className="slides">
                                        <li>
                                            <img className="img-slide" src={ bootstrap }></img>
                                            <h2 className="text-slide">BOOTSTRAP</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ wordpress }></img>
                                            <h2 className="text-slide">WORPRESS</h2>
                                        </li>
                                        <li>
                                            <img className="img-slide" src={ vue }></img>
                                            <h2 className="text-slide">VUE</h2>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
