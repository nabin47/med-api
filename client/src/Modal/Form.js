import React from 'react';
import './Form.css';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className='add-modal-title'>Add Medicine</h1>
      <div className='form-body'>
        <div className='form-col'>
          <div className="form-group">
            <label >Drug name</label>
            <input className="form-control form-ip-box" id="drug-name" required/>
          </div>
          <div className="form-group">
            <label>Drug Generic name</label>
            <input className="form-control form-ip-box" id="drug-generic-name" required/>
          </div>
          <div className="form-group">
            <label >Strength</label>
            <input className="form-control form-ip-box" id="strength" required/>
          </div>
          <div className="form-group">
            <label >Company</label>
            <input className="form-control form-ip-box" id="Company" required/>
          </div>
          <div className="form-group">
            <label >Unit Price</label>
            <input className="form-control form-ip-box" id="unit-price"/>
          </div>
        </div>
        <div className='form-col'>
          <div className="form-group">
            <label >Indication</label>
            <input className="form-control form-ip-box" id="indication"/>
          </div>
          <div className="form-group">
            <label >Description</label>
            <input className="form-control form-ip-box" id="description"/>
          </div>
          <div className="form-group">
            <label >Doses</label>
            <input className="form-control form-ip-box" id="doses"/>
          </div>
          <div className="form-group">
            <label >Side Effects</label>
            <input className="form-control form-ip-box" id="side-effects"/>
          </div>
          <div className="form-group">
            <label >Precaution</label>
            <input className="form-control form-ip-box" id="precaution"/>
          </div>
        </div>
      </div>
      <div className="form-group modal-button">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button className="form-control btn btn-primary " type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
