import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import BlogPage from '../../pages/BlogPage';
import blogPosts from '../../data/blogPosts';

describe('BlogPage', () => {
  it('renders a list of posts with links', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>,
    );

    blogPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      const link = screen.getByText(post.title).closest('a');
      expect(link).toHaveAttribute('href', `/blog/${post.slug}`);
    });
  });
});
