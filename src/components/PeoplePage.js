import React from 'react';
import './PeoplePage.css';

const faculty = [
    {
      id: 1,
      name: 'Heng Yang',
      title: 'Assistant Professor',
      imageUrl: process.env.PUBLIC_URL + 'hank.jpg',
      bioLink: 'https://hankyang.seas.harvard.edu/',
      // Other links or additional information can be added here
    },
  ];

const people = [
    {
      id: 1,
      name: 'Zhiyu Zhang',
      title: 'Postdoc',
      category: 'research-staff-and-postdocs', 
      imageUrl: process.env.PUBLIC_URL + 'Zhiyu.jpg',
      bioLink: 'https://zhiyuzz.github.io/',
      // Other links or additional information can be added here
    },
    {
      id: 2,
      name: 'Shucheng Kang',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'Shucheng.jpg',
      title: "Electrical Engineering",
      bioLink: 'https://shuchengkang.github.io/',
    },
    {
      id: 3,
      name: 'David Bombara',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'david_bombara.jpg',
      bioLink: 'https://dbombara.github.io/welcome',
      title: "Electrical Engineering"
    },
    {
      id: 4,
      name: 'Han Qi',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'Han.png',
      bioLink: 'https://han20192019.github.io/',
      title: "Computer Science"
    },
    {
      id: 5,
      name: 'Alex Tong',
      title: 'Visiting undergrad from UC Berkeley',
      category: 'Masters and Undergrads',
      imageUrl: process.env.PUBLIC_URL + 'alex.png'
    },
    {
      id: 6,
      name: 'Jay Sarva',
      title: 'Visiting undergrad from Brown University',
      category: 'Masters and Undergrads',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg'
    },
    {
      id: 8,
      name: 'Shashwat Rai',
      title: 'Harvard College',
      category: 'Masters and Undergrads',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
    },
    {
      id: 9,
      name: 'William Zhang',
      category: 'High School',
      title: 'Weston High School',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
    },
    {
      id: 10,
      name: 'Tim Nguyen',
      category: 'Masters and Undergrads',
      title: 'Visiting undergrad from Boston University',
      bioLink: 'https://thisistim.dev',
      imageUrl: process.env.PUBLIC_URL + 'tim.jpg',
    },
    {
      id: 11,
      name: 'Tucker',
      title: 'Franka Emika Panda Arm',
      category: 'Robot',
      imageUrl: process.env.PUBLIC_URL + 'franka.png',
    },
    {
      id: 12,
      name: 'Jiarui Li',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      bioLink: 'https://jiaruili.com/',
      future: 'Undergrad from Peking University, Next: PhD student at MIT'
    },
    {
      id: 13,
      name: 'Xiaoyang Xu',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from University of Science and Technology China, Next: PhD student at UC Santa Barbara'
    },
    {
      id: 14,
      name: 'Xihang Yu',
      category: 'Alumni',
      bioLink: 'https://xihangyu630.github.io/',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from University of Michigan, Next: PhD student at MIT'
    },
    {
      id: 15,
      name: 'Yukai Tang',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from Tsinghua University, Next: PhD student at Princeton'
    },
    {
      id: 16,
      name: 'Haoyu Han',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from University of Science and Technology China, Next: PhD Student at Harvard'
    },
    {
        id: 7,
        name: 'Haoyu Han',
        category: 'PhD',
        imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
        title: 'Applied Mathematics',
      },
    {
        id: 17,
        name: 'Aneesh Muppidi',
        title: 'Harvard College',
        category: 'Masters and Undergrads',
        imageUrl: process.env.PUBLIC_URL + 'aneesh.jpg',
    },
    {
        id: 18,
        name: 'Hugo Buurmeijer',
        category: 'Alumni',
        future: 'Master student from Stanford University, Next: PhD student at Stanford'
    },
    {
    id: 19,
    name: 'Haocheng Yin',
    category: 'Masters and Undergrads',
    title: 'Master student from ETH Zurich',
    imageUrl: process.env.PUBLIC_URL + 'haocheng_yin.jpg'
    },
    {
    id: 20,
    name: 'Kevin Kasa',
    category: 'Alumni',
    imageUrl: process.env.PUBLIC_URL + 'kevin_kasa.png',
    future: 'Master student from University of Guelph'
    },
    {
        id: 21,
        name: 'Harvey',
        title: 'Unitree Go2',
        category: 'Robot',
        imageUrl: process.env.PUBLIC_URL + 'Go2.png',
    },
    {
        id: 22,
        name: 'Qin',
        title: 'Deep Robotics Lite2 (Gift from Zengyi Qin)',
        category: 'Robot',
        imageUrl: process.env.PUBLIC_URL + 'Lite2.jpg',
    },
    

  ];
  
const PeoplePage = () => {
    const postdocs = people.filter(person => person.category === 'research-staff-and-postdocs');
    const phdStudents = people.filter(person => person.category === 'PhD');
    const mastersAndUndergrads = people.filter(person => person.category === 'Masters and Undergrads');
    const highSchool = people.filter(person => person.category === 'High School');
    const robot = people.filter(person => person.category === 'Robot');
    const alumni = people.filter(person => person.category === 'Alumni');

    return (
        <div className="people-page">
            <div className="people-container">
                <div className="sidebar">
                    <a href="#faculty">Faculty</a>
                    <a href="#research-staff-and-postdocs">Research Staff and Postdocs</a>
                    <a href="#phd">PhD Students</a>
                    <a href="#masters-and-undergraduates">Masters and Undergraduates</a>
                    <a href="#high-school">High School Students </a>
                    <a href="#robots">Robots</a>
                    <a href="#alumni">Alumni</a>
                    {/* ... more links */}
                </div>
                <div className="main-content">
                    <section id="faculty">
                        <h2>Faculty</h2>
                        <div className="faculty-list">
                            {faculty.map(person => (
                                <div className="faculty-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="faculty-info">
                                        <a href={person.bioLink} className="faculty-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="research-staff-and-postdocs">
                        <h2>Research Staff and Postdocs</h2>
                        <div className="people-list">
                            {postdocs.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="phd">
                        <h2>PhD Students</h2>
                        <div className="people-list">
                            {phdStudents.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="masters-and-undergraduates">
                        <h2>Masters and Undergraduates</h2>
                        <div className="people-list">
                            {mastersAndUndergrads.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="high-school">
                        <h2>High School Students</h2>
                        <div className="people-list">
                            {highSchool.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="robots">
                        <h2>Robots</h2>
                        <div className="people-list">
                            {robot.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="alumni">
                        <h2>Alumni</h2>
                        <div className="alumni-list">
                            {alumni.map(person => (
                                <div key={person.id}>
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                        <p>{person.name}{person.future && ` (${person.future})`}</p>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* ... more sections */}
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;

