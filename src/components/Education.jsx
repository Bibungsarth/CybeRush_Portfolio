/**
 * @copyright 2024 cybeRush
 * @license Apache-2.0
 */

const Education = () => {
    return (
        <section id="education" className="section py-16">
            <div className="container">
                <h2 className="headline-2 transform transition-all duration-300 mb-12 text-center text-gray-200 font-bold text-4xl">
                    Education
                </h2>
                <div className="space-y-12">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg duration-300 hover:scale-105 reveal-up">
                        <h3 className="text-3xl font-extrabold text-gray-200 mb-4">
                            <strong className="text-gray-400">Digital University Kerala</strong> (formerly IIITMK)
                        </h3>
                        <p className="text-lg text-gray-300 mb-4 font-medium">
                            MSc in Computer Science, Specialization in Cyber Security
                            <br />
                            <span className="text-gray-200">Trivandrum, Kerala, India</span>
                        </p>
                        <p className="text-lg text-gray-500 text-right font-light">
                            Sept 2023 – Present
                        </p>
                    </div>

                    {/* BSc Box */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 reveal-up">
                        <h3 className="text-3xl font-extrabold text-gray-200 mb-4">
                            <strong className="text-gray-400">Lalit Chandra Bharali College</strong>
                        </h3>
                        <p className="text-lg text-gray-300 mb-4 font-medium">
                            BSc in Computer Science
                            <br />
                            <span className="text-gray-200">Guwahati, Assam, India</span>
                        </p>
                        <p className="text-lg text-gray-500 text-right font-light">
                            Aug 2020 – Jul 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
