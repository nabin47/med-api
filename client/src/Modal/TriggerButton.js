import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
const Trigger = ({ buttonRef, showModal }) => {
  return (
    <div className='add-modal-button'>
      <button
        className="btn btn-sm btn-primary modal-burron"
        ref={buttonRef}
        onClick={showModal}
      >
        <span>
          <PlusCircleOutlined />
          Add Data
        </span>
      </button>
    </div>
  );
};
export default Trigger;
