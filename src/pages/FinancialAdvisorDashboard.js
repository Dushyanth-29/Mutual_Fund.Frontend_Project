import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { AssignmentInd, MonetizationOn, Insights } from "@mui/icons-material";

function FinancialAdvisorDashboard() {
  const clients = [
    { name: "Ravi Kumar", portfolio: "₹2,45,000", risk: "Low" },
    { name: "Anjali Singh", portfolio: "₹3,10,000", risk: "Medium" },
    { name: "Rohit Patel", portfolio: "₹5,80,000", risk: "High" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Financial Advisor Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <AssignmentInd /> Clients
              </Typography>
              <Typography variant="h4">{clients.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <MonetizationOn /> Total Portfolio Value
              </Typography>
              <Typography variant="h4">₹11,35,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <Insights /> Strategy
              </Typography>
              <Typography>Focus on balanced mutual fund mix for stable returns.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default FinancialAdvisorDashboard;
