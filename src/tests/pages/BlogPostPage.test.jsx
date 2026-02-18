import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import BlogPostPage from '../../pages/BlogPostPage';
import blogPosts from '../../data/blogPosts';

const renderWithSlug = (slug) => {
  return render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route path='/blog/:slug' element={<BlogPostPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('BlogPostPage', () => {
  it('displays post content when slug is valid', () => {
    const post = blogPosts[0];
    renderWithSlug(post.slug);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    // author name may be split by whitespace when rendered
    expect(screen.getByText(new RegExp(post.author, 'i'))).toBeInTheDocument();
    expect(screen.getByText(post.date)).toBeInTheDocument();
    expect(screen.getByText(/Back to articles/i)).toBeInTheDocument();

    // markdown content should render as HTML elements
    expect(
      screen.getByText(/Job interviews can feel intimidating/i),
    ).toBeInTheDocument();
  });

  it('shows not found message for invalid slug', () => {
    renderWithSlug('does-not-exist');
    expect(screen.getByText(/post not found/i)).toBeInTheDocument();
    expect(screen.getByText(/back to blog/i)).toBeInTheDocument();
  });
});
