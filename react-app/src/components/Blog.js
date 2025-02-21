import React from 'react';
import blogpost1 from '../assets/images/blogpost1.jpg';
import blogpost2 from '../assets/images/blogpost2.jpg';
import blogpost3  from '../assets/images/blogpost3.jpg';
import blogpost4 from '../assets/images/blogpost4.jpg';

const Blog = () => {
    const blogPosts = [
        {
            title: "Understanding Different Types of Loans",
            date: "September 1, 2024",
            excerpt: "Learn about the various types of loans available and find out which one might be right for you.",
            description: "In this blog post, we delve into the different types of loans, including personal loans, mortgage loans, auto loans, and student loans. Each type has its own advantages and considerations. Understanding these can help you make informed decisions when applying for a loan.",
            imageUrl: blogpost1
        },
        {
            title: "Tips for Improving Your Credit Score",
            date: "August 20, 2024",
            excerpt: "Discover practical tips for boosting your credit score to qualify for better loan terms.",
            description: "Improving your credit score can significantly affect your ability to secure loans and the interest rates you’re offered. This blog provides actionable tips on how to improve your credit score, including paying bills on time, reducing debt, and checking your credit report regularly.",
            imageUrl: blogpost2
        },
        {
            title: "How to Apply for a Mortgage: A Step-by-Step Guide",
            date: "July 15, 2024",
            excerpt: "A comprehensive guide to navigating the mortgage application process smoothly.",
            description: "Applying for a mortgage can be a daunting process. This guide walks you through each step, from assessing your financial readiness and getting pre-approved to submitting your application and closing the deal. We provide tips and advice to make the process as smooth as possible.",
            imageUrl: blogpost4
        },
        {
            title: "The Pros and Cons of Personal Loans",
            date: "June 10, 2024",
            excerpt: "Weigh the advantages and disadvantages of taking out a personal loan for various needs.",
            description: "Personal loans can be a useful financial tool, but they come with both pros and cons. This blog post explores the benefits of personal loans, such as flexibility and quick access to funds, as well as potential drawbacks like higher interest rates and fees.",
            imageUrl: blogpost3
        }
    ];

    return (
        <div className="blog">
            <h2>Latest Blogs</h2>
            <ul>
                {blogPosts.map((post, index) => (
                    <li key={index} className="blog-post">
                        <h3>{post.title}</h3>
                        <p><em>{post.date}</em></p>
                        <img src={post.imageUrl} alt={post.title} className="blog-image" />
                        <p>{post.excerpt}</p>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
