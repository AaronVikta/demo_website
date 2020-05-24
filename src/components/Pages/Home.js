import React,{Component} from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'

// Reusable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Team from '../Common/Team'
import Timeline from '../Common/Timeline'

class Home extends Component{
  render(){
    return (
      <div>
        <Header
        title="Welcome to Viktasoft "
        subtitle="IT'S NICE TO MEET YOU"
        buttonText="Tell me More"
        link="/services"
        showButton={true}
        image={image}
        />
        <Services/>
        <Portfolio/>
        <Timeline/>
        <Team/>
      </div>
    )
  }
}

export default Home
