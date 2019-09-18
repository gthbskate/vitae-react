import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="row">
                    <div className="col s12 m12 l12 xl12 col-container-footer">
                        <h6 className="text-footer-h6"><i className="material-icons">computer</i> Desarrollado por / <span className="text-footer-span">Powered by :</span></h6>
                        <p className="text-footer-p"> Cesar González Caballero</p>
                        <a className="text-footer-a" href="./contact.html"><i className="material-icons">phone</i> Contacto / <span className="text-footer-span">Contact</span></a>
                    </div>
                </div>
            </section>
        )
    }
}
