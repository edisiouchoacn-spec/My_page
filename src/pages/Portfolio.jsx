function Portfolio() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <div style={{ width: '10px', backgroundColor: '#e05555' }}></div>

      <div style={{ maxWidth: '900px', padding: '40px' }}>

        <h1>Portfolio</h1>

        {/* Stayfe */}
        <div style={{ marginTop: '60px' }}>
          <h1 style={{ fontSize: '64px', marginBottom: '8px' }}>Stayfe</h1>
          <p style={{ color: '#aaaaaa' }}>Discipline: Design Systems (CAD)</p>

          <p style={{ marginTop: '16px' }}>
            Stayfe is an urban safety platform that connects citizens through an interactive map, 
            allowing users to report incidents, view occurrences in real time, and trigger SOS 
            alerts in emergency situations.
          </p>

          <p style={{ marginTop: '8px' }}>
            <strong>Objective:</strong> Help people navigate urban spaces with more safety and awareness, 
            giving communities a tool to share and visualize security information collectively.
          </p>

          <p style={{ marginTop: '8px' }}>
            <a href="https://stayfe.online" target="_blank" style={{ color: '#64b5f6' }}>Visit Stayfe →</a>
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <img src="/Stayfelogin.png" alt="Stayfe Login" style={{ width: '48%', borderRadius: '8px' }} />
            <img src="/Stayfeapp.png" alt="Stayfe Map" style={{ width: '48%', borderRadius: '8px' }} />
          </div>
        </div>

        {/* Cadus */}
        <div style={{ marginTop: '80px' }}>
          <h1 style={{ fontSize: '64px', marginBottom: '8px' }}>Cadus</h1>
          <p style={{ color: '#aaaaaa' }}>Discipline: Software Development (DS)</p>

          <p style={{ marginTop: '16px' }}>
            Cadus is a patient self-registration platform that allows users to fill in their 
            medical information from their phone before arriving at the clinic — saving time 
            and making the check-in process smoother for both patients and professionals.
          </p>

          <p style={{ marginTop: '8px' }}>
            <strong>Objective:</strong> Simplify and digitize the patient registration process, 
            reducing bureaucracy at clinics and ensuring data is ready before the appointment.
          </p>

          <p style={{ marginTop: '8px' }}>
            <a href="https://cadus-facil-login.lovable.app/" target="_blank" style={{ color: '#64b5f6' }}>Visit Cadus →</a>
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <img src="/Cadushome.png" alt="Cadus Home" style={{ width: '48%', borderRadius: '8px' }} />
            <img src="/Cadussign.png" alt="Cadus Sign" style={{ width: '48%', borderRadius: '8px' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio