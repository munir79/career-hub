import { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";


const FeatureJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,SetDataLength]=useState(4);

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

           <div className="grid grid-cols-2 gap-6 m-4">
          {
            jobs.slice(0,dataLength).map(job=><JobDetails key={job.id} job={job} ></JobDetails>)
          }
           </div>
           <div className={dataLength===jobs.length ? 'hidden' :" " } >
           <button  onClick={()=>SetDataLength(jobs.length)} className='px-5 py-2  btn btn-primary  font-extrabold border rounded border-black m-2 mr-4'> Show All Jobs </button>
           </div>
        </div>
    );
};

export default FeatureJobs;