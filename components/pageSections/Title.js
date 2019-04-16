import React from 'react'
import { H1Style } from '../../PagesStyles/TextStyles/H1Style'
import Link from 'next/link'

const Title = props => {
    return (
        <H1Style bold={props.bold}>
            <Link href="/">
            {props.text}
            </Link>
        </H1Style>
    )
}

export  {Title}