function Home() {

  return (

    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '0 80px' }}>

      <div style={{ width: '100%', maxWidth: '900px' }}>

        <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#1a1a1a', marginBottom: '10px' }}>
          Uchôa, Edisio
        </h1>

        <p style={{ fontSize: '13px', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '44px' }}>
          CIn · UFPE · Sistemas de Informação
        </p>

        <p style={{ fontSize: '17px', lineHeight: '2', marginBottom: '52px' }}>
          I'm someone who genuinely loves learning — not just the outcome, but the process itself. 
          As a student at CIn/UFPE, I'm constantly exploring the intersections between technology, 
          economics, and real-world problem solving. I'm drawn to ideas that challenge the status quo 
          and to building things that actually matter. Outside of code, you'll find me studying market 
          dynamics or thinking three moves ahead on a chessboard.
        </p>

        <div style={{ display: 'flex', gap: '32px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <a href="mailto:edisiouchoacn@gmail.com" className="home-link">edisiouchoacn@gmail.com</a>
          <a href="mailto:eucn@cin.ufpe.br" className="home-link">eucn@cin.ufpe.br</a>
        </div>

        <div style={{ display: 'flex', gap: '32px', marginTop: '12px' }}>
          <a href="https://linkedin.com/in/edisio-uchôa-8469aa380" target="_blank" className="home-link">LinkedIn</a>
          <a href="https://github.com/edisiouchoacn-spec" target="_blank" className="home-link">GitHub</a>
        </div>

      </div>

    </div>
  )
}

export default Home