import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className='table-button-parent'>
      <button
        className="btn btn-lg btn-primary center table-button-add"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    </div>
  );
};
export default Trigger;
