import React, { useState } from 'react';
import SearchBar from './PublicationsPage/SearchBar';
import TagFilter from './PublicationsPage/TagFilter';
import PublicationsList from './PublicationsPage/PublicationsList';
import './PublicationsPage.css';

// Dummy data for publications - Change This for Publications
// The tags are hidden, but the buttons for each of them will work

/* 
  { 
    id: 4, 
    title: 'On the Nonsmooth Geometry and Neural Approximation of the Optimal Value Function of Infinite-Horizon Pendulum Swing-up', 
    journal_year: 'arXiv preprint 2023', 
    people: ['Haoyu Han', 'Heng Yang'], 
    tags: ['Control'],
    pdfLink: 'https://www.google.com',
    videoLink: 'https://www.google.com',
    highlightLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    awardLink: 'https://www.google.com',
    newsLink: 'https://www.google.com',
    year: 2024,
    abbrev: 'CVPR',
    award: 'Oral'
  },
*/

const allPublications = [
  { 
    id: 14, 
    title: 'Control-oriented Clustering of Visual Latent Representation',
    journal_year: 'arXiv preprint 2024', 
    people: ['Han Qi', 'Haocheng Yin', 'Heng Yang'], 
    tags: ['Vision-based Control', 'Optimal Control'],
    pdfLink: 'https://arxiv.org/abs/2410.05063',
    year: 2024,
    projectLink: 'https://computationalrobotics.seas.harvard.edu/ControlOriented_NC/'
  },
  { 
    id: 13, 
    title: 'The Benefit of Being Bayesian in Online Conformal Prediction',
    journal_year: 'arXiv preprint 2024', 
    people: ['Zhiyu Zhang', 'Zhou Lu', 'Heng Yang'], 
    tags: ['Online Learning', 'Conformal Prediction', 'Uncertainty Quantification'],
    pdfLink: 'https://arxiv.org/pdf/2410.02561',
    year: 2024
  },
  { 
    id: 12, 
    title: 'Fast and Certifiable Trajectory Optimization',
    journal_year: 'International Workshop on the Algorithmic Foundations of Robotics (WAFR) 2024', 
    people: ['Shucheng Kang', 'Xiaoyang Xu', 'Jay Sarva', 'Ling Liang', 'Heng Yang'], 
    tags: ['Optimal Control', 'Semidefinite Optimization and Relaxation'],
    pdfLink: 'https://arxiv.org/abs/2406.05846',
    year: 2024,
    projectLink: 'https://computationalrobotics.seas.harvard.edu/project-strom/',
    abbrev: 'WAFR'
  },
  { 
    id: 11, 
    title: 'Adapting Conformal Prediction to Distribution Shifts Without Labels',
    journal_year: 'arXiv preprint 2024', 
    people: ['Kevin Kasa', 'Zhiyu Zhang', 'Heng Yang', 'Graham W. Taylor'], 
    tags: ['Lifelong Learning', 'Conformal Prediction', 'Uncertainty Quantification'],
    pdfLink: 'https://arxiv.org/pdf/2406.01416',
    year: 2024,
  },
  { 
    id: 10, 
    title: 'Fast TRAC: A Parameter-Free Optimizer for Lifelong Reinforcement Learning',
    journal_year: 'Conference on Neural Information Processing Systems (NeurIPS) 2024', 
    people: ['Aneesh Muppidi', 'Zhiyu Zhang', 'Heng Yang'], 
    tags: ['Lifelong Learning', 'Online Learning', 'Reinforcement Learning'],
    pdfLink: 'https://arxiv.org/pdf/2405.16642',
    year: 2024,
    codeLink: 'https://github.com/ComputationalRobotics/TRAC',
    projectLink: 'https://computationalrobotics.seas.harvard.edu/TRAC/',
    abbrev: 'NeurIPS'
  },
  { 
    id: 9, 
    title: 'CLOSURE: Fast Quantification of Pose Uncertainty Sets',
    journal_year: 'Robotics: Science and Systems 2024', 
    people: ['Yihuai Gao', 'Yukai Tang', 'Han Qi', 'Heng Yang'], 
    tags: ['Uncertainty Quantification', 'Computer Vision and Perception', 'Set-Membership Estimation', 'Conformal Prediction'],
    pdfLink: 'https://arxiv.org/pdf/2403.09990.pdf',
    year: 2024,
    abbrev: 'RSS'
  },
  { 
    id: 8, 
    title: 'Object Pose Estimation with Statistical Guarantees: Conformal Keypoint Detection and Geometric Uncertainty Propagation',
    journal_year: 'IEEE Conf. on Computer Vision and Pattern Recognition (CVPR) 2023', 
    people: ['Heng Yang', 'Marco Pavone'], 
    tags: ['Uncertainty Quantification', 'Computer Vision and Perception', 'Set-Membership Estimation', 'Conformal Prediction'],
    pdfLink: 'https://arxiv.org/pdf/2303.12246.pdf',
    videoLink: 'https://youtu.be/NWUf4hd571E',
    codeLink: 'https://github.com/ComputationalRobotics/PURSE',
    year: 2023,
    abbrev: 'CVPR',
    award: 'Highlight'
  },
  { 
    id: 7, 
    title: 'Improving Adaptive Online Learning Using Refined Discretization',
    journal_year: 'International Conference on Algorithmic Learning Theory (ALT) 2024', 
    people: ['Zhiyu Zhang', 'Heng Yang', 'Ashok Cutkosky', 'Ioannis Ch Paschalidis'], 
    tags: ['Online Learning'],
    pdfLink: 'https://arxiv.org/pdf/2309.16044.pdf',
    year: 2024,
    abbrev: 'ALT'
  },
  { 
    id: 6, 
    title: 'Discounted Adaptive Online Prediction',
    journal_year: 'International Conference on Machine Learning (ICML) 2024', 
    people: ['Zhiyu Zhang', 'David Bombara', 'Heng Yang'], 
    tags: ['Online Learning', 'Uncertainty Quantification', 'Lifelong Learning', 'Conformal Prediction'],
    pdfLink: 'https://arxiv.org/pdf/2402.02720.pdf',
    year: 2024,
    abbrev: 'ICML'
  },
  {
    id: 5,
    title: 'Sparse Polynomial Optimization with Unbounded Sets',
    journal_year: 'arXiv preprint 2024',
    people: ['Lei Huang', 'Shucheng Kang', 'Jie Wang', 'Heng Yang'],
    tags: ['Semidefinite Optimization and Relaxation', 'Optimal Control'],
    pdfLink: 'https://arxiv.org/pdf/2401.15837.pdf',
    year: 2024,
  },
  { 
    id: 4, 
    title: 'On the Nonsmooth Geometry and Neural Approximation of the Optimal Value Function of Infinite-Horizon Pendulum Swing-up', 
    journal_year: 'Learning for Dynamics & Control (L4DC) 2024', 
    people: ['Haoyu Han', 'Heng Yang'], 
    tags: ['Optimal Control'],
    pdfLink: 'https://arxiv.org/pdf/2312.17467.pdf',
    year: 2024,
    codeLink: 'https://github.com/ComputationalRobotics/InvertedPendulumOptimalValue',
    abbrev: 'L4DC'
  },
  { 
    id: 3, 
    title: 'Uncertainty Quantification of Set-Membership Estimation in Control and Perception: Revisiting the Minimum Enclosing Ellipsoid', 
    journal_year: 'Learning for Dynamics & Control (L4DC) 2024',
    people: ['Yukai Tang', 'Jean-Bernard Lasserre', 'Heng Yang'], 
    tags: ['Uncertainty Quantification', 'Semidefinite Optimization and Relaxation', 'Computer Vision and Perception', 'Set-Membership Estimation'],
    pdfLink: 'https://arxiv.org/pdf/2311.15962.pdf',
    year: 2024,
    abbrev: 'L4DC',
    award: 'Oral'
    // videoLink not provided for this publication
    // highlightLink not provided for this publication
    // others also not provided
  },
  { 
    id: 2, 
    title: 'SIM-Sync: From Certifiably Optimal Synchronization over the 3D Similarity Group to Scene Reconstruction with Learned Depth', 
    journal_year: 'IEEE Robotics and Automation Letters (RA-L) 2024', 
    people: ['Xihang Yu', 'Heng Yang'], 
    tags: ['Semidefinite Optimization and Relaxation', 'Computer Vision and Perception'],
    pdfLink: 'https://arxiv.org/pdf/2309.05184.pdf',
    year: 2024,
    abbrev: 'RA-L'
    // highlightLink not provided for this publication
    // others not provided
  },
  { 
    id: 1, 
    title: 'Verification and Synthesis of Robust Control Barrier Functions: Multilevel Polynomial Optimization and Semidefinite Relaxation', 
    journal_year: 'IEEE Conference on Decision and Control (CDC) 2023', 
    people: ['Shucheng Kang', 'Yuxiao Chen', 'Heng Yang', 'Marco Pavone'], 
    tags: ['Semidefinite Optimization and Relaxation', 'Control Theory'],
    pdfLink: 'https://arxiv.org/pdf/2303.10081.pdf',
    year: 2023,
    abbrev: 'CDC'
    // highlightLink not provided for this publication
    // others not provided
  },
    
    // ... more publications
  ];
  

// List of unique tags extracted from all publications
const uniqueTags = Array.from(new Set(allPublications.flatMap(p => p.tags)));

const sortedPublications = allPublications.sort((a, b) => {
  // First, compare by year
  const yearDifference = b.year - a.year;
  if (yearDifference !== 0) {
      return yearDifference; // If years are not equal, sort by year
  }
  // If years are equal, compare by title
  return a.title.localeCompare(b.title);
});

const PublicationsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <div className="publications-page">
            <div className="publications-container">
                <SearchBar onSearch={setSearchQuery} />
                <TagFilter onTagSelect={setSelectedTags} selectedTags={selectedTags} tags={uniqueTags} />
                <PublicationsList publications={sortedPublications} searchQuery={searchQuery} selectedTags={selectedTags} />
            </div>
        </div>
    );
};

export default PublicationsPage;
