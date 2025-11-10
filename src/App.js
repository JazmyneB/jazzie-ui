import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
// import Toast from './components/Toasts/Toast';

function App() {
  // const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  // const triggerToast = (type) => {
  //   const messages = {
  //     info: 'JazzieUI is loading in style 💅',
  //     success: 'Saved beautifully — you did that 🌸',
  //     warning: 'A gentle reminder to check your work ✨',
  //     error: 'Oops, not so jazzie 💔',
  //   };
  //   setToast({ show: true, type, message: messages[type] });
  // };
  return (
    <div className="app-container">
      <NavBar
        brand="🌸 JazzieUI"
        links={[
          { label: 'Home' },
          { label: 'Components' },
          { label: 'Docs' },
          { label: 'Contact' }
        ]}
        onLinkClick={(link) => console.log(`Clicked ${link.label}`)}
      />

      <Hero />

       {/* <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '5rem' }}>
        <button className="cta-button" onClick={() => triggerToast('info')}>Info</button>
        <button className="cta-button" onClick={() => triggerToast('success')}>Success</button>
        <button className="cta-button" onClick={() => triggerToast('warning')}>Warning</button>
        <button className="cta-button" onClick={() => triggerToast('error')}>Error</button>
      </div>

      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      /> */}

      <Footer />
    </div>
  );
}

export default App;
