import { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";


const FeatureJobs = () => {
    const [jobs,setJobs]=useState([]);

    useEffect( ()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[])
    return (
        <div>
          <div> <h2 className="text-7xl text-center"> Feature Jobs:{jobs.length}</h2> 
           <p className="text-center">Explore Thousands of Job Oppurtunities with all Information you need.Its Your Future</p>
           </div>

           <div>
          {
            jobs.map(job=><JobDetails key={job.id} job={job} ></JobDetails>)
          }
           </div>
        </div>
    );
};

export default FeatureJobs;