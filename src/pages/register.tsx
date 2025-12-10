import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router'; // Import useHistory

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setMessage('Attempting to register...');

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful! Please log in.');
        history.push('/login'); // Redirect to login page
      } else {
        setMessage('Registration failed: ' + (data.msg || 'Unknown error'));
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('An error occurred during registration. Please ensure the backend is running.');
    }
  };

  return (
    <Layout title="Register" description="Register for an Ebook Reader account">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="text--center">Register for Ebook Reader</h1>
            <form onSubmit={handleRegister}>
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
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="margin-vert--md">
                <button type="submit" className="button button--primary button--block">
                  Register
                </button>
              </div>
            </form>
            {message && <p className="text--center">{message}</p>}
            <p className="text--center">
              Already have an account? <a href="/login">Login here</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default RegisterPage;

