import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages, sendMessage } from '../redux/actions';
import ScrollToBottomButton from './ScrollToBottomButton';

const MessageList = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [input, setInput] = useState('');
  const messageEndRef = useRef(null);
  const messageListRef = useRef(null);

  // Fetch initial messages
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  // Scroll to the bottom when a new message is added
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      dispatch(fetchMessages());
    }
  };

  return (
    <div>
      <div
        className="message-list"
        onScroll={handleScroll}
        ref={messageListRef}
        style={{ position: 'relative', maxHeight: '400px', overflowY: 'auto' }}
      >
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`message ${index % 2 === 0 ? 'incoming' : 'outgoing'}`}
          >
            {msg.name}
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>

      {/* Send message input */}
      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {/* Scroll to bottom button below the message list */}
      <ScrollToBottomButton onClick={scrollToBottom} />
    </div>
  );
};

export default MessageList;
