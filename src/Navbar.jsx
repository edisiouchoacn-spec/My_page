import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '24px',
      padding: '16px 40px',
      backgroundColor: '#111111',
      borderBottom: '2px solid #e05555'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</Link>
    </nav>
  )
}

export default Navbar