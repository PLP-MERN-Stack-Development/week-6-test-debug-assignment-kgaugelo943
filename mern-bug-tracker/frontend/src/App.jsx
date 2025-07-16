import { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bug Tracker</h1>
      <BugForm onBugCreated={() => setRefresh(!refresh)} />
      <BugList key={refresh} />
    </div>
  );
}

export default App;
