/**
 * @copyright 2024 cybeRush
 * @license Apache-2.0
 */


import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: '/CybeRush_Portfolio/images/burpsuite.svg',
    label: 'Burp Suite',
    desc: 'Vulnerability Scanner'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/OWASP.png',
    label: 'OWASP',
    desc: 'Open Web Security'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/nmap.svg',
    label: 'Nmap',
    desc: 'Network Scanner'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/wireshark.svg',
    label: 'Wireshark',
    desc: 'Packet Analyzer'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/html.svg',
    label: 'HTML',
    desc: 'Content Structure"'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/CybeRush_Portfolio/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  }
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container ">

        <h2 className="headline-2 mb-8 reveal-up">
          Technical Skills
        </h2>

        {/* <p className="text-zinc-400 transform transition-all duration-300 mt-3 mb-8 max-w-[50ch]">
        Discover the powerful tools and technologies I use to create and test exceptional, high-performing websites & applications.
        </p> */}

        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) =>
            (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="bg-gray-800 reveal-up" />
            ))
          }
        </div>

      </div>
    </section>)
}

export default Skill;