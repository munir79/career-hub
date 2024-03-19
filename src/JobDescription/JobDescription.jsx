import { useLoaderData, useParams } from "react-router-dom";


const JobDescription = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const job=jobs.find(job=>job.id==id);
    console.log(id);
    return (
        <div>
            <h2> Job of :{job.job_title} </h2>
            <div className="grid  gap-4 md:grid-cols-4 m-4 ">
            <div className="border md:col-span-3 p-2">
                
                <p><span>Company:</span> {job.company_name} </p>
                <p><span className="font-extrabold">job_description:</span> {job.job_description} </p>
                <p><span className="font-extrabold">job_responsibility:</span> {job.job_responsibility} </p>
                <p><span className="font-extrabold">educational_requirements:</span> {job.educational_requirements} </p>
            </div>
             <div className="border">
                <h2>Side Things</h2>
                <button className="btn btn-primary w-full">Apply Here</button>
             </div>

            </div> 
             
          

            </div>
       
    );
};

export default JobDescription;