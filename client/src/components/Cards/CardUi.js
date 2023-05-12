import React from "react";
import './card-style.css'


const Card = props =>{
    return(
        <div className="cadr text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="img-1" className='card-img-top' id="imgID"/>
            </div>
            <div className="card-body text-dark">
                {/* <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amit consectetur adipisicing elit. Ex soluta explicabo animi suscipit. Beatae, recusandae quibusdam veritatis illo voluptatum excepturi?
                </p> */}
                <div className="card-content">
                    {/* <a href="#" className="btn btn-outline-success">{props.btnDes}</a> */}
                    <p style={{color: "#28282B"}}>{props.btnDes}</p>
                </div>
                <h4 className="card-title" style={{color: "#28282B"}}>
                    {props.title}
                </h4>
            </div>
        </div>

        
    );
}

export default Card;  