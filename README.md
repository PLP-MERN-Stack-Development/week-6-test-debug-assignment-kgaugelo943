🐛 MERN Bug Tracker
A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js). Users can report bugs, view, update, and delete them. The project includes automated testing and modern debugging techniques.

📦 Features
Create, read, update, and delete bug reports

Update bug status (open, in-progress, resolved)

Responsive UI with real-time form validation

Error handling both on client and server

Unit and integration tests (Jest, React Testing Library, Supertest)

🚀 Getting Started
📁 Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
🔧 Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in /backend with:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the server:

bash
Copy
Edit
npm run dev
🎨 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
🧪 Running Tests
✅ Backend Tests (Jest + Supertest)
bash
Copy
Edit
cd backend
npm test
Covers:

Unit tests for helper functions

Integration tests for API routes (POST, GET, PUT, DELETE)

✅ Frontend Tests (React Testing Library)
bash
Copy
Edit
cd frontend
npm test
Covers:

Form validation and button clicks

Component rendering with props and state

UI changes after API calls

🧰 Debugging Techniques Used
🖥️ Console Logging
console.log() is used across frontend and backend to trace values like req.body, form inputs, and API responses.

🌐 Chrome DevTools
Network tab: Inspect API requests and responses (status, headers, payloads)

React DevTools: Monitor component state, props, and re-renders

🐘 Node.js Inspector
Start the backend with debugging:

bash
Copy
Edit
node --inspect server.js
Open Chrome → chrome://inspect → click “Inspect”
Use debugger; in Express routes to pause execution.

⚛️ Error Boundaries (React)
Implemented a React Error Boundary to gracefully handle render-time crashes:

jsx
Copy
Edit
<ErrorBoundary>
  <App />
</ErrorBoundary>
Catches broken components and shows fallback UI instead of crashing the entire app.

🧪 Testing Strategy
Level	Tool	Description
Unit Tests	Jest	Test individual functions and components
Integration	Supertest, React Testing Library	Test end-to-end API and UI behavior
Mocking	jest.mock	Mock DB models and API functions
Debugging	Chrome DevTools, Node Inspector	Track runtime errors, inspect API issues

✅ Test Coverage Goals
100% coverage of bug-related API routes

Form validation logic thoroughly tested

Error handling and edge cases simulated

