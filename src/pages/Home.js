import React,  { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { useSearchParams } from 'react-router-dom';
import fetchData from "../data/fetchData";
import JobCard from '../components/JobCard';
import { Box } from '@mui/system';


function Home() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = React.useState(0);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetchJobs = async () => {
        const data = await fetchData.getJobs(page, q);
        console.log(data);
        setJobs(data.jobs);
        setPagesTotal(data.pagesTotal);
    };
    fetchJobs();
  },[page, q]);


  return (
    <>
    <Box sx={{ padding: 7}}>
    <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid key={page}item xs={12} md={8} lg={4}>
            <JobCard 
             id={job.id}
             title={job.title}
             description={job.description}
             skills={job.skills}
             salaryHigh={job.salaryHigh}
             city={job.city}
             />
          </Grid>
        ))}
     </Grid>
     </Box>
     <Box spacing={2} sx={{ m: 10, display: 'flex', justifyContent: 'center'}}>
         <Pagination 
         count={pagesTotal} 
         variant="outlined" 
         color="primary"
         onChange={(e, value) => {
            setPage(value)
         }} />
     </Box>
    </>
  );
}

export default Home;