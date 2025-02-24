import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Ferquently Asked Questions" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            An Other Important Question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi quaerat eligendi officiis fuga minima mollitia quis. Assumenda,
            impedit vero dignissimos delectus sed pariatur autem nam, natus
            reprehenderit ratione inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Your Fav Question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi quaerat eligendi officiis fuga minima mollitia quis. Assumenda,
            impedit vero dignissimos delectus sed pariatur autem nam, natus
            reprehenderit ratione inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Some Other Question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi quaerat eligendi officiis fuga minima mollitia quis. Assumenda,
            impedit vero dignissimos delectus sed pariatur autem nam, natus
            reprehenderit ratione inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            The Final Question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi quaerat eligendi officiis fuga minima mollitia quis. Assumenda,
            impedit vero dignissimos delectus sed pariatur autem nam, natus
            reprehenderit ratione inventore.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
