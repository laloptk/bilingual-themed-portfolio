import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const IconList = ({ icons }) => {
    return (
        <>
            {icons &&
                icons.map((icon) =>
                    icon.url ? (
                        <a href={icon.url ? icon.url : "#"}>
                            <FontAwesomeIcon icon={icon.icon} />
                        </a>
                    ) : (
                        <span>
                            <FontAwesomeIcon icon={icon.icon} />
                        </span>
                    )
                )
            }
        </>
    );
}

export default IconList