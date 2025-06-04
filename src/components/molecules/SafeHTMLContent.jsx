import DOMPurify from 'isomorphic-dompurify'

const SafeHTMLContent = ({content, classes}) => {
    const sanitazedContent = DOMPurify.sanitize(content);
    return (
        <>
            <div className={classes} dangerouslySetInnerHTML={{__html: sanitazedContent}} />
        </>
    )
}

export default SafeHTMLContent