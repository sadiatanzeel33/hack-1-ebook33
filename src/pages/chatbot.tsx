import React from 'react';
import Layout from '@theme/Layout';
import Chatbot from '../components/Chatbot';

function ChatbotPage() {
  return (
    <Layout title="AI Chatbot" description="Chat with an AI assistant about the textbook content.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="text--center">Textbook AI Chatbot</h1>
            <p className="text--center">Ask questions about the Physical AI & Humanoid Robotics course content.</p>
            <Chatbot />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ChatbotPage;
