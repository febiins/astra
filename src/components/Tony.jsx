import React from 'react';

function Tony() {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: 'auto',
        padding: '40px 20px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Profile */}
      <div>
        <img
          src="/tony.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Antony Joe
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Resource Manager
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I am a BCA student at SB College, Changanassery, originally from Pala, Kottayam, and a proud alumnus of Rajagiri Christu Jayanti Public School, Kakkanad. I have actively pursued opportunities to grow in the tech domain through workshops on Statistical Data Science with Python Essentials and "AI for Students: Build Your Own Generative AI Model." I also completed an add-on course in Hardware and Networking and a monsoon internship in Flutter App Development at ICT Academy, Technopark Phase 4, Trivandrum. My achievements include securing a placement at Accenture as a Software/Application/Cloud Technology Support Associate, leading as Head Coordinator for the Gaming Event at Magnera 2024, and winning prizes at intercollegiate competitions such as Nexcore and AGAROSH 2K24. With strong skills in leadership, problem-solving, communication, and creative thinking, I am driven to explore and innovate in the world of technology.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Skills</h3>
        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: '#ccc' }}>
          <li>Problem solving</li>
          <li>Creative Thinking</li>
          <li>Leadership Qualities</li>
          <li>Communication</li>
        </ul>
      </div>

      {/* Social Links */}
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="instagram.svg" alt="GitHub" width={30} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="linkedin.svg" alt="LinkedIn" width={30} />
        </a>
      </div>
    </div>
  );
}

export default Tony;