import Title from "../atoms/Title/Title"
import Text from "../atoms/Text"

const SectionBox = ({children, classes="section", title, blurb }) => {
    return (
        <section className={classes} >
            {(title || blurb) && (
                <header className="section-header">
                    {title && <Title title={title} level="2" classes={"gradient-title"} />}
                    {blurb && <Text>{blurb}</Text>}
                </header>
            )}
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}

export default SectionBox;