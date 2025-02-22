import './Hero.css'
import Pro_IMG from '/Pro_IMG.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero(){
    return(
        <div id='home' className="hero">
            <img src={Pro_IMG} alt="" />
            <h1><span>Hello, I'm Rohan Gupta</span> - Front-End Developer.</h1>
            <p>A Front-End Developer Who Loves Building Beautiful Web Experiences.
             I’m all about crafting fast, responsive websites that look and feel amazing on any device. </p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}