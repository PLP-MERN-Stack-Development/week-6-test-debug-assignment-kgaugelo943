import { useEffect, useState } from 'react';
import { fetchBugs, updateBug, deleteBug } from '../api/bugs';

export default function BugList() {
  const [bugs, setBugs] = useState([]);

  const loadBugs = async () => {
    const res = await fetchBugs();
    setBugs(res.data);
  };

  const handleStatusChange = async (id, status) => {
    await updateBug(id, { status });
    loadBugs();
  };

  const handleDelete = async (id) => {
    await deleteBug(id);
    loadBugs();
  };

  useEffect(() => {
    loadBugs();
  }, []);

  return (
    <div>
      {bugs.map(bug => (
        <div key={bug._id} className="border p-3 mb-2 rounded">
          <h3 className="font-bold">{bug.title}</h3>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <select
            value={bug.status}
            onChange={(e) => handleStatusChange(bug._id, e.target.value)}
            className="mr-2"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button
            onClick={() => handleDelete(bug._id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
