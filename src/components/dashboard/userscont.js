import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import { useEffect } from "react";

const UserCont = ({ users }) => {
  let count = 1;

  // const [statusS, setStatus] = useState("");

  // // Method to change status
  // const changeStatus = (status) => {
  //   // if (statusS == "") {
  //   //   setStatus(status);
  //   // }

  //   setStatus(status);
  //   if (statusS == "Active") {
  //     setStatus("Inactive");
  //   } else {
  //     setStatus("Active");
  //   }

  //   console.log(statusS);
  // };

  return (
    <BaseCard title="All Users">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Sr. No
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Address
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Mobile
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Status
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(users).map((users) => (
            <TableRow key={users.email}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {count++}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "500",
                      }}
                    >
                      {users.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {users.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {users.address}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{users.mobile}</Typography>
              </TableCell>
              <TableCell align="right">
                <Chip
                  sx={{
                    pl: "6px",
                    pr: "6px",
                    backgroundColor: "#50C878",
                    //  EB5406 - Red 
                    color: "#fff",
                  }}
                  size="small"
                  label={users.status}
                  // onClick={() => changeStatus(users.status)}
                ></Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default UserCont;
