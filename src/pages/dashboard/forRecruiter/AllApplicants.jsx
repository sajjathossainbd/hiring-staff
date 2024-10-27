import React from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../utils/axios';
import { useQuery } from '@tanstack/react-query';

const ViewAllApplications = () => {
  const { jobId } = useParams();
 
  const { data: applications, isLoading, error } = useQuery({
    queryKey: ['applications', jobId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/applications/job/${jobId}`); // Adjust endpoint as needed
      return res.data;
    },
    enabled: !!jobId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching applications.</div>;

  return (
    <div>
      <h1>Applications for Job ID: {jobId}</h1>
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            <p><strong>Name:</strong> {application.applicantName}</p>
            <p><strong>Email:</strong> {application.applicantEmail}</p>
            <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
            <p><strong>Resume:</strong> {application.resume}</p>
            <p><strong>Availability:</strong> {application.availability}</p>
            <p><strong>Status:</strong> {application.shortlist}</p>
            <p><strong>Applied Date:</strong> {new Date(application.appliedDate).toLocaleDateString()}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAllApplications;
