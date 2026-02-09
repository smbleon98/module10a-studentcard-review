/* COMPONENT SUMMARY
This is a student card that tells the name and major of a student along with their student photo.
It has a button that displays a brief bio of the student if clicked.
*/

/* 
An object is passed into this containing 5 properties
Variables are created to store the values extracted from the same properties of the object passed in
useState creates a state variable, which showBio, and a function to update the state, which is setShowBio. 
It is updated indirectly via the toggleBio function, which calls the setShowBio state mgmt function.
Initially it's set to false, so the bio is hidden.
*/

import React from 'react';

function StudentCard(props) { 
  const { name, major, year, bio, imageUrl } = props; 
  const [showBio, setShowBio] = React.useState(false); 

  const toggleBio = () => {   // the toggleBio function changes the state of whether the bio is shown or not
    setShowBio(!showBio);
  };

  return (
    <div style={{
      /*
      Below style the card. Padding is the space between the card's border and the card's text content.
      Margin is the space bteween the card's border and the page itself. The card is white with rounded corners and a shadow.
      */
      maxWidth: '350px',  
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        // The card has a picture of the student in a circle, along with their name, major, and year
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2> 
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      {/* 
      Establishes a button. The only action it responds to is a 'click event'. 
      When the button is clicked, it calls the toggleBio function.
      The toggle bio function, referring back to the definition above,
      takes the current state of button (bio visibility is either off or on), and makes it the opposite value.
      So, if it was initially false (no bio shown), then if user clicks it, it shows the bio.
      If it was true, like from a last click (bio is shown), then it is hidden.
      */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
      {/*
      The button's text also changes depending on the state.
      If the bio is hidden, then the button text is SHOW BIO. If visible, then the button text is HIDE BIO.
      */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/* 
      This is shortcircuit evaluation, where you can just have the two conditions and a logical operator in between.
      If the first condition is true, then, the condition on the right is returned.
      If the first condition is false, then, then nothing is returned.
      Here, if showBio is true, then the bio is shown.
      */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
