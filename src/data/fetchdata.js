
const fetchData = {}


fetchData.getJobs = async (page, q) => {
    const totalJob = 45;
        if( q ) {
            const searchUrl = `http://localhost:4000/jobs?q=${q}&_page=${page}&_limit=9`;
        try {
           const response = await fetch(`${searchUrl}`);
           const pagesTotal = Math.ceil(totalJob/10);
           const dataSearch = await response.json();
           return {
            jobs: dataSearch,
            q,
            pagesTotal
            }
        } catch (error) {
           console.log("error", error)
        }
    } else {

     const url = `http://localhost:4000/jobs?&_page=${page}&_limit=9`;
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
}
fetchData.getSingleJob = async (id) => {
    const jobUrl = `http://localhost:4000/jobs/${id}`
    try {
        const res = await fetch(jobUrl);
        const dataJob = await res.json();
        return {
            singleJob: dataJob};
    } catch (error) {
        console.log("error", error)
    }
}


export default fetchData;