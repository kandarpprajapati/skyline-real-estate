import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { Grid } from "@mui/material";
import UsersCont from "@/src/components/dashboard/userscont";
import mongoose from "mongoose";
import User from "../../models/User";
import { useEffect } from "react";

const AllUsers = (users) => {
  useEffect(() => {
    console.log(users);
  }, []);

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
            <UsersCont users={users} />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default AllUsers;

// Get All The Users
export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/skyline");
  }
  const users = await User.find();
  // const property = await Property.find({}).sort({createdAt: 'desc'}).limit(3).exec()
  return {
    props: { users: JSON.parse(JSON.stringify(users)) },
  };
}
