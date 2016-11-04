import React from 'react'

const Popup = (props) => (
  <div className="the-popup" style={{opacity: props.opacity}}>
    <h4>Im is a good Popup</h4>

    <button onClick={props.handleClose}>
      Close
    </button>

  </div>
);

export default Popup
