import React, { useEffect, useState } from "react";
import fetchData from "../data/fetchdata";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";


function JobDetail() {
    const [singleJob, setSingleJob] = useState();
    let {id} = useParams();

    
    useEffect(() => {
        const fetchSingleJob = async () => {
            const data = await fetchData.getSingleJob(id);
            setSingleJob(data.jobs);
        };
        fetchSingleJob();
    }, [id]);
    

    function RequireAuth({ children }) {
        let auth = useAuth();
        if (!auth.user) {
            return <Navigate to="/login" state={{ from : location}} replace />

        }
        return children;
    }

    return (
        <div>
            <RequireAuth callback={() => {}}>
                <h1>{singleJob.title}</h1>
            </RequireAuth>
        </div>
    )
}

export default JobDetail;