import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { People, BarChart, Security } from "@mui/icons-material";

function AdminDashboard() {
  const cards = [
    { title: "Total Users", value: "1,245", icon: <People /> },
    { title: "Funds Managed", value: "48", icon: <BarChart /> },
    { title: "Security Level", value: "High", icon: <Security /> },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cards.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.icon} {item.title}
                </Typography>
                <Typography variant="h5">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AdminDashboard;
