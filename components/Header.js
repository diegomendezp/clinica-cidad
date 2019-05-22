import React from 'react'
import { HeaderWrapperStyle } from '../PagesStyles/HeaderStyle'
import { Title } from './pageSections/Title'
import { SubTitle } from './pageSections/SubTitle'

const Header = props => {
    return (
        <HeaderWrapperStyle>
            <Title text={props.title} bold ></Title>
            <SubTitle text={props.subtitle} bold={false}></SubTitle>
        </HeaderWrapperStyle>
    )
}

export default Header