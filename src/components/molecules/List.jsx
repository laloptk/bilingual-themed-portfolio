const List = ({items}) => {
    return (
        <ul>
            {
                items &&
                    items.map((item) => {
                        return <li>{item.text}</li> 
                    })
            }
        </ul>
    )
}

export default List;