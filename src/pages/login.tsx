import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router'; // Import useHistory

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Attempting to log in...');
    
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        localStorage.setItem('token', data.token); // Store token
        // Redirect to a protected page, e.g., the library
        history.push('/docs/intro'); 
      } else {
        setMessage('Login failed: ' + (data.msg || 'Unknown error'));
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred during login. Please ensure the backend is running.');
    }
  };

  return (
    <Layout title="Login" description="Login to your Ebook Reader account">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="text--center">Login to Ebook Reader</h1>
            <form onSubmit={handleLogin}>
              <div className="margin-vert--md">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="margin-vert--md">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="margin-vert--md">
                <button type="submit" className="button button--primary button--block">
                  Login
                </button>
              </div>
            </form>
            {message && <p className="text--center">{message}</p>}
            <p className="text--center">
              Don't have an account? <a href="/register">Register here</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
