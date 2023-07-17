import React from "react";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/admin" >
      <span className="font-bold text-3xl">Sky</span>
      <span className="font-bold text-3xl text-red-500">Line</span>
    </Link>
  );
};

export default LogoIcon;
