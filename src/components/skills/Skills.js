import React, { Component } from 'react';
import Footer from '../footer/Footer';
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
import './Skills.css';

export default class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <div class="row">
                    <div class="col s12 m12 l12 xl12">
                        <h1 class="text-skill-principal">
                            Habilidades / <span class="text-skill-principal-span">Skills</span> 
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">HTML5</span>
                                <img class="img-card" src={ html } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d50"></div>
                                </div>
                            </div>
                        </div>           
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">CSS3</span>
                                <img class="img-card" src={ css } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">SASS</span>
                                <img class="img-card" src={ sass} alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">BOOSTRAP</span>
                                <img class="img-card" src={ bootstrap } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">WORDPRESS</span>
                                <img class="img-card" src={ wordpress } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">JAVASCRIPT</span>
                                <img class="img-card" src={ js } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">JQUERY</span>
                                <img class="img-card" src={ jquery } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">MATERIALIZE</span>
                                <img class="img-card" src={ materialize } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">REACT</span>
                                <img class="img-card" src={ react } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">VUE</span>
                                <img class="img-card" src={ vue } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">ANGULAR</span>
                                <img class="img-card" src={ angular } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">GIT</span>
                                <img class="img-card" src={ git } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>           
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">GITHUB</span>
                                <img class="img-card" src={ github } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">UI / UX</span>
                                <img class="img-card" src={ uiux } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
                                </div>
                            </div>
                        </div>           
                    </div>
                    <div class="col s12 m4 l3 xl2 col-cards">
                        <div class="card card-container-cards">
                            <div class="card-content white-text">
                                <span class="card-title">SCRUM</span>
                                <img class="img-card" src={ scrum } alt=""/>
                            </div>
                            <div class="card-action">
                                <div class="progress">
                                    <div class="determinate d25"></div>
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
