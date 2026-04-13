function Portfolio() {

  return (

    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '80px' }}>

      <div style={{ width: '100%', maxWidth: '900px' }}>

        <h1 style={{ fontSize: '42px', fontWeight: 900, color: '#1a1a1a', marginBottom: '8px' }}>
          Portfolio
        </h1>

        <p style={{ fontSize: '13px', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '72px' }}>
          Projects developed at CIn · UFPE
        </p>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>

          <div style={{ flex: '1 1 380px' }}>
            <img src="/~eucn/stayfe.jpg" alt="Stayfe" style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }} />
            <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Stayfe</h2>
            <p style={{ fontSize: '13px', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '16px' }}>Concepção de Artefatos Digitais · CAD</p>
            <p style={{ fontSize: '15px', lineHeight: '1.9', marginBottom: '16px' }}>
              An urban safety platform that lets citizens report incidents on an interactive map 
              and trigger SOS alerts in emergency situations.
            </p>
            <a href="https://stayfe.online" target="_blank" className="home-link">Visit Stayfe →</a>
          </div>

          <div style={{ flex: '1 1 380px' }}>
            <img src="/~eucn/cadus.png" alt="Cadus" style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }} />
            <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Cadus</h2>
            <p style={{ fontSize: '13px', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '16px' }}> Desenvolvimento de Software · DeS</p>
            <p style={{ fontSize: '15px', lineHeight: '1.9', marginBottom: '16px' }}>
              A patient self-registration platform that lets users fill in their medical data 
              from their phone before arriving at the clinic.
            </p>
            <a href="https://cadus-facil-login.lovable.app/" target="_blank" className="home-link">Visit Cadus →</a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Portfolio