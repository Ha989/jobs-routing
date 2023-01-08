import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../data/fetchData";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  Width: "400px",
  minHeight: {xs: 500, md: 300},
  marginTop: "100px",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "rgba(27, 20, 100,0.5)",
  borderRadius: "20px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "50%", md: 600 },
  backgroundColor: "black",
  borderRadius: 2
};

function JobDetailModal() {
  const { id } = useParams();
  const [singleJob, setSingleJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleJob = async () => {
      const data = await fetchData.getSingleJob(id);
      console.log(data);
      setSingleJob(data.singleJob);
    };
    fetchSingleJob();
  }, [id]);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal sx={{style}}
        open={true}
        onClose={handleCloseModal}
      >
        <CardStyle>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "#fff", textAlign:'center', paddingBottom:'20px'}}
          >
            {singleJob?.title}
          </Typography>
          <Divider />
          <Typography variant="h6" component="div">
        <Box sx={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center',
        p: 1,
        m: 1,
        marginTop:'20px'
        }}>
          {singleJob?.skills.slice(0,3).map((skill) => 
          <Chip key={skill} label={skill} sx={{ backgroundColor:"#fff"}}  />
            )} 
            </Box>     
      </Typography>
          <Typography sx={{ color: "#fff", marginTop: "30px", textAlign:"center" }} className="job-description-main">
            {singleJob?.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ textAlign:"center", paddingTop:"40px", color: "#fff"}}>
                City: {singleJob?.city}
              </Typography>
            </CardContent>
            </Stack>
        </CardStyle>
      </Modal>
    </div>
  );
}

export default JobDetailModal;