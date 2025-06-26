import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        {/* Fixed Top Navbar */}
        <motion.div
          className="home-header"
          animate={{ y: 0 }}
          initial={{ y: 25 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="logo-container"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="newlogo.png" height={60} width={60} />
            <h2 className="astra-text" style={{backgroundColor: 'transparent'}}>Astra</h2>
          </motion.div>

          <motion.div className="navbar-container">
            <Link to="home" smooth={true} duration={100} offset={-60}>
              Home
            </Link>
            <Link to="astras" smooth={true} duration={100} offset={-60}>
              Astras
            </Link>
            <Link to="activities" smooth={true} duration={100} offset={-60}>
              Activities
            </Link>
            <Link to="about" smooth={true} duration={100} offset={-60}>
              About
            </Link>
          </motion.div>
        </motion.div>

        <div style={{ paddingTop: '80px' }}>
          <h1 style={{color: '#1DB954'}}>Our Team</h1>
          <br />
          <br />
          <Element name="home" className="section" id="home">
            <motion.div style={{ height: '100vh', width: '55%'}}
                        className='main-home-container'
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}>
              <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    width: '100%', 
                    gap: 40,
                    justifyContent: 'center'
                  }}>
                <div className='members' onClick={() => navigate('/ann')}>
                  <img src='ann.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h5>Ann Treesa</h5>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
                <div className='members'>
                  <img src='anandhu.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h5>Anandhu Krishna</h5>
                  <p style={{fontSize: 14}}>Vice Captain</p>
                </div>
              </div>
              <br />
              <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    width: '100%', 
                    justifyContent: 'center', 
                    gap: 40, 
                    alignItems: 'center',
                    width: '100%',
                  }}>
                <div className='members'>
                  <img src='tony.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Antony Joe</h6>
                  <p style={{fontSize: 14}}>Resource Manager</p>
                </div>
                <div className='members'>
                  <img src='geethika.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Geethika A</h6>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
                <div className='members'>
                  <img src='febin.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Febin Sunny</h6>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
                <div className='members'>
                  <img src='amina.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Amina</h6>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
              </div>
              <br />
              <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    width: '100%', 
                    justifyContent: 'center', 
                    gap: 40, 
                    alignItems: 'center',
                    width: '100%',
                  }}>
                <div className='members'>
                  <img src='sethu.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Sethu Lakshmi</h6>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
                <div className='members' onClick={() => navigate('/alan')}>
                  <img src='alan.png' height={150} width={150} style={{borderRadius: 400}} />
                  <h6>Alan Shaji</h6>
                  <p style={{fontSize: 14}}>Team Captain</p>
                </div>
              </div>
              <div>

              </div>
            </motion.div>
          </Element>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <Element name="activities" className="section" id="activities">
            <div style={{ height: '100vh'}}>
              <h3>Additional Activities</h3>
              <hr />
              <br />
              <br />
              <div style={{display: 'flex', gap: 20}}>
                <img src='act1.png' height={200} width={220} style={{borderRadius:20}} />
                <img src='act2.png' height={200} width={220} style={{borderRadius:20}} />
              </div>
              <br />
              <div style={{display: 'flex', gap: 20}}>
                <img src='act1.png' height={200} width={220} style={{borderRadius:20}} />
                <img src='act2.png' height={200} width={220} style={{borderRadius:20}} />
              </div>
            </div>
          </Element>
          <Element name="astras" className="section" id="astras">
            <div style={{ height: '100vh'}}
                className='astras-container'>
              <motion.div style={{height: '50%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                <h1>
                  Team Astra
                </h1>
                <p style={{ fontSize:14, color: 'white', textAlign: 'justify', fontWeight: 'initial' }}
                  className='text-left'>
                  Forged by Passion, Driven by Purpose

                  Team Astra is more than just a team—it's a powerhouse of creativity, innovation, and unstoppable energy. Named after the celestial weapon of precision and power, we believe in aiming high and striking with impact. Each member brings a unique spark—be it design, development, strategy, or storytelling—creating a constellation of talent that shines brightest when we work together.

                  We don't just complete tasks—we craft experiences. Whether it's coding a project, designing a solution, or facing a challenge, we believe in doing it with purpose, precision, and a relentless drive towards excellence. With minds aligned and hearts determined, Team Astra is on a mission:
                  To dream big, build bold, and leave a mark wherever we go.
                </p>
              </motion.div>
              <motion.div>
                <img src='newlogo.png'  height={400} width={400}/>
              </motion.div>
            </div>
          </Element>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 40,
              }}>
                <a href='https://www.instagram.com/astra_mpower_?igsh=MWN5NGp6Mjg1enRkYg=='>
                  <img src='instagram.svg' height={40} width={40} />
                </a>
                <a href=''>
                  <img src='linkedin.svg' height={40} width={40} />
                </a>
            </div>
            <br />
            <br />
          <hr />

          <Element name="about" className="section" style={{ backgroundColor: '#181818' }} id="about">
  <div
    style={{
      minHeight: '60vh',
      backgroundColor: 'transparent',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '40px 0'
    }}
  >
    <div style={{ backgroundColor: '#181818', width: '40%', minWidth: '300px' }}>
      <h1 style={{ color: '#fff', marginBottom: 10,backgroundColor: '#181818' }}>About</h1>
      <p style={{ fontSize: 16, color: '#bbb', lineHeight: '1.6',backgroundColor: '#181818' }}>
        “Team Astra — united by vision, driven by purpose, and destined to lead.”
      </p>
    </div>

    <div style={{ backgroundColor: '#181818', minWidth: '200px' }}>
      <h4 style={{ color: '#fff',backgroundColor: '#181818' }}>Quick Links</h4>
      <ul style={{ listStyle: 'none', padding: 0,backgroundColor: '#181818' }}>
        <li style={{ color: '#bbb', fontSize: 14, marginBottom: 5,backgroundColor: '#181818' }}>🏠 Home</li>
        <li style={{ color: '#bbb', fontSize: 14, marginBottom: 5,backgroundColor: '#181818' }}>🚀 Astras</li>
        <li style={{ color: '#bbb', fontSize: 14, marginBottom: 5,backgroundColor: '#181818' }}>📄 About</li>
      </ul>
    </div>

    <div style={{ backgroundColor: '#181818' }}>
      <h4 style={{ color: '#fff',backgroundColor: '#181818' }}>Follow Us</h4>
      <div style={{ display: 'flex', gap: 15, marginTop: 10,backgroundColor: '#181818' }}>
        <img src="instagram.svg" alt="Instagram" height={30} width={30} />
        <img src="linkedin.svg" alt="LinkedIn" height={30} width={30} />
      </div>
    </div>
  </div>
</Element>

        </div>
      </div>
    </>
  );
}

export default Home;
