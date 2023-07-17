import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by <span className="font-semibold">Sky</span><span className="text-red-500 font-bold">line</span>
      </Typography>
    </Box>
  );
};

export default Footer;
