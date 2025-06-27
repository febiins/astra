import React from 'react';

function Geethika() {
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
          src="/geethika.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Geethika A
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Event Coordinator
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I am currently pursuing a Bachelor of Computer Applications (BCA) at Saintgits College of Applied Sciences, Kottayam (2022–2025), and hail from Karukachal, Kottayam. My schooling was completed at St. John The Baptist’s English School, Nedumkunnam. I have a keen interest in emerging technologies and have actively pursued learning opportunities, including attending a workshop on Cloud Computing at NIT Calicut and earning certifications in AI Implementation (Infosys Springboard) and Cybersecurity & IoT. I am proud to have been placed at Wipro as a Scholar Trainee through the Work Integrated Learning Program. With strengths in leadership, problem-solving, communication, creative thinking, and adaptability, I am passionate about applying my skills to build impactful solutions in the tech industry.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Skills</h3>
        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: '#ccc' }}>
          <li>Problem solving</li>
          <li>Adaptability</li>
          <li>Leadership Qualities</li>
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
          <img src="/instagram.svg" alt="GitHub" width={30} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" width={30} />
        </a>
      </div>
    </div>
  );
}

export default Geethika;