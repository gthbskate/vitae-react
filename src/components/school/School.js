import React, { Component } from 'react';
import Footer from '../footer/Footer';
import profile from './photo-perfil.png';
import './School.css';

export default class School extends Component {
    render() {
        return (
            <section id="school">
                <div className="row">
                    <div className="col s12 m12 l12 xl12">
                        <h1 className="text-school-principal">
                            Estudios / <span className="text-school-principal-span">Studies</span> 
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4 xl4">
                        <div className="card card-container-info">
                            <div className="card-image">
                                <img src={ profile }/>
                            </div>
                            <div className="card-content">
                                <p className="text-one">Nombre / <span className="text-one-span">Name :</span></p>
                                <p className="text-two">Cesar González Caballero</p>
                                <p className="text-one">Edad / <span className="text-one-span">Age :</span></p>
                                <p className="text-two">32 años / <span className="text-two-span">Years old</span></p>
                                <p className="text-one">Ubicación / <span className="text-one-span">Location :</span></p>
                                <p className="text-two">CDMX, México.</p>
                            </div>
                            <div className="card-action">
                                <p className="text-one">Desarroldor web front-end / <span className="text-one-span">Developor web front-end</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7 l7 xl7 col-container-panel">
                        <div className="card-panel card-panel-school">
                            <div className="card-content-2">
                                <p className="text-one">Nombre / <span className="text-one-span">Name :</span></p>
                                <p className="text-two">Cesar González Caballero</p>
                                <p className="text-one">Edad / <span className="text-one-span">Age :</span></p>
                                <p className="text-two">32 años / <span className="text-two-span">Years old</span></p>
                                <p className="text-one">Ubicación / <span className="text-one-span">Location :</span></p>
                                <p className="text-two">CDMX, México.</p>
                            </div>
                            <h5 className="black-text"><i className="material-icons ico-devices">devices</i> Lic. Ingenieria en sistemas Computacionales </h5>
                            <div className="progress">
                                <div className="determinate d-school"></div>
                            </div>
                            <h5 className="black-text"><i className="material-icons ico-devices">storage</i> Analista de Programación, Redes y Bases de Datos </h5>
                            <div className="progress">
                                <div className="determinate d-analist"></div>
                            </div>
                            <h5 className="black-text"><i className="material-icons ico-devices">group</i> Lic. Psicología </h5>
                            <div className="progress">
                                <div className="determinate d-psicologi"></div>
                            </div>
                            <h5 className="black-text"><i className="material-icons ico-devices">create</i> Tec. Dibujo Publicitaro </h5>
                            <div className="progress">
                                <div className="determinate d-draw"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
