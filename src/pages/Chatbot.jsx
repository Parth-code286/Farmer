import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const API_Url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_AI_API}`; // Replace with your API key

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello !! How can I help you ?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { type: 'user', text: userInput };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');

    const newAiLoadingMessage = { type: 'ai-loading', text: <img src="/222.gif" alt="Loading..." className="load" width="50px" /> };
    setMessages((prevMessages) => [...prevMessages, newAiLoadingMessage]);

    try {
      const response = await axios.post(
        API_Url,
        {
          contents: [{ parts: [{ text: userInput }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const apiResponse = response.data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1 ? { type: 'ai', text: apiResponse } : message
        )
      );
    } catch (error) {
      console.error('Error fetching API response:', error);
      setMessages((prevMessages) =>
        prevMessages.map((message, index) =>
          index === prevMessages.length - 1 ? { type: 'ai', text: 'Sorry, something went wrong.' } : message
        )
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="BIGchatCont">
    <div className="chatbot-container"> {/* Main Container with Styling */}
      <div className="chat-area" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.type === 'user' ? 'user-chat-box' : 'ai-chat-box'}
          >
            {message.type === 'user' && (
              <img src="/user.webp" alt="User" className="user-image" width="80" />
            )}
            {message.type === 'ai' && (
              <img src="/ai.png" alt="AI" className="ai-image" width="60" />
            )}
            <div
              className={message.type === 'user' ? 'user-chat-area' : 'ai-chat-area'}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input Section */}
      <div className="prompt-area">
        <input
          type="text"
          placeholder="Message..."
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleImageButtonClick}>
          <img src="/img.svg" alt="Attach" />
          <input type="file" accept="image/*" hidden ref={fileInputRef} />
        </button>
        <button onClick={handleSendMessage}>
          <img src="/submit.svg" alt="Send" />
        </button>
      </div>
    </div>
    </div>
  );
};