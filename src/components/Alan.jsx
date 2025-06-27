import React from 'react';

function Alan() {
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
          src="/alan.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Alan Shaji
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Finance manager
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
         I am an enthusiastic BCA student at Rajagiri College of Management and Applied Sciences, Kakkanad (2022–2025), based in Kochi. I completed my schooling at the Institution of Human Resource Department, Mallapally. My academic journey has been enriched by hands-on experiences, including a workshop on Cybersecurity Essentials and certifications in Python programming and Robotics. I’ve actively participated in major events such as Dextra 2024 (Department Fest), Inceptra 2024 (College Fest), and the international conference ICAET. Known for my leadership, problem-solving, and creative thinking skills, I am equally passionate about photography, sports, gaming, and movies—bringing a balanced and dynamic approach to both academics and extracurricular pursuits.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Skills</h3>
        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: '#ccc' }}>
          <li>Leadership</li>
          <li>Problem Solving</li>
          <li>Creative Thinking</li>
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

export default Alan;