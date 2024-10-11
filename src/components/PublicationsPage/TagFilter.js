import React from 'react';
import './TagFilter.css';

const TagFilter = ({ onTagSelect, selectedTags, tags }) => {
    const toggleTag = (tag) => {
        onTagSelect(selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag]);
    };

    // Create a sorted copy of the tags array
    const sortedTags = [...tags].sort();

    return (
        <div className="tag-filter">
            {sortedTags.map(tag => (
                <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default TagFilter;

