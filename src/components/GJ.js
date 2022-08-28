import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MySpinner from '../components/MySpinner'
import { useCollection } from '../hooks/useCollection'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function GJ() {
  const { documents, error } = useCollection('generalEntries')
 
  return (
    <>
    {error && <p className="error">{error}</p>}
    <center>{!error && !documents && <MySpinner/>}</center> 
    {documents && documents.length===0 &&  <p>No Entries Found.</p>}
    {documents && documents.length!==0 && 
    <>
    <h3 style={{borderBottom:"1px dotted blue"}}>General Journal</h3> 
    <br/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Transaction</StyledTableCell>
            <StyledTableCell align="right">Debit</StyledTableCell>
            <StyledTableCell align="right">Credit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {documents.map((entry,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{entry.doc.createdAt} </StyledTableCell>
              <StyledTableCell component="th" scope="row">{entry.doc.accType1} <br/><br/> <span style={{marginLeft:"160px"}}>{entry.doc.accType2}</span> </StyledTableCell>
              <StyledTableCell style={{verticalAlign:'top'}} align="right">{entry.doc.amount}</StyledTableCell>
              <StyledTableCell style={{verticalAlign:'top'}} align="right"><br/><br/>{entry.doc.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>}
    </>
  );
}
