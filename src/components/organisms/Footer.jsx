import IconList from '../molecules/IconList'

const Footer = ({ social, classes }) => {
    return (
        <footer className={`footer ${classes}`}>
            <div className="icons">
                {social &&
                    <IconList icons={social} />
                }
            </div>   
        </footer>
    )
}

export default Footer