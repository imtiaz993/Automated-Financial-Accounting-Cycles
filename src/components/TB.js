import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TBEntry } from './TBEntry';
import MySpinner from './MySpinner';
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



export default function TB() {
  const date = new Date()
  const { documents, error } = useCollection('ledgerEntries')
  let LedgerName = [];
  let LedgerEntries = [];
  let TrialBalance = []

  if (documents) {

    //get entries title
    documents.map((entry) => {
      LedgerName.push(entry.doc.accType1)
    }
    )
    //make title unique 
    let uniqueTitle = [...new Set(LedgerName)]

    //push unique title on 0 index and empty array on 1 index
    for (let i = 0; i < uniqueTitle.length; i++) {
      LedgerEntries.push([uniqueTitle[i]])
      LedgerEntries[i].push([])
    }


    //push entries on 1 index of unique title 
    for (let j = 0; j < LedgerEntries.length; j++) {

      documents.map((entry) => {
        if (entry.doc.accType1 === LedgerEntries[j][0]) {
          LedgerEntries[j][1].push(entry.doc)
         
        }
      }
      )
      
      
    }
    LedgerEntries.map((el)=>{
      
      let debit=0;
      let credit=0;
      el[1].map((e)=>{
     
          if(e.CD==="Debit"){
              
              debit+=e.amount
          }
          if(e.CD==="Credit"){
              
              credit+=e.amount
          }
      })
      
    
      if(debit>=credit){
          
          TrialBalance.push({title:el[0],CD:"Debit",amount:debit-credit})
      }
      else if(credit>debit){
          
          TrialBalance.push({title:el[0],CD:"Credit",amount:credit-debit})
          
      }
      
  })
    console.log(TrialBalance)
  }
  return (
    <>
    {error && <p className="error">{error}</p>}
    <center>{!error && !documents && <MySpinner/>}</center> 
    {documents && documents.length===0 &&  <p>No Entries Found.</p>}
    {documents && documents.length!==0 &&  
    <><h3 style={{borderBottom:"1px dotted blue"}}>Trial Balance</h3> 
    <br/>
    <TableContainer component={Paper}>
      <center>
        <div style={{ padding: "10px 0px 20px 0px" }}>
          <h4 style={{ margin: "0px", padding: "0px 0px" }}>Pefectly Balanced Pvt. Ltd.</h4>
          <h5 style={{ margin: "0px", padding: "0px 0px" }}>Trial Balance</h5>
          <h6 style={{ margin: "0px", padding: "0px 0px" }}>As on {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h6>

        </div>
      </center>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Particulars</StyledTableCell>
            <StyledTableCell align="right">Debit</StyledTableCell>
            <StyledTableCell align="right">Credit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TrialBalance.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"> {row.title} </StyledTableCell>
              {row.CD === "Debit" && <>
                <StyledTableCell align="right">{row.createdAt} {row.amount}</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </>
              }
              {row.CD === "Credit" && <>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">{row.createdAt} {row.amount}</StyledTableCell>
              </>
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>}
    </>
  );
  
}
