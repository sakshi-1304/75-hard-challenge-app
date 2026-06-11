import React from 'react';
import Navbar from './components/Navbar';
import ContentSection from './components/ContentSection';
import TaskList from './components/TaskList';
const App = () => {
  return (
    <div>
      <Navbar />
      <ContentSection />
      <TaskList />
    </div>
  );
};

export default App;
