import React from 'react'
import { H1Style } from '../../PagesStyles/TextStyles/H1Style'

const Title = props => {
    return (
        <H1Style bold={props.bold}>
            {props.text}
        </H1Style>
    )
}

export  {Title}