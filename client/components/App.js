import React from 'react';
import Header from './Header';

// We pass props.children so that App renders whatever component is sent to it by the Router
// since we add different paths/components as sub routers for App
const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

// This is a way to show a specific name for our component instead of 'Stateless Component' when debbuging.
App.displayName = 'App';

export default App;
