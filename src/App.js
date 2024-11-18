import React, { useState, useEffect } from 'react';
import MessageList from './components/MessageList';

const App = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://gorest.co.in/public/v1/users');
                const data = await response.json();
                setMessages(data.data.map((user, index) => ({
                    id: user.id,
                    content: user.name,
                    type: index % 2 === 0 ? 'incoming' : 'outgoing',
                })));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Messenger App</h1>
            <MessageList messages={messages} />
        </div>
    );
};

export default App;
