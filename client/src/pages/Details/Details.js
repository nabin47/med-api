import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../../App.css';
import './Details.css'

const Details = ()=>{
    let { id } = useParams();
    let sid = "";
    for(let i=0;i<id.length;i++)
    {
      if(id[i]==='(')
      {
        break;
      }
      sid=sid+id[i];
    }

    const [item,setItem]=useState({
        name:"",
        strength:"",
        generic_name:"",
        company:"",
        price:"",
        side_effect:"",
        precautions:"",
        indication:""
    });

  useEffect(() => {

    fetch('/getmedicine/'+sid)
        .then((response)=> response.json())
    .then((data)=>data).then(data =>{
        setItem(data[0]);})
  }, []);

    return(
       <div>
        <NavBar/>
        <div class="medicine">
            <div class="medicine-description">
              <p class="name">{item.name}</p>
              <p class="medicine-attr">{item.generic_name}</p>
              <p class="medicine-attr">{item.strength}</p>
              <p class="medicine-attr">{item.company}</p>
              <p class="medicine-attr">{item.price} taka</p>
            </div>
            <div>
              <h4 class="med-heading">Indication</h4>
              <p class="description">{item.indication}</p>
              <h4 class="med-heading">SideEffects</h4>
              <p class="description">{item.side_effect}</p>
              <h4 class="med-heading">Description</h4>
              <p class="description">{item.description}</p>
              <h4 class="med-heading">Precautions</h4>
              <div class="description">
              <ul class>
                <li>{item.precautions}</li>
              </ul>
              </div>
            </div>
           </div>

        <Footer />

       </div>
    )
}
export default Details;