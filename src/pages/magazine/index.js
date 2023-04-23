import React from 'react'
import BlogExcerpt from '../../components/Blog/BlogExcerpt/BlogExcerpt'
import { WidthCenterContainer } from '../../components/HelpersComponents/Containers/WidthCenterContainer'
import { PaddingContainer } from '../../components/HelpersComponents/Containers/PaddingContainer'

const Magazine = () => {
    return (
        <WidthCenterContainer>
            <PaddingContainer>
                <BlogExcerpt />
            </PaddingContainer>
        </WidthCenterContainer>
    )
}

export default Magazine