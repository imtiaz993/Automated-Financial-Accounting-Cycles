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


export default function BalanceSheet() {
  const { documents, error } = useCollection('ledgerEntries')
  let LedgerName = [];
  let LedgerEntries = [];
  let BalanceSheet = []

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
      let genac=''
      el[1].map((e)=>{
     
          if(e.CD==="Debit"){
              
              debit+=e.amount
          }
          if(e.CD==="Credit"){
              
              credit+=e.amount
          }
          genac=e.GeneralAcc
      })
      
    
      if(debit>=credit){
          
          BalanceSheet.push({title:el[0],CD:"Debit",generalAcc:genac,amount:debit-credit})
      }
      else if(credit>debit){
          
          BalanceSheet.push({title:el[0],CD:"Credit",generalAcc:genac,amount:credit-debit})
          
      }
      
  })
  console.log(BalanceSheet)
    
  }

  return (
    <>
     {error && <p className="error">{error}</p>}
    <center>{!error && !documents && <MySpinner/>}</center> 
    {documents && documents.length===0 &&  <p>No Entries Found.</p>}
    {documents && documents.length!==0 &&  
    <><h3 style={{borderBottom:"1px dotted blue"}}>Balance Sheet</h3> 
    <br/>

    <TableContainer component={Paper} style={{display:"flex"}}>
      <div style={{width:"50%"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div> <h4>Expense</h4>  </div>
      </div>
     
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
       
         
          {
          BalanceSheet.map((row,index) => (
            <TableBody>
            <StyledTableRow key={index}>
              {row.generalAcc==="Expense" && <>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              </>
            }
             
              
            </StyledTableRow>
            </TableBody>
          ))}
          
          
       
         
         
         
          
       
      </Table>
      </div>
      
      <div style={{width:"50%"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div> <h4>Revenue</h4>  </div>
      </div>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
       
         
          {
          BalanceSheet.map((row,index) => (
            <TableBody>
            <StyledTableRow key={index}>
              {row.generalAcc==="Revenue" && <>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              </>
            }
             
              
            </StyledTableRow>
            </TableBody>
          ))}
          
          
       
         
         
         
          
       
      </Table>
      </div>
    </TableContainer>
    </>}
    </>
  );
}
