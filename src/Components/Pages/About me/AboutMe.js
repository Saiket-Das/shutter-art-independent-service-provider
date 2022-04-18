import React from 'react';
import './AboutMe.css'
import myself from '../../../images/about/me-bg.png'

const AboutMe = () => {
    return (
        <div>

            <div className='about-me-container'>

                <div className='myself-description' >
                    <h2 className='about-title'>About </h2>
                    <p className='mb-5'>Hi. This is Saiket Das. I am an International student in Malaysia. I am doing Diploma in Information Technology.As a passion, I love to play football, capturing photos, Travel and hiking to the mountains.</p>

                    <h3 className='my-goals'>My Goals</h3>
                    <p> I wanna experience the job life and gain more knowledge about Web development for a certain period(One or Half an year) after complete my graduation. Later than , I would like to switch my programming or coding development Web to App. For the App development I Choose to learn the React Native.</p>
                </div>

                <div>
                    <img className='myself-img' src={myself} alt="" />
                </div>
            </div>

        </div >
    );
};

export default AboutMe;