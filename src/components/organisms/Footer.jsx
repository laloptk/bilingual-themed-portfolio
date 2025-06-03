import IconList from '../molecules/IconList'

const Footer = ({ social }) => {
    console.log(social);
    return (
        <footer>
            {social && 
                <IconList icons={social} />
            }
        </footer>
    )
}

export default Footer