import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid } from "@mui/material";
import PropertiesCont from "../../src/components/dashboard/propertiescont";
import mongoose from "mongoose";
import Property from "../../models/Property";
import { useEffect } from "react";

const Properties = ({properties}) => {

  useEffect(() => {
    console.log(properties);
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        nav {
          display: none;
        }
        footer {
          display: none;
        }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <PropertiesCont properties={properties}/>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Properties;

// Get All The Properties
export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/skyline");
  }
  const property = await Property.find();
  // const property = await Property.find({}).sort({createdAt: 'desc'}).limit(3).exec()
  return {
    props: { properties: JSON.parse(JSON.stringify(property)) },
  };
}