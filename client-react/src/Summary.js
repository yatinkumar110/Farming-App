import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";


export default function Summary() {
  const [plantData, setPlantData] = useState([]);
  const [harvestData, setHarvestData] = useState([]);
  const [packData, setPackData] = useState([]);
  const [shipData, setShipData] = useState([]);

  const { plant_id } = useParams();


  useEffect(() => {
    Promise.all([
      axios.get(`/summary/planting/${plant_id}`),
      axios.get(`/summary/harvesting/${plant_id}`),
      axios.get(`/summary/packing/${plant_id}`),
      axios.get(`/summary/shipping/${plant_id}`),

    ]).then((res) => {
      console.log("Multiple Promises ", res);
      setPlantData(res[0].data);
      setHarvestData(res[1].data);
      setPackData(res[2].data);
      setShipData(res[3].data);

      // setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });

  }, []);



  return (

    <Box mt={4} >
      <h1>Summary</h1>

      <h3>Plant</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field ID</TableCell>
              <TableCell align="right">{plantData.field_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell align="right">{plantData.crop_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date Fertilized</TableCell>
              <TableCell align="right">{plantData.date_fertilized}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fertilizer/Persticides Applied</TableCell>
              <TableCell align="right">{plantData.fertilizer_pesticides_applied}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Harvest</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">{harvestData.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell align="right">{harvestData.farm_worker}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Harvest</TableCell>
              <TableCell align="right">{harvestData.date_harvest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tote Id</TableCell>
              <TableCell align="right">{harvestData.tote_id}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Packing</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Purchase Order Number</TableCell>
              <TableCell align="right">{shipData.purchase_order_number}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Unit</TableCell>
              <TableCell align="right">{shipData.buyer_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Date</TableCell>
              <TableCell align="right">{shipData.ship_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Amount</TableCell>
              <TableCell align="right">{shipData.ship_amount}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

    </Box>


  );




}