const fetchData = {}

fetchData.getJobs = async (page) => {
    const url= `http://localhost:4000/jobs?_page=${page}&_limit=9`
    const totalJob = 45;
    try {
       const response = await fetch(`${url}`);
       const pagesTotal = Math.ceil(totalJob/10);
       const data = await response.json();
       return {
        jobs: data,
        pagesTotal
        }
    } catch (error) {
       console.log("error", error)
    }
}

fetchData.getSingleJob = async (id) => {
    const jobUrl = `http://localhost:4000/jobs/${id}`
    try {
        const res = await fetch(jobUrl);
        const dataJob = await res.json();
        return dataJob;
    } catch (error) {
        console.log("error", error)
    }
}


export default fetchData;