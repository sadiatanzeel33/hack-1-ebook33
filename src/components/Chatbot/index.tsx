import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css'; // Assume you'll create this CSS module

interface Message {
  text: string;
  sender: 'user' | 'bot';
  sources?: string[];
}

const Chatbot: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!query.trim()) return;

    const userMessage: Message = { text: query, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuery('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/chat', { // Assuming FastAPI runs on 8000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if using authentication
        },
        body: JSON.stringify({ query: query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to fetch response from backend');
      }

      const data = await response.json();
      const botMessage: Message = { text: data.answer, sender: 'bot', sources: data.context_sources };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (err: any) {
      console.error('Chatbot error:', err);
      setError(err.message || 'An error occurred while communicating with the chatbot.');
      setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, I am unable to respond at the moment.', sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.length === 0 && <p className={styles.welcomeMessage}>Ask me anything about the textbook!</p>}
        {messages.map((msg, index) => (
          <div key={index} className={clsx(styles.message, styles[msg.sender])}>
            <p>{msg.text}</p>
            {msg.sources && msg.sources.length > 0 && msg.sender === 'bot' && (
              <div className={styles.sources}>
                <strong>Sources:</strong> {msg.sources.join(', ')}
              </div>
            )}
          </div>
        ))}
        {loading && <div className={styles.loadingMessage}>Thinking...</div>}
        {error && <div className={styles.errorMessage}>Error: {error}</div>}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
          className={styles.chatInput}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
