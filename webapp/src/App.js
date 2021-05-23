import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer';
import RounterURL from './rounter/RounterURL';
import Schedule from './components/Schedule';
import Technical from './components/Technical';
import About from './components/About';
import Member from './components/Member';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Result from './components/Result';

const sections = [
  {id:1, component: Home , title: 'Home', url: '/'},
  {id:2, component: Schedule, title: 'Schedule', url: '/schedule'},
  {id:3, component: Result, title: 'Result', url: '/result'},
  {id:4, component: Technical, title: 'Technical', url: '/technical'},
  {id:5, component: About, title: 'About', url: '/about'},
  {id:6, component: Member, title: 'Member', url: '/member'},
  {id:7, component: Project, title: 'Project', url: 'https://projectteam4.tk/', target: "_blank"},
  {id:8, component: Contact, title: 'Contact', url: '/contact'},
]
function App() {
  return (
    <div>
      <Menu sections={sections}  /> <hr></hr>
      <RounterURL sections = {sections} />
      <Footer />
    </div>
  );
}

export default App;
