import React from 'react'
import website from '../website.png'
import telephone from '../telephone.png'
import email from '../email.png'
import home from '../home.png'
import picture from '../picture.png'
import Styles from './Comp2.module.css'

const Comp2 = () => {
    return (
        <section className={Styles.comp2}>
            <div className={Styles.bigImg}>
                <img src={picture} alt="picture"/>
            </div>
            <div>
                <h3>CONTACT</h3>
                <div className={Styles.image}>
                    <div><span><img src={telephone} alt="Phone Number"/></span><label>+123-456-7890</label></div>
                    <div><span><img src={email} alt="Phone Number"/></span><label>hello@reallygreatsite.com</label></div>
                    <div><span><img src={website} alt="Phone Number"/></span><label>www.reallygreatsite.com</label></div>
                    <div><span><img src={home} alt="Phone Number"/></span><label>123 Anywhare ST., Any City</label></div>
                </div>
            </div>
            <div>
                <h3>SKILLS</h3>
                <ul>
                    <li>Team Work</li>
                    <li>Time Management</li>
                    <li>Leadership</li>
                    <li>Verbal & Written Communication</li>
                </ul>
            </div>
            <div>
                <h3>LANGUAGE</h3>
                <ul>
                    <li>English</li>
                    <li>French</li>
                    <li>China</li>
                    <li>Spanish</li>
                    <li>Hindi</li>
                </ul>
            </div>
        </section>
    )
}

export default Comp2
