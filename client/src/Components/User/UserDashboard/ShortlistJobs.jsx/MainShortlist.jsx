import React from 'react' 
import { useUserStore } from '../../../../Store/UserStore';
import { useQuery } from '@tanstack/react-query';
import { getUserAppliedJobs } from '../UserApi';
import ShortListJobs from './ShortListJobs';

function MainShortlist() {
    const { user } = useUserStore();
    // Api Calling for getting the data of user applied jobs
    const { data, isLoading, error } = useQuery({
        queryKey: ["job", user._id],
        queryFn: () => getUserAppliedJobs(user._id),
    });

    if (isLoading) {
        return <h1>Loading....</h1>;
    }
    if (error) {
        return <h2>Error</h2>;
    }

    let userAppliedJobData = data?.data?.filter((data) => {
        return data.status === 'shortlisted';
    }) || [];

    return (
        <div className="flex justify-center items-center flex-col">
            {userAppliedJobData.map((job) => (
                <div key={job._id} className="my-6 w-full max-w-3xl">
                    <ShortListJobs jobData={job} />
                </div>
            ))}
        </div>
    );
}

export default MainShortlist;
