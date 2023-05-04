import React from "react"
import { Grid, Card, Box } from "@mui/material"

export const OuterGridPostExcerpt = ({ children }) => {
  return (
    <Grid container spacing={6}>
      {children}
    </Grid>
  )
}

export const InnerGridPostExcerpt = ({ children, width }) => {
  return (
    <Grid item xs={12} md={width}>
      {children}
    </Grid>
  )
}

export const CardPostExcerpt = ({ children, minHeight }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: minHeight,
      }}
    >
      {children}
    </Card>
  )
}
