import React from "react";

function AboutMe () {
    return(
        <section className="bg-dark border-top border-start border-info py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img 
                            src=""
                            alt="Image of Kyle Anderson"
                            className="img-fluid rounded-circle border border-3 border-primary shadow-sm"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="p-4 bg-white rounded shadow-sm">
                            <p className="text-dark mb-0">
                                I found myself seeking new challenges that pushed me to think more creatively and strategically. That’s when I discovered coding. Recently, I completed a coding boot camp, and I’m excited to transition into this dynamic and fast-paced industry. I’m eager to bring my passion for building and problem-solving into the tech world, where I can continue to learn, grow, and make an impact with code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;