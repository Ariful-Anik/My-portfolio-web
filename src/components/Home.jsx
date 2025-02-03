import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import FeaturedProjects from './FeaturedProjects';
import Publications from './Publications';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="divider"></div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Publications></Publications>
            </div>
            <div>
                <FeaturedProjects></FeaturedProjects>
            </div>
        </div>
    );
};

export default Home;