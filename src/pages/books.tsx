import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

interface Book {
  id: number;
  title: string;
  author: string;
  description?: string;
  cover_image_url?: string;
}

function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/books/'); // FastAPI backend URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (e: any) {
        setError('Failed to fetch books. Please ensure the Python backend is running.');
        console.error('Error fetching books:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Layout title="Books" description="Our Ebook Library">
        <main className="container margin-vert--xl">
          <h1 className="text--center">Loading Books...</h1>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Books" description="Our Ebook Library">
        <main className="container margin-vert--xl">
          <h1 className="text--center">Error: {error}</h1>
          <p className="text--center">Please ensure your Python FastAPI backend is running on `http://localhost:8000`.</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Books" description="Our Ebook Library">
      <main className="container margin-vert--xl">
        <h1 className="text--center">Our Ebook Library</h1>
        <div className="row">
          {books.length === 0 ? (
            <div className="col col--12 text--center">
              <p>No books found. Add some books to your backend!</p>
            </div>
          ) : (
            books.map((book) => (
              <div key={book.id} className="col col--4 margin-bottom--lg">
                <div className="card">
                  {book.cover_image_url && (
                    <div className="card__image">
                      <img
                        src={book.cover_image_url}
                        alt={`Cover of ${book.title}`}
                        title={`Cover of ${book.title}`}
                      />
                    </div>
                  )}
                  <div className="card__body">
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                    {book.description && <p>{book.description.substring(0, 100)}...</p>}
                  </div>
                  <div className="card__footer">
                    <Link
                      className="button button--primary button--block"
                      to={`/docs/${book.id}/intro`} // Assuming a doc link structure for book content
                    >
                      Read Book
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </Layout>
  );
}

export default BooksPage;
