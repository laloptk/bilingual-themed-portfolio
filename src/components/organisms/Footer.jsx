import IconList from '../molecules/IconList'

const Footer = ({ social }) => {
    return (
        <footer className="footer">
            <div className="icons">
                {social &&
                    <IconList icons={social} />
                }
            </div>   
        </footer>
    )
}

export default Footer