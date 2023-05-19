import React, { useState } from 'react';
import './SugPage.css';
// import { database } from './firebase';

function SugPage() {

  const [websiteName, setWebsiteName] = useState('');
  const [websiteType, setWebsiteType] = useState('');
  const [note, setNote] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleNameChange = (event) => {
    setWebsiteName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setWebsiteType(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add website suggestion to database
    const suggestionsRef = database.ref('suggestions');
    const newSuggestionRef = suggestionsRef.push();
    newSuggestionRef.set({
      websiteName: websiteName,
      websiteType: websiteType,
      note: note,
      websiteUrl: websiteUrl,
    });

    // Clear form inputs
    setWebsiteName('');
    setWebsiteType('Portal');
    setNote('');
    setWebsiteUrl('');
  };

  return (
    <div className="sug-page">
      <div className="sug-form">
        <form onSubmit={handleSubmit}>
          <div className="sug-header">
            <h>SUGGESTION</h>
          </div>
          <div className="form-group">
            <label htmlFor="website-name">Website Name*:</label>
            <input type="text" id="website-name" value={websiteName} onChange={handleNameChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="website-type">Types of Websites*:</label>
            <select id="website-type" value={websiteType} onChange={handleTypeChange}>
              <option value="">-- Please select --</option>
              <option value="Portal">Portal</option>
              <option value="New">New</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="note">Note:</label>
            <textarea className="note-form" id="note" value={note} onChange={handleNoteChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="website-url">URL of Websites*:</label>
            <input className="url-form" type="url" id="website-url" value={websiteUrl} onChange={handleUrlChange} required />
          </div>

          <button type="submit-sug" class='submit-sug'>CONFIRM</button>
        </form>
      </div>
    </div>
  );
}

export default SugPage;