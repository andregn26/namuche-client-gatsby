import React from 'react'
import PostExcerpt from '../../components/Blog/BlogMainPage/PostExcerpt/PostExcerpt'
import { WidthCenterContainer } from '../../components/HelpersComponents/Containers/WidthCenterContainer'
import { PaddingContainer } from '../../components/HelpersComponents/Containers/PaddingContainer'

const Magazine = () => {
    return (
        <WidthCenterContainer style={{ marginTop: "3rem" }}>
            <PostExcerpt />
        </WidthCenterContainer>
    )
}

export default Magazine