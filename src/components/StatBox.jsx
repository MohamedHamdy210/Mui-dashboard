import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
export default function StatBox({ title, subTitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          color={colors.greenAccent[500]}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          color={colors.greenAccent[600]}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
