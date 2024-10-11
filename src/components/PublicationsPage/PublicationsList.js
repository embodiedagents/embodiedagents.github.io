import React from 'react';
import './PublicationsList.css';

// Can search for publication name, Journal/Year, people
const PublicationsList = ({ publications, searchQuery, selectedTags }) => {
    const filteredPublications = publications.filter(pub => {
        // Convert entire searchQuery and all fields to lowercase for case-insensitive comparison
        const query = searchQuery.toLowerCase();

        // Check if searchQuery is in the title, journal_year or any of the people's names
        const matchesTitle = pub.title.toLowerCase().includes(query);
        const matchesJournalYear = pub.journal_year.toLowerCase().includes(query);
        const matchesPeople = pub.people.some(person => person.toLowerCase().includes(query));

        // Combine the matches with the tag filter
        const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => pub.tags.includes(tag));

        // Return true if all conditions are met
        return (matchesTitle || matchesJournalYear || matchesPeople) && matchesTags;
    });

    return (
        <div className="publications-list">
            {filteredPublications.map(pub => (
                <div key={pub.id} className="publication-row">
                    <div className="box-wrapper">
                        <div className="abbrev-box">{pub.abbrev || 'Preprint'}</div>
                        {pub.award && <div className="award-box">{pub.award}</div>}
                    </div>
                    <div key={pub.id} className="publication-item">
                        <div className="pubtitle">{pub.title}</div>
                        <div className='pubjournalyear'>{pub.journal_year} </div>
                        <div className="pubpeople">{pub.people.join(', ')} </div>
                        <div className="publication-buttons">
                            {pub.pdfLink && <a href={pub.pdfLink} className="button pdf" target="_blank" rel="noopener noreferrer">PDF</a>}
                            {pub.videoLink && <a href={pub.videoLink} className="button video" target="_blank" rel="noopener noreferrer">VIDEO</a>}
                            {pub.highlightLink && <a href={pub.highlightLink} className="button highlight" target="_blank" rel="noopener noreferrer">HIGHLIGHT</a>}
                            {pub.codeLink && <a href={pub.codeLink} className="button code" target="_blank" rel="noopener noreferrer">CODE</a>}
                            {pub.awardLink && <a href={pub.awardLink} className="button award" target="_blank" rel="noopener noreferrer">AWARD</a>}
                            {pub.newsLink && <a href={pub.newsLink} className="button news" target="_blank" rel="noopener noreferrer">NEWS</a>}
                            {pub.projectLink && <a href={pub.projectLink} className="button project" target="_blank" rel="noopener noreferrer">PROJECT</a>}
                        </div>
                        {/* <div>{pub.tags.join(', ')}</div> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicationsList;
