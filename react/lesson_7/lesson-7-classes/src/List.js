import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(item => (
                    <ListItem item={item.name} key={item.name} />
                ))}
            </ul>
        )
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List
