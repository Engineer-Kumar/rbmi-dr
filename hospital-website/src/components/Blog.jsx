import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  const posts = [
    {
      image: '/img/blog-1.jpg',
      title: 'Dolor clita vero elitr sea stet dolor justo diam',
      description: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo',
      author: 'John Doe',
      views: '12345',
      comments: '123'
    },
    // Add other posts similarly
  ];

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

          .blog-container {
            padding: 80px 20px;
            background: linear-gradient(135deg, #f0f4ff 0%, #d9e4ff 100%);
            font-family: 'Roboto', sans-serif;
            color: #2c3e50;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .blog-title {
            text-align: center;
            margin-bottom: 50px;
          }

          .blog-title h5 {
            display: inline-block;
            color: #3751ff;
            text-transform: uppercase;
            border-bottom: 4px solid #3751ff;
            padding-bottom: 8px;
            font-weight: 700;
            letter-spacing: 2.5px;
            font-size: 1.15rem;
          }

          .blog-title h1 {
            font-size: 3rem;
            margin-top: 15px;
            font-weight: 700;
            color: #1a1a1a;
            text-shadow: 1px 1px 6px rgba(55,81,255,0.3);
            line-height: 1.2;
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .blog-grid > * {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 15px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 6px 15px rgba(55, 81, 255, 0.1);
          }

          .blog-grid > *:hover {
            transform: translateY(-8px);
            box-shadow: 0 14px 28px rgba(55, 81, 255, 0.25);
          }

          /* Improved text styling for better readability inside blog container */
          p, span, li {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #34495e;
            letter-spacing: 0.02em;
            margin-bottom: 1rem;
          }

          h2, h3, h4 {
            color: #2c3e50;
            margin-top: 1.8rem;
            margin-bottom: 1rem;
            font-weight: 700;
            line-height: 1.3;
          }

          /* For links inside blog content */
          a {
            color: #3751ff;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          a:hover {
            color: #2a3eb1;
            text-decoration: underline;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .blog-container {
              padding: 60px 15px;
            }
            .blog-title h1 {
              font-size: 2.4rem;
            }
            p, span, li {
              font-size: 1rem;
              line-height: 1.6;
            }
          }

          @media (max-width: 480px) {
            .blog-title h5 {
              font-size: 1rem;
              letter-spacing: 1.7px;
            }
            .blog-title h1 {
              font-size: 2rem;
            }
            p, span, li {
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }
        `}
      </style>

      <div className="blog-container" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="blog-title max-w-md mx-auto">
            <h5>Blog Post</h5>
            <h1>Our Latest Medical Blog Posts</h1>
          </div>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
