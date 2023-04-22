import React from 'react'
import Layout from '../../Layout/Layout'
import { usePostExcerptQuery } from "../../hooks/usePostExcerptQuery"
import BlogExcerpt from '../../components/Blog/BlogExcerpt/BlogExcerpt'

const Magazine = () => {
    const { edges: data } = usePostExcerptQuery()

    console.log("🚀 ~ file: magazine.js:7 ~ magazine ~ data:", data)
    return (
        <Layout>
            <BlogExcerpt />
        </Layout>

    )
}

export default Magazine