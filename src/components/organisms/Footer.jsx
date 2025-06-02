import IconList from '../organisms/IconList'
const Footer = ({ social }) => {
    console.log(social);
    return (
        <div>
            {social && 
                <IconList icons={social} />
            }
        </div>
    )
}

export default Footer
