import { Paper } from "@mui/material";

const DashboardCard: React.FC<{ title: string; count: number; icn: string }> = (
  props
) => {
  const { title, count, icn } = props;
  return (
    <Paper className="dashboardCard">
      <div>
        <div className="circle">
          <img src={icn} alt="search icn" height={55} width={55} />
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{count?.toString()?.padStart(2, "0")}</p>
      </div>
    </Paper>
  );
};

export default DashboardCard;
