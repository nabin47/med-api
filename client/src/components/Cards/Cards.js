import React, { Component } from 'react';
import Card from './CardUi';
import { useEffect,useState } from 'react';


import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';

function Cards() {
    const [dataSource, setDataSource] = useState("");
    useEffect(() => {
      const url = "/count";
  
      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              setDataSource(json);
          } catch (error) {
              console.log("error", error);
          }
      };
      fetchData();
    }, []);

        return(
            <div className="container-fluid d-flex justify-content-center cadr-container">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Brand Names" btnDes={dataSource.name_count}/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Generics" btnDes={dataSource.generic_count}/>
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Pharmaceuticals" btnDes={dataSource.company_count}/>
                    </div>
                </div>
            </div>
        );
}

export default Cards;