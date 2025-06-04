const NetlifyForm = () => {
    return (
        <form name="contact" netlify="true">
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message<textarea></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default NetlifyForm