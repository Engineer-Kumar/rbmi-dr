import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaComment } from 'react-icons/fa';

const BlogCard = ({ image, title, description, author, views, comments }) => {
  return (
    <div>
      <style>
        {`
          .blog-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .blog-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .blog-card .content {
            padding: 16px;
          }

          .blog-card .title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
            transition: color 0.3s ease;
          }

          .blog-card .title:hover {
            color: #007bff;
          }

          .blog-card p {
            color: #555;
            line-height: 1.5;
            margin-bottom: 15px;
          }

          .blog-card .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 16px;
            border-top: 1px solid #eaeaea;
          }

          .blog-card .author {
            display: flex;
            align-items: center;
          }

          .blog-card .author img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 8px;
          }

          .blog-card .stats {
            display: flex;
            align-items: center;
          }

          .blog-card .stats small {
            margin-left: 10px;
            color: #007bff;
          }

          @media (max-width: 768px) {
            .blog-card .title {
              font-size: 1.25rem;
            }

            .blog-card p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="blog-card">
        <img src={image} alt={title} />
        <div className="content">
          <Link to="/blog/post" className="title">{title}</Link>
          <p>{description}</p>
        </div>
        <div className="footer">
          <div className="author">
            <img src="/img/user.jpg" alt="Author" />
            <small>{author}</small>
          </div>
          <div className="stats">
            <small>
              <FaEye className="text-blue-600 mr-1 inline" />{views}
            </small>
            <small>
              <FaComment className="text-blue-600 mr-1 inline" />{comments}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;