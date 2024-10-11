import React from 'react';
import './ResearchHighlights.css';
const researchImage = process.env.PUBLIC_URL + 'svl_robot.jpg';

const ResearchHighlights = () => {
    return (
        <div className="research-highlights">
            <div className="research-tab-container">
                <div className="image-container">
                    <img src={researchImage} alt="Research Topic"/>
                </div>
                <div className="research-content">
                    <div className="researchtitle"> Current Interests</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="link-to-more-info" className="research-link">Link</a>
                </div>
            </div>
        </div>
    );
};

/* const ResearchArea = () => {
    return (
        <div className="research-area">
            <img src={researchImage} alt="Research Topic" className="research-image" />
            <div className="research-content">
                <div className="researchtitle"> People, AI & Robots Group (PAIR)</div>
                <p>The People, AI & Robots Group (PAIR) is a research group under the Stanford Vision & Learning Lab that focuses on developing methods and mechanisms for generalizable robot perception and control. We work on challenging open problems at the intersection of computer vision, machine learning, and robotics. We develop algorithms and systems that unify in reinforcement learning, control theoretic modeling, and 2D/3D visual scene understanding to teach robots to perceive and to interact with the physical world.</p>
                <a href="link-to-more-info" className="research-link">Link</a>
            </div>
        </div>
    );
}; */

export default ResearchHighlights;
