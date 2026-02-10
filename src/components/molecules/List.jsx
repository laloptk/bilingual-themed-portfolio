const List = ({items}) => {
    return (
        <ul>
            {
                items &&
                    items.map((item) => {
                        return <li key={item.id}>{item?.name ?? ''}</li> 
                    })
            }
        </ul>
    )
}

export default List;