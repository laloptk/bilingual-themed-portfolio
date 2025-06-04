const Footer = ({ classes="" }) => {
    return (
        <footer className={`footer ${classes}`}>
           <div className="footer-bottom">
                <p>Developed and designed by <a href="https://www.linkedin.com/in/eduardo-sanchez-hidalgo/">Eduardo Sanchez Hidalgo</a> (with a bit of help from chatGPT for the design).</p>
           </div>
        </footer>
    )
}

export default Footer