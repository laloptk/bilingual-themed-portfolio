import IconList from '../molecules/IconList'
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
