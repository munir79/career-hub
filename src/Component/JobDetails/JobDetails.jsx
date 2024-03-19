import PropTypes from 'prop-types'; 

import { MdLocationOn } from "react-icons/md";

const JobDetails = ({job}) => {
   
    const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description}=job;
    console.log(job);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border rounded border-black ">
  <figure>
    <img className='m-4' src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title} </h2>
    <p>{company_name} </p>
    <div>
        <button className='px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-black m-2 mr-4'>{remote_or_onsite} </button>
        <button className='px-5 py-2 font-extrabold border rounded border-black m-2 mr-4'>{job_type} </button>
    </div>
    <div className='flex m-3'>
        <h2 className=' text-2xl'><MdLocationOn></MdLocationOn>  </h2>
        <h2 className='text-2xl'>{location}</h2>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">View Details </button>
    </div>
  </div>
</div>
    );
};

JobDetails.propTypes={
    job:PropTypes.object
}

export default JobDetails;