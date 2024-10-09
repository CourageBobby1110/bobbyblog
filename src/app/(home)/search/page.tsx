'use client'

import React, { useState, useEffect } from 'react'
import styles from './searchPage.module.css'

interface searchPosts {
  _id: string
  title: string
  body: string
}

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState<searchPosts[]>([])
  const [filteredPosts, setFilteredPosts] = useState<searchPosts[]>([])

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  // Filter posts based on search term
  useEffect(() => {
    setFilteredPosts(
      posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, posts])

  // Function to trim the post body to 200 words
  const trimBodyTo200Words = (body: string) => {
    const words = body.split(' ')
    return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : body
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Posts</h1>
      <input
        type="text"
        placeholder="Search for posts..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.postsContainer}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post._id} className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postContent}>
                {trimBodyTo200Words(post.body)}
              </p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No posts found</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage
