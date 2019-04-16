import React from 'react'
import { H1Style } from '../../PagesStyles/TextStyles/H1Style'

const SubTitle = props => {
    return (
        <React.Fragment>
            <H1Style>
                {props.text}
            </H1Style>
        </React.Fragment>
    )
}

export { SubTitle }