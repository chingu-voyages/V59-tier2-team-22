import { useParams, Link, useNavigate } from 'react-router';
import blogPosts from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!post) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-12 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          Post not found
        </h2>
        <button
          onClick={() => navigate('/blog')}
          className='px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition'>
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <Link
        to='/blog'
        className='text-yellow-400 hover:text-yellow-500 text-sm mb-4 inline-block'>
        &larr; Back to articles
      </Link>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>{post.title}</h1>
      <p className='text-sm text-gray-500 mb-8'>
        {post.date} &middot; by {post.author}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-96 object-cover rounded-lg mb-8'
        />
      )}
      <div className='prose prose-lg text-gray-700 prose-li:mb-4 prose-ol:space-y-4 prose-ul:space-y-4'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPostPage;
