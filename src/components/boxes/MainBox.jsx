const MainBox = ({children, classes = "portfolio"}) => {
    return (
        <main className={classes} >
            {children}
        </main>
    )       
}

export default MainBox;
