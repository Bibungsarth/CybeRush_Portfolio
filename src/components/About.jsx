/**
 * @copyright 2024 cybeRush
 * @license Apache-2.0
 */


// const aboutItems = [
//     {
//       label: 'Project done',
//       number:
//     },
//     {
//       label: 'Years of experience',
//       number:
//     }
//   ];


const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    About ME!
                </h2>
                <div className="bg-gray-800 p-7 rounded-2xl md:p-12 transform transition-all duration-300 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch">
                        Welcome! I&apos;m Bibungsarth Islary, an ethical hacker, penetration tester, and full-stack developer background in Computer Science. I am currently pursuing an MSc in Cyber Security. I also have expertise in vulnerability assessment and penetration testing (VAPT), malware analysis, and the MERN stack web platform. I am ready to make valuable contributions in a client-facing role, enhancing security operations and driving proactive threat mitigation strategies.
                    </p>
                    {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="/images/logo.webp" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"/>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default About;