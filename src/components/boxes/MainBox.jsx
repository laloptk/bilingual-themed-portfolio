const MainBox = ({children, classes = "portfolio light"}) => {
    return (
        <main className={classes}>
            {children}
        </main>
    )       
}

export default MainBox;
