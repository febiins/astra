import React from 'react';

function Amina() {
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
          src="/amina.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Amina
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Documentation Lead
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I am a BCA student at KMEA College, Pukkattupady (2022–2025), based in Kochi, with my schooling completed at AL-Ameen, Edapally. I have actively built my technical knowledge through a workshop at CET, Trivandrum, and certifications in Cybersecurity and Networking. Beyond academics, I was honored to serve as the Lady Representative in the college union, reflecting my leadership and team engagement skills. With a strong focus on leadership, problem-solving, and creative thinking, I strive to grow both as a tech enthusiast and a well-rounded individual.
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

export default Amina;