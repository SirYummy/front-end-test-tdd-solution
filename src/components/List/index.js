import React, { Component } from 'react'

const renderListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item}</li>)
}

class List extends Component {

    render() {
        return (
            <ul>
                {renderListItems(this.props.items)}
            </ul>
        )
    }
}

export default List