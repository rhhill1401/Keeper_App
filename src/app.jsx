import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/Note';
import Notes from './components/notes';

function App() {
  return (
    <div>
      <Header />
      {Notes.map((item) => (
        <Note title={item.title} content={item.content} key={item.key} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
