import { Link } from 'react-router';
import blogPosts from '../data/blogPosts';

function BlogPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          InterviewFlow Blog
        </h1>
        <p className='text-lg text-gray-600'>
          Read our latest articles on interview prep, coding tips, and career
          advice.
        </p>
      </div>

      <div className='space-y-8'>
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-64 object-cover'
              />
            )}
            <div className='p-6'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                <Link
                  to={`/blog/${post.slug}`}
                  className='hover:text-yellow-400 transition-colors'>
                  {post.title}
                </Link>
              </h2>
              <p className='text-sm text-gray-500 mb-2'>
                {post.date} &middot; by {post.author}
              </p>
              <p className='text-gray-700'>{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
