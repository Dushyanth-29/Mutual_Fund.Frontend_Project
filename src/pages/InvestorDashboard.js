import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { TrendingUp, AccountBalance, PieChart } from "@mui/icons-material";
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Equity", value: 400 },
  { name: "Debt", value: 300 },
  { name: "Gold", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function InvestorDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Investor Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <TrendingUp /> Portfolio Value
              </Typography>
              <Typography variant="h4">₹12,45,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <AccountBalance /> Funds Invested
              </Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6">
                <PieChart /> Portfolio Allocation
              </Typography>
              <div style={{ height: 200 }}>
                <ResponsiveContainer>
                  <RePieChart>
                    <Pie data={data} dataKey="value" outerRadius={80} label>
                      {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default InvestorDashboard;
