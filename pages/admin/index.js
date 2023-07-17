import React from "react";
import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import PropertiesCont from "../../src/components/dashboard/propertiescont";
import mongoose from "mongoose";
import Property from "../../models/Property";

const AdminDashboard = ({properties}) => {
  return (
    <>
      <style jsx global>{`
        nav{
          display: none;
        }
        footer {
          display: none;
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <SalesOverview />
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={4}>
              <DailyActivity />
            </Grid>
            <Grid item xs={12} lg={8}>
              <PropertiesCont properties={properties}/>
            </Grid>
            <Grid item xs={12} lg={12}>
              <BlogCard />
            </Grid>
          </Grid>
        </FullLayout>
      </ThemeProvider>
    </>
  );
};

export default AdminDashboard;

// get 5 properties
export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/skyline");
  }
  const property = await Property.find({}).sort({ createdAt: "desc" }).limit(4).exec();
  // const property = await Property.find({}).sort({createdAt: 'desc'}).limit(3).exec()
  return {
    props: { properties: JSON.parse(JSON.stringify(property)) },
  };
}