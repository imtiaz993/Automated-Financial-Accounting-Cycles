import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GE from './components/GE'
import GJ from './components/GJ'
import Ledger from './components/Ledger'
import TB from './components/TB'
import Home from './components/Home'
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BalanceSheet from './components/BalanceSheet';
import IncomeStatement from './components/IncomeStatement';

const AppRoutes = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/General-Journal" element={<GJ />} />
            <Route path="/Ledger" element={<Ledger />} />
            <Route path="/Add-Entry" element={<GE />} />
            <Route path="/Trial-Balance" element={<TB />} />
            <Route path="/Balance-Sheet" element={<BalanceSheet/>} />
            <Route path="/Income-Statement" element={<IncomeStatement/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>

  )
}

export default AppRoutes
