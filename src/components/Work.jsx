/** 
 * @copyright 2024 cybeRush
 * @license Apache-2.0
 */

// Components
import { useState } from "react";
import ProjectCard from "./ProjectCard";

// Define categories for works
const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Attendance Manager',
    tags: ['Web-App', 'MVC', 'MySQL'],
    projectLink: 'https://github.com/Bibungsarth/Attendance_Management_System',
    category: 'WebDev'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Headless Detector',
    tags: ['Headless Detection', 'JavaScript'],
    projectLink: 'https://github.com/Bibungsarth/headless_dectector',
    category: 'CyberSec'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'AI Based Digit-Classifier',
    tags: ['AI', 'CNN', 'TensorFlow'],
    projectLink: 'https://github.com/Bibungsarth/Digit-Classification-Using-CNN-on-MNIST-with-TensorFlow',
    category: 'CyberSec'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'React Portfolio',
    tags: ['Web-Design', 'Development'],
    projectLink: 'https://github.com/Bibungsarth/React_Portfolio',
    category: 'WebDev'
  }
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWorks = works.filter(work => selectedCategory === 'All' || work.category === selectedCategory);

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My Works
        </h2>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'All' ? 'bg-sky-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('WebDev')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'WebDev' ? 'bg-sky-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            WebDev
          </button>
          <button
            onClick={() => setSelectedCategory('CyberSec')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'CyberSec' ? 'bg-sky-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            CyberSec
          </button>
        </div>

        <div className="grid transform transition-all duration-300 gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
