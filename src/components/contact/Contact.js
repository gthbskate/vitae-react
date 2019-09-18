import React, { Component } from 'react';

import Footer from '../footer/Footer';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row">
                    <div className="col s12 m12 l12 xl12">
                        <h1 className="text-contact-principal">
                            Contacto / <span className="text-contact-principal-span">Contact</span> 
                        </h1>
                    </div>
                </div>
                <div className="row row-container-text-contact">
                    <div className="col s12 m12 l12 xl12 col-container-text-contact">
                        <a className="item-contact" href="https://wa.me/5215518745874" target="_blank"><i className="material-icons">phone</i></a>
                        <a className="item-contact" href="mailto:skate.boarding@live.com.mx"><i className="material-icons">email</i></a>
                        <h6 className="text-contact-h6">Nombre / <span className="text-contact-span">Name :</span></h6>
                        <p className="text-contact-p" >Cesar</p>
                        <h6 className="text-contact-h6">Apellido / <span className="text-contact-span">Last Name :</span></h6>
                        <p className="text-contact-p" >González Caballero</p>
                        <h6 className="text-contact-h6">Telefóno / <span className="text-contact-span">Phone :</span></h6>
                        <a  href="https://wa.me/5215518745874" target="_blank"><p className="text-contact-p">5518745874</p></a>
                        <h6 className="text-contact-h6">Correo / <span className="text-contact-span">Mail :</span></h6>
                        <a  href="mailto:skate.boarding@live.com.mx"><p className="text-contact-p">skate.boarding@live.com.mx</p></a>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
