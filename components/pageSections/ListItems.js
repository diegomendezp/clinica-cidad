import React from 'react'
import {ListItemsWrapperStyle} from '../../PagesStyles/ListItemsStyle'

const ListItems = props => {
    return (
        <ListItemsWrapperStyle>
            <ul>
            {
                props.list.map(item => <li key={`item-${item}`}><p>- {item}</p></li>)
            }
            </ul>
        </ListItemsWrapperStyle>
    )
}

export { ListItems }