function Home() {

  return (

    <div style={{ display: 'flex', minHeight: '100h'}}>

      <div style={{ width: '10px', backgroundColor: '#e05555'}}></div>

      
      <div style={{ maxWidth: '800px', padding: '40px', margin: '0'}}>

      <img src="foto.jpg" alt="Edisio Uchôa" style={{ 
        width: '400px', 
        borderRadius: '25px', 
        transform: 'rotate(90deg)',
        position: 'absolute',
        right: '100px',
        top: '200px'
      }} />

        <h1>Edisio Uchôa Cavalcanti Neto</h1>
        <h3>Student of SISTEMAS DE INFORMAÇÃO, At CIN/ufpe.</h3>

        <h2>About me:</h2>
        <p>
          I'm a Systems of Information student at CIn/UFPE, where I joined in the second semester of 2025 through SISU. 
          Before that, I spent six months studying Odontology at UPE — but I found my true path in Computing, 
          an area I've been passionate about long before university, when I was building games in Unity and 
          casually learning Python on my own.
        </p>

        <p>
          During high school, I also participated in academic olympiads, earning honorable mentions 
          in the Canguru Mathematics Olympiad, three consecutive medals in the Brazilian Astronomy 
          Olympiad (OBA), and also competing in the Brazilian Robotics Olympiad (OBR).
        </p>

        <p>
          I am currently linked to the discipline of Design Systems (DS) at CIn/UFPE. 
          My academic and professional interests lie in Data Science, Artificial Intelligence, 
          and other emerging areas of technology.
          I also aim to join Citi, the Junior Enterprise of CIn/UFPE, as a way to develop practical 
          experience and contribute to real-world projects during my graduation. 
          Then, it's not everthing, i also would like to improve social skills (soft skills) there.
        </p>

        <p>
          Since joining CIn, I quickly developed a strong affinity with the course, worked on projects, 
          and participated in academic monitoring activities. My expected graduation is in 2029.
        </p>

        <h2 style={{ marginTop: '30px'}}>Contacts:</h2>
        <p>1 - edisiouchoacn@gmail.com</p>
        <p>2 - eucn@cin.ufpe.br</p>

        <h2 style={{ marginTop: '30px' }}>Links:</h2>
        <p><a href="https://linkedin.com/in/edisio-uchôa-8469aa380" target="_blank" style={{ color: '#64b5f6' }}>LinkedIn</a></p>
        <p><a href="https://github.com/edisiouchoacn-spec" target="_blank" style={{ color: '#64b5f6' }}>GitHub</a></p>

      </div>

    </div>
  )
}

export default Home