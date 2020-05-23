import React,{Component} from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'

// Reusable components
import Services from '../Common/Services'
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
      </div>
    )
  }
}

export default Home
