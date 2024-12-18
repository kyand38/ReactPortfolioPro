
import React from 'react';

const Resume = () => {
    return (
        <div className="container my-5 text-center">
            <h2 className="text-info mb-4">My Resume</h2>
            <div className="bg-dark p-4 rounded">
                {/* Display the PDF in an iframe */}
                <iframe
                    src="/assets/resume.pdf"
                    title="Resume"
                    width="100%"
                    height="600px"
                    className='rounded'
                ></iframe>

                {/* Download Button */}
                <div className="mt-3">
                    <a
                        href="/assets/resume.pdf"
                        className="btn btn-info"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
