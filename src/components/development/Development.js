import React, { Component } from 'react';
import Footer from '../footer/Footer';
import abbla from './abbla-logo.png';
import brain from './brainbow-logo.png';
import help from './help-desk-icon-png-4.png';
import o2a from './o2a-logo.png';
import vitae from './vitae_icon.png';
import './Development.css';

export default class Development extends Component {
    render() {
        return (
            <section id="developments">
                <div className="row">
                    <div className="col s12 m12 l12 xl12">
                        <h1 className="text-developments-principal">
                            Desarrollos / <span className="text-developments-principal-span">Developments</span> 
                        </h1>
                    </div>
                </div>
                <div className="row row-developments">   
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ help }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Bootstrap, Git, GitHub</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Help Desk Ticket</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ abbla }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Bootstrap, Git, GitHub, JavaScript</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Abbla Abbla</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ brain }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Bootstrap, Git, GitHub, JavaScript, Jquery</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Brainbow</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ o2a }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">Worpress</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="#">N/A</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="http://www.oxigenoarquitectura.com/">http://www.oxigenoarquitectura.com/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Oxigeno Arquitectura</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ vitae }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Materialize, Git, GitHub, JavaScript, Jquery, Vue</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Vitae Vue</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ vitae }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Materialize, Git, GitHub, JavaScript, Jquery, React</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Vitae React</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ vitae }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Materialize, Git, GitHub, JavaScript, Jquery, Angular</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Vitae Angular</p>
                            </div>  
                        </div>
                    </div>
                    <div className="col s12 m6 l4 xl4">
                        <div className="card card-container-developments">
                            <div className="card-image card-image-developments">
                                <img className="img-developments" src={ vitae }/>
                            </div>
                            <div className="card-content">
                                <p className="text-developments-title">Tecnologías :</p>
                                <p className="text-developments-description">HTML5, CSS3, SASS, Materialize, Git, GitHub, JavaScript, Jquery</p>
                                <p className="text-developments-title">Código :</p>
                                <a className="text-developments-description" href="https://github.com/gthbskate/HelpDeskTiket-Demo">https://github.com/gthbskate/HelpDeskTiket-Demo</a>
                                <p className="text-developments-title">Publicación :</p>
                                <a className="text-developments-description" href="https://gthbskate.github.io/HelpDeskTiket-Demo/">https://gthbskate.github.io/HelpDeskTiket-Demo/</a>                      
                            </div>
                            <div className="card-action">
                                <p className="text-dvelopments-name">Vitae</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
