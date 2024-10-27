import React from "react";

function AboutMe () {
    return(
        <section className="bg-dark border-top border-start border-info py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img 
                            src="src\assets\images\myDumbFace_enhanced.png"
                            alt="Image of Kyle Anderson"
                            className="img-fluid rounded-circle border border-3 border-info shadow-sm"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="p-4 bg-white rounded shadow-sm">
                            <p className="text-dark mb-0">
                            Welcome! I’m a dedicated developer with a strong foundation in full-stack development, enriched by my background in manufacturing, where I specialized in efficiency and process improvement. Now, my focus is on building efficient, user-centric applications using modern tech like React, Node.js, and TypeScript. I’m always up for a challenge, whether it’s optimizing code, enhancing UX, or diving into a new technology to deliver top results. Let’s create something impactful together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;