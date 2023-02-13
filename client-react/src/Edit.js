import { useParams, useNavigate, useState, useEffect } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

export default function Edit(props) {
  const { plant_id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    debugger;
    axios.put(`/summary/planting/${plant_id}`)
      .then(response => {
        console.log("TRYING TO EDIT ON SUMMARY/EDIT PAGE", response);
      });
  };


  return (
    <>
      <p>Edit Page</p>

      <Button style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid green', borderRadius: '20px', color: 'green', textAlign: 'right' }} variant="submit" onClick={handleEdit}>Edit</Button>

    </>

  );
}