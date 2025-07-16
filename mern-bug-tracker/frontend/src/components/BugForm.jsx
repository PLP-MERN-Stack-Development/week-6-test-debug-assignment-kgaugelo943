import { useState } from 'react';
import { createBug } from '../api/bugs';

export default function BugForm({ onBugCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
      // e.preventDefault(); ← BUG

      console.log('Form submitted with:', { title, description }); 
      
      await createBug({ title, description });
      onBugCreated();
    };
    
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        type="text"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="block w-full mb-2 p-2 border"
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-2 p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Report Bug
      </button>
    </form>
  );

