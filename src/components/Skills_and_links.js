import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import MyPicture from '../assets/IMG20191206203141-01.jpeg'

export default function Skills_and_links({ theme }) {

    const DownloadButton = () => {
        const downloadFile = () => {
            window.location.href = "https://docs.google.com/document/d/11wG6T3T0CE6_Ws3Xls59dzHb_gxA7yBb8WxP1GhfZkk/edit?usp=sharing"
        }
        return (
            <Button
                onClick={downloadFile}
                inverted color='red'>Download Resume
            </Button>
        )
    }

    return (
        <div className={theme === 'light' ? "skills-card-main" : "skills-card-main-dark"}>
            <div className={theme === 'light' ? "skills-section" : "skills-section-dark"}>
                <p className="more-about-me">More about me</p>
                <p className={theme === 'light' ? "skill-text" : "skill-text-dark"}>I build projects to learn how code works.</p>
                <p className={theme === 'light' ? "skill-text" : "skill-text-dark"}>And while I am not coding, I enjoy writing poetry and stories, and cooking delicious meals.</p>
                <Divider />

                <p className="expertise">TOP EXPERTISE</p>
                <p className="expertise-body">Full Stack developer with primary focus on Software Development, Progressive Web Applications, Web Applications and API's.</p>
                <DownloadButton />

                <div className={theme === 'light' ? "skills-container" : "skills-container-dark"}>
                    <ul className="skill-list">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                    </ul>
                    <ul className="skill-list">
                        <li>React</li>
                        <li>Angular</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
            <div className="links-section">
                <img src={MyPicture} className="my-picture" />

                <div className="button-links">
                    <a href="https://www.linkedin.com/in/nishant-kumar-0a8a9782/" target="_blank">
                        <Button fluid color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    </a>
                    <a href="https://github.com/nishant-666" target="_blank">
                        <Button fluid className="github-button">
                            <Icon name='github' /> Github
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
