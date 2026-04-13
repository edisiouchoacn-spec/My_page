import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '36px 48px',
      background: 'rgba(220, 80, 80, 0.06)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(220, 80, 80, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'linear-gradient(to right, rgba(220, 80, 80, 0.25) 0%, rgba(245, 245, 243, 0.4) 40%)',}}>
      <span style={{ 
        fontFamily: 'Source Code Pro, monospace',
        fontWeight: 700,
        fontStyle: 'italic',
        fontSize: '18px',
        color: '#c0392b',
        letterSpacing: '2px'
      }}>eucn</span>

      <div style={{ display: 'flex', gap: '32px' }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre" className="nav-link">About</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </div>
    </nav>
  )
}

export default Navbar