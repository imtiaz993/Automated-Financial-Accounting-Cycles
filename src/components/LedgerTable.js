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



export default function LedgerTable() {
  const { documents, error } = useCollection('ledgerEntries')
  let LedgerName = [];
  let LedgerEntries = [];

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
    console.log(LedgerEntries)
  }




  return (
    <>
      {error && <p className="error">{error}</p>}
      <center>{!error && !documents && <MySpinner />}</center>
      {documents && documents.length === 0 && <p>No Entries Found.</p>}
     {documents && documents.length !== 0 && <h3 style={{borderBottom:"1px dotted blue"}}>Ledger</h3>} <br/>
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      {documents && documents.length !== 0 && LedgerEntries.map((entry,index) => (
        <div style={{width:'45%'}}>
        <TableContainer component={Paper}>
        <div ><h5 style={{ margin: "0px",textAlign:"center",border:"1px solid gray", padding: "10px 0px" }}>{entry[0]}</h5></div>
        <Table   aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Debit</StyledTableCell>
              <StyledTableCell align="right">Credit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {entry[1].map((row, index) => {

return (
  <StyledTableRow key={index}>

    
    {row.CD==="Debit" && <>
    <StyledTableCell align="left">{row.createdAt} <b>{row.amount}</b></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    </>
    }
   {row.CD==="Credit" && <>
   <StyledTableCell align="left"></StyledTableCell>
   <StyledTableCell align="right">{row.createdAt} <b>{row.amount}</b></StyledTableCell>
   </>
   }
  </StyledTableRow>
)
})}
          </TableBody>
        </Table>
        
      </TableContainer>
     <br/><br/>
     </div>
      ))
      

        }
        </div>
    </>
  );
}
