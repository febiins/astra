import React from 'react';

function Anandhu() {
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
          src="/anandhu.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Anandhu Krishna
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Vice Caption of Astra
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I am a passionate Computer Science graduate from CAS IHRD, Agali, with a strong foundation in programming and web technologies. Hailing from Palakkad and having completed my schooling at Malleeswara Vidya Nikethan, I have consistently pursued excellence both academically and in extracurricular activities. I secured the third prize in the State Karate Championship and actively participated in technical events like Web Designing and Debugging at IHRD Tharang 2025. My technical skills have been sharpened through a hands-on workshop on Artificial Intelligence, covering Python, Django, HTML & CSS, JavaScript, React, React Native (Expo), Git & GitHub, basics of AWS services, and Railway web deployment. I am enthusiastic about building modern, responsive applications and continuously expanding my skill set in the tech domain.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Skills</h3>
        <ul style={{ paddingLeft: '20px', listStyle: 'square', color: '#ccc' }}>
          <li>Python / Django</li>
          <li>React / React Native(expo)</li>
          <li>Git / Github</li>
          <li>Basics in AWS services</li>
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

export default Anandhu;