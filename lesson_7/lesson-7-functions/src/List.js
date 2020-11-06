import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = props => {
    return (
        <ul className="list-group">
            {props.items.map(item => (
                <ListItem item={item.name} key={item.name} />
            ))}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List