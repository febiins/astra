import React from 'react';

function Ann() {
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
          src="ann.png"
          alt="User"
          style={{
            borderRadius: '100%',
            height: '150px',
            width: '150px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ marginTop: '15px', fontSize: '24px' }}>
          Ann Treesa
        </h2>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Team Caption of Astra
        </p>
      </div>

      {/* About */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>About Me</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
          I’m a passionate and dynamic individual from Pala, Kottayam, currently pursuing my B.Sc. in Physics (2022–2025) at Alphonsa College, Pala, where I also serve as the Physics Association President. I am proud to be an M.G. University 3rd Rank Holder in Physics Model 2, and I completed my schooling at Carmel Public School, Pala.

            Beyond academics, I actively explore diverse interests. I'm a state-level winner in the Asika Handwriting Competition, trained in Taekwondo and swimming, and an enthusiastic artist, dancer, and NSS volunteer. I also serve as a catechism teacher, contributing to my community's spiritual education. In 2024–25, I gained professional experience working as a part-time intern at the Medical Records Department of Mar Sleeva Medicity, Pala.

            My hobbies include dancing, painting, journaling, and crafting, which reflect my creative and expressive personality. I take pride in my problem-solving ability, adaptability, and leadership qualities, which have helped me grow both personally and professionally.
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

export default Ann;