import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })

    const data = await res.json();
    console.log(data);

    if (data.success) {
      toast.success("User has been added !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setFormData({});

    } else {
      toast.error(data.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        nav {
          display: none;
        }
        footer {
          display: none;
        }
      `}</style>
      <ToastContainer
        newestOnTop={false}
        rtl={false}
      />
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <BaseCard title="Add User">
                <Stack spacing={3}>
                  <TextField
                    value={formData.name ? formData.name : ""}
                    name="name"
                    label="Name"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    value={formData.email ? formData.email : ""}
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    value={formData.password ? formData.password : ""}
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Stack>
                <br />
                <Button
                  className="bg-blue-400 text-white hover:text-black"
                  variant="outlined"
                  mt={2}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </BaseCard>
            </Grid>
          </Grid>
        </FullLayout>
      </ThemeProvider>
    </>
  );
};

export default AddUser;
