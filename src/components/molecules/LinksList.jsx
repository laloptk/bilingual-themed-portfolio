const LinksList = ({links}) => {
    const linkNames = Object.keys(links);
    
    return (
        <ul>
            {
                links && linkNames &&
                    linkNames.map((linkName) => {
                        return <li><a href={links?.[linkName]}>{linkName}</a></li> 
                    })
            }
        </ul>
    )
}

export default LinksList;