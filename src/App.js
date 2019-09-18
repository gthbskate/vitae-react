import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Principal from './components/principal/Principal';
import Contact from './components/contact/Contact';
import Courses from './components/courses/Courses';
import Development from './components/development/Development';
import Experience from './components/experience/Experience';
import School from './components/school/School';
import Skills from './components/skills/Skills';

function App() {
  return (
      <Router>
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo"><i className="material-icons" id="code-icon">apps</i></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li className="text-nav"><Link to="/skills">Habilidades</Link></li>
                            <li className="text-nav"><Link to="/school">Estudios</Link></li>
                            <li className="text-nav"><Link to="/courses">Cursos</Link></li>
                            <li className="text-nav"><Link to="/developments">Desarrollos</Link></li>
                            <li className="text-nav"><Link to="/experience">Experiencia</Link></li>
                            <li className="text-nav"><Link to="/contact">Contacto</Link></li>
                        </ul>
                    </div>
                </nav>

            <ul className="sidenav" id="mobile-demo">
                <li className="text-nav"><Link to="/skills">Habilidades<i className="material-icons">done_all</i></Link></li>
                <li className="text-nav"><Link to="/school">Estudios<i className="material-icons">school</i></Link></li>
                <li className="text-nav"><Link to="/courses">Cursos<i className="material-icons">edit</i></Link></li>
                <li className="text-nav"><Link to="/developments">Desarrollos<i className="material-icons">code</i></Link></li>
                <li className="text-nav"><Link to="/experience">Experiencia<i className="material-icons">important_devices</i></Link></li>
                <li className="text-nav"><Link to="/contact">Contacto<i className="material-icons">mail</i></Link></li>
            </ul>

            <div class="row row-container-button-float">
                <div class="col12 s12 m12 l12 xl12">
                    <ul class="collapsible collapsible-button-float">
                        <li>
                            <div class="collapsible-header collapsible-header-button-float">
                                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="collapsible-body collapsible-body-button-float">
                                
                                <div class="row row-container-text-contact">
                                    <div class="col s12 m12 l12 xl12 col-container-text-contact button-float-contact">
                                        <a class="item-contact" href="https://wa.me/5215518745874" target="_blank"><i class="material-icons">phone</i></a>
                                        <a class="item-contact" href="mailto:skate.boarding@live.com.mx"><i class="material-icons">email</i></a>
                                        <h6 class="text-contact-h6">Nombre / <span class="text-contact-span">Name :</span></h6>
                                        <p class="text-contact-p" >Cesar</p>
                                        <h6 class="text-contact-h6">Apellido / <span class="text-contact-span">Last Name :</span></h6>
                                        <p class="text-contact-p" >González Caballero</p>
                                        <h6 class="text-contact-h6">Telefóno / <span class="text-contact-span">Phone :</span></h6>
                                        <a  href="https://wa.me/5215518745874" target="_blank"><p class="text-contact-p">5518745874</p></a>
                                        <h6 class="text-contact-h6">Correo / <span class="text-contact-span">Mail :</span></h6>
                                        <a  href="mailto:skate.boarding@live.com.mx"><p class="text-contact-p">skate.boarding@live.com.mx</p></a>
                                    </div>
                                </div>
                        
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </header>
          <Route path="/" exact component={Principal} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/courses" excat component={Courses} />
          <Route path="/developments" exact component={Development} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/school" exact component={School} />
      </Router>
      
  );

  
}

export default App;
