import PropTypes from 'prop-types'; 

const JobDetails = ({job}) => {
   
    const { logo,email,job_title,salary}=job;
    console.log(job);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

JobDetails.propTypes={
    job:PropTypes.object
}

export default JobDetails;