import React from 'react';

function Sethu() {
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
          src="sethu.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Sethu Lakshmi V
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Creative Lead
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I am currently pursuing a Bachelor of Computer Applications (BCA) at CMS College, Kottayam (2022–2025), with a strong academic foundation laid at SH Mount HSS, Kottayam. I have enhanced my technical skills by attending a workshop at CET, Trivandrum, and earning certifications in Cybersecurity, Python, and Flutter. Alongside my academic pursuits, I am also creatively inclined and secured first prize in a pencil drawing competition. I bring strengths in leadership, problem-solving, and creative thinking, and I’m passionate about blending technology and creativity to develop innovative solutions.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Skills</h3>
        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: '#ccc' }}>
          <li>Problem solving</li>
          <li>Creative Thinking</li>
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

export default Sethu;