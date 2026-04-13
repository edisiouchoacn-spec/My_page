function About() {

  return (

    <div style={{ display: 'flex', minHeight: '100vh', padding: '80px', gap: '80px', alignItems: 'flex-start' }}>

      <div style={{ maxWidth: '620px' }}>

        <h1 style={{ fontSize: '42px', fontWeight: 900, color: '#1a1a1a', marginBottom: '8px' }}>
          About Me
        </h1>

        <p style={{ fontSize: '13px', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '48px' }}>
          CIn · UFPE · Sistemas de Informação
        </p>

        <h2 style={{ marginBottom: '12px' }}>Background</h2>
        <p>
          I've been curious about technology for as long as I can remember. Before university, 
          I spent time building small games in Unity and learning Python on my own — not for any 
          particular goal, just because I found it genuinely interesting.
        </p>

        <h2 style={{ marginTop: '40px', marginBottom: '12px' }}>Education</h2>
        <p><strong>Systems of Information — CIn/UFPE</strong> (2025 – expected 2029)</p>
        <p style={{ marginTop: '6px' }}>Admitted via SISU. Also placed 19th for Computer Science at UNICAP in the same selection cycle.</p>

        <p style={{ marginTop: '16px' }}><strong>High School — Escola Anita Gonçalves</strong></p>
        <p style={{ marginTop: '6px' }}>Developed a strong foundation in logic and exact sciences.</p>

        <h2 style={{ marginTop: '40px', marginBottom: '12px' }}>Academic Achievements</h2>
        <p>3 consecutive medals at the Brazilian Astronomy and Astronautics Olympiad (OBA), reaching national selection at Level 4 in 2023.</p>
        <p style={{ marginTop: '8px' }}>Honorable mention at the Canguru Mathematics Olympiad.</p>
        <p style={{ marginTop: '8px' }}>Participant at the Brazilian Robotics Olympiad (OBR).</p>

        <h2 style={{ marginTop: '40px', marginBottom: '12px' }}>Technical Skills</h2>
        <p><strong>Languages:</strong> Python, C++, JavaScript, React, Git, Assembly (functional)</p>
        <p style={{ marginTop: '8px' }}><strong>Academic:</strong> Discrete Mathematics, Calculus, Digital Artifact Design</p>

        <h2 style={{ marginTop: '40px', marginBottom: '12px' }}>Interests</h2>
        <p>Artificial Intelligence, Machine Learning, Data Science, Software Development, Blockchain & Cryptocurrency, Economics, Chess.</p>

        <h2 style={{ marginTop: '40px', marginBottom: '12px' }}>Professional Goals</h2>
        <p>In the short term, I'd like to join Citi, CIn's Junior Enterprise, to get closer to real projects and develop both technical and interpersonal skills.</p>
        <p style={{ marginTop: '8px' }}>In the long run, I'm aiming for postgraduate studies and a career in data and AI — ideally starting at Porto Digital and growing from there.</p>

      </div>

      <div style={{ flexShrink: 0, position: 'sticky', top: '100px' }}>
        <img src="/~eucn/foto.jpg" alt="Edisio Uchôa" style={{ 
          width: '280px', 
          borderRadius: '16px', 
          transform: 'rotate(90deg)',
          marginTop: '60px'
        }} />
      </div>

    </div>
  )
}

export default About