import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Products from "./pages/products";
import Customers from "./pages/customers";
import Transactions from "./pages/transactions";
import Geography from "./pages/geography";
import Overview from "./pages/overview";
import DailyOverview from "./pages/dailyOverview";
import MonthlyOverview from "./pages/monthlyOverview";
import Breakdown from "./pages/breakdown";
import Admins from "./pages/admin";
import Performance from './pages/performance';

function App() {
  const mode = useSelector((state) => state.global.mode);

  // Create a theme
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<DailyOverview />} />
              <Route path="/monthly" element={<MonthlyOverview />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admins />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
