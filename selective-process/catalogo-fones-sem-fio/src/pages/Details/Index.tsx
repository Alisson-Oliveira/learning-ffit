import { useParams } from "react-router-dom";

import Phone from "../../components/Phone/Index";

import { phones } from "../../database/phones";

import "./styles.css";

function Details() {
  const params = useParams();
  
  return (
    <div id="container-details">
      <Phone 
        data={phones[Number(params.id) - 1]}
      />
    </div>
  )
}

export default Details;