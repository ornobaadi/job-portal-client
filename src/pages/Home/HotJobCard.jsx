/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5">
            <div className="flex gap-2">
                <figure>
                    <img className="w-12"
                        src={company_logo}
                    />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-2 items-center"> <HiLocationMarker />
                        {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((skill, index) => <p key={index} 
                        className="badge badge-outline rounded-md text-center px-2">{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">

                    <p className="flex items-center">Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>

                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;