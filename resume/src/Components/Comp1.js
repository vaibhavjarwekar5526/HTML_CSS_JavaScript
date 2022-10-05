import React from 'react'
import Styles from './Comp1.module.css'

const Comp1 = () => {
    return (
        <section className={Styles.comp1}>
            <div>
                <h1>CARLY KAYES</h1>
                <p>CHIEF EXLUSIVE OFFICE</p>
            </div>
            <div>
                <h2>PROFESSIONAL PROFILE</h2>
                <p>I am a growth hacker with 4+ years of experience in sales and marketing in
                    the US market. Creative, sharp-minded person with leadership & coaching
                    skills. Strong time-management skills and work ethic. Revenue- and resultsdriven.
                </p>
            </div>
            <div>
                <h2>WORK EXPERIENCE</h2>
                <div>
                    <h4>CEO & President</h4>
                    <h4>April 2030 - June 2033</h4>
                    <p>Effectively managed team of over 270 employees in 12 locations in 3 countries.
                        Oversaw executive leadership, company training, and public relations with
                        media. Developed intensive, ambitious business strategies, short-term goals,
                        and long-term objectives. Spearheaded overhaul of various underperforming
                        departments to reduce stagnation and increase growth and productivity.
                        Fostered change in company culture to be more open, transparent, and
                        accountable.
                    </p>
                </div>
                <div>
                    <h4>Head Manager</h4>
                    <h4>January 2034 - April 2035</h4>
                    <p>Led team of 50 employees in a busy retail research and analysis firm. Oversaw
                        the day-to-day operations, including meeting with team leaders and auditing
                        activity. Implemented the push towards Artificial Intelligence and Machine
                        Learning to aid in exponentially larger analysis tasks able to be completed.
                        Ensured company was meeting all legal requirements and local regulations.
                        Pushed for constant growth among management team and general staff, alike.
                    </p>
                </div>
            </div>
            <div className={Styles.lastDiv}>
                <h2>EDUCATION</h2>
                <div>
                    <h4>Really Great University 2028 - 2029</h4>
                    <p>MBA / Master of Business Administration (International Management)</p>
                </div>
            </div>
        </section>
    )
}

export default Comp1
