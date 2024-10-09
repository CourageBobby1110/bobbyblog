'use client'
import React from 'react';
import styles from './buyCourses.module.css';

const BuyCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Children’s Art',
      category: 'Art',
      description: 'Unleash creativity in young minds with hands-on art projects.',
      image: '/children.jpg', // Add your image paths
    },
    {
      id: 2,
      title: 'Music for Beginners',
      category: 'Music',
      description: 'Start your musical journey with this introduction to music.',
      image: '/classic.jpg',
    },
    {
      id: 3,
      title: 'Business Essentials',
      category: 'Business',
      description: 'Master the fundamentals of business management and strategy.',
      image: '/finance.jpg',
    },
    {
      id: 4,
      title: 'Introduction to Computer Science',
      category: 'Computer Science',
      description: 'Learn coding, algorithms, and computational thinking.',
      image: '/coding.jpg',
    },
    {
      id: 5,
      title: 'Language Mastery',
      category: 'Languages',
      description: 'Become fluent in a new language with immersive lessons.',
      image: '/languages.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buy Courses</h1>
      <p className={styles.subtitle}>Choose from a wide variety of courses tailored to your interests</p>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <img src={course.image} alt={course.title} className={styles.courseImage} />
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <p className={styles.category}>{course.category}</p>
            <p className={styles.description}>{course.description}</p>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCourses;
