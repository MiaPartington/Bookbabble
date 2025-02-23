import './Footer.css';

const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2024 BookBabble</p>
          <div className="social-icons">
          <button className="text-dark" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Twitter">
  <i className="bi bi-twitter"></i>
</button>
<button className="text-dark" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Facebook">
  <i className="bi bi-facebook"></i>
</button>
<button className="text-dark" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Instagram">
  <i className="bi bi-instagram"></i>
</button>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/marketplace">Browse Books</a>
            <a href="/Sales">Sales & Offers</a>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;