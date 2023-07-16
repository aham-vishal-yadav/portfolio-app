import React from "react";
import banner from "./images/6273534.gif";

const Section = () => {
    return (
        <div className=" lg:flex md:pt-7 flex-row max-w-full ml-8  items-center p-2 sm:p-10 ">
            <div className=" md:w-4/5 m-auto lg:mr-12  bg-pink-600 box-shadow:1px solid rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;">
                <img
                    id="bannerImg"
                    src={banner}
                    className="   relative -top-3 -left-4 border-t-4 border-l-2 rounded"
                />
            </div>

            <div className="   max-w-2xl m-auto  relative   lg:pb-10  text-gray-400">
                <div
                    id="text"
                    className=" costomFont2  m-4 pt-10  sm:p-20 lg:p-28 text-xl backdrop-blur"
                >
                    Hi,
                    <br />I am a passionate developer with a strong drive for continuous learning.
                    My expertise lies in web development, and I actively contribute to open source projects
                    . Currently, I am focused on mastering advanced concepts in React to expand my skill set.
                    I am dedicated to staying up-to-date with industry trends and delivering high-quality solutions.
                    Excited to take on new challenges and make a positive impact in the development community.
                </div>
            </div>



            {/* https://wallpaperaccess.com/pixel-art-gif */}
        </div>
    );
};

export default Section;
