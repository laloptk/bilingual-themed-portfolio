const Button = ({children, onClick  }) => {
    return(
        <button onClick={(varName) => onClick(varName)}>
            {children}
        </button>
    )
}

export default Button