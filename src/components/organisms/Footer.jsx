const Footer = ({ classes = '' }) => {
  return (
    <footer className={`footer ${classes}`}>
      <div className="footer-bottom">
        <p>
          Designed &amp; developed by{' '}
          <a href="https://www.linkedin.com/in/eduardo-sanchez-hidalgo/">
            Eduardo Sanchez Hidalgo
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
