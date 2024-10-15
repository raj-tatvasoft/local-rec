import { Grid2 as Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import { getCurrentRole } from "../../utils/helpert";
import { ROLE_ENUM } from "../../utils/constant";

const Dashboard = () => {
  const DATA = [
    {
      title: "New Charts",
      count: 4,
      icn: "/dashSMSStar.svg",
    },
    {
      title: "Jobs",
      count: 102,
      icn: "/dashDocs.svg",
    },
    {
      title: "Profile Incomplete",
      count: 2,
      icn: "/dashUsers.svg",
    },
  ];
  if (getCurrentRole() === ROLE_ENUM.recruiter)
    DATA.unshift({
      title: "My Suggestions",
      count: 5,
      icn: "/dashRanking.svg",
    });
  return (
    <div className="dashboardWrapper">
      <Grid container spacing={5}>
        {DATA.map((x, i) => {
          return (
            <Grid size={{ md: 12, lg: i === 0 && DATA?.length === 3 ? 12 : 6 }}>
              <DashboardCard {...x} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Dashboard;
