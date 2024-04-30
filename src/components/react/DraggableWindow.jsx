import React from 'react';
// import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


export default class DraggableWindow extends React.Component {
  render() {
    return (
      <Draggable >
        <div>I can now be moved around!</div>
        {/* <slot /> */}
      </Draggable>
    )
  }
}

