import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/system";
import { Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import {styled} from "@mui/material/styles"

const CardStyle = styled(Card)(({ theme }) => ({
  minWidth: "400px",
  height: "450px",
  marginTop: "40px",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "20px",
  display: 'flex',
  fontSize: '12px',
  justifyContent: "space-between"
}))



function JobCard({ description, skills, id, title, salaryHigh, city }) {

  return (
    <CardStyle>
      <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      padding='5px'
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "black", textAlign: 'center' }}
           >
            {title}
          </Typography>
          <Divider />
          <Typography 
            variant="h7"
            component="div">
            <Box
              sx={{display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  textAlign:'center',
                  m: 1
              }}>
              {skills?.slice(0,3).map(skill => 
                <Chip key={skill} label={skill} sx={{backgroundColor: "#c8c6c6"}}/>
                )}
            </Box>
          </Typography>
        
          <Typography sx={{ fontSize: "11px"}}>
          {description}
          </Typography>
          <Typography>
           Salary: ${salaryHigh}
          </Typography>
          <Typography>
           Location: {city}
          </Typography>
        </CardContent>
        <Button
         variant="contained"
         component={Link}
         to={`/job/${id}`}
         sx={{ width: "100", backgroundColor: "oranged"}}
        >
         Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}
export default JobCard;