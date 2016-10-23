import React from 'react';
import Header from './Header';

// We pass props.children so that App renders whatever component is sent to it by the Router
// since we add different paths/components as sub routers for App
export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
