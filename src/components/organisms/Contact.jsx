import Title from '../atoms/Title/Title'
import IconList from '../molecules/IconList'
import NetlifyForm from '../molecules/NetlifyForm'

const Contact = ({ social, classes }) => {
    return (
        <div className={`contact ${classes}`}>
            <div className="contact-form">
                <NetlifyForm />
            </div>
            <div className="icons">
                {social &&
                    <IconList icons={social} />
                }
            </div>   
        </div>
    )
}

export default Contact