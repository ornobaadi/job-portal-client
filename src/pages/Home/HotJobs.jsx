import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center">Jobs of the day</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard> )
                }
            </div>
        </div>
    );
};

export default HotJobs;