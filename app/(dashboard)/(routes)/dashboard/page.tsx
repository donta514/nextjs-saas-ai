import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <div>DashboardPage</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
