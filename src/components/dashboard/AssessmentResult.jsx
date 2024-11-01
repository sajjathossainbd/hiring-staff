import React from "react";
import { FaClipboardCheck, FaRegClipboard } from "react-icons/fa"; 

function AssessmentResult({ job, isClose }) {
  return (
    <div className="p-6 ">
      <h3 className=" mb-4 text-blue">
        Assessment Results for: {job.jobTitle}
      </h3>

      {/* Display Assessments */}
      <div className="mb-6">
        <h4 className=" mb-2 flex items-center">
          <FaClipboardCheck className="text-lightBlue mr-2" />
          Assessments:
        </h4>
        {job.assessments && job.assessments.length > 0 ? (
          job.assessments.map((assessment, index) => (
            <div
              key={index}
              className="p-4 border border-gray rounded-md  mb-4 shadow-sm transition-transform transform hover:scale-105"
            >
              <p className=" ">
                <strong>Details:</strong> {assessment.details}
              </p>
              <p className="text-gray">
                <strong>Due Date:</strong>{" "}
                {new Date(assessment.dueDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray">No assessments available.</p>
        )}
      </div>

      {/* Display Assignments */}
      <div>
        <h3 className="font-semibold text-xl mb-2 flex items-center">
          <FaRegClipboard className="text-blue mr-2" />
          Assignments:
        </h3>
        {job.assignments && job.assignments.length > 0 ? (
          job.assignments.map((assignment, index) => (
            <div
              key={index}
              className="p-4 border border-gray  rounded-md  mb-4 shadow-sm transition-transform transform hover:scale-105"
            >
              <p className="text-16 ">
                <strong>Assignment Details:</strong>{" "}
                {assignment.assignmentDetails}
              </p>
              <p className="text-gray ">
                <strong>Submission Date:</strong>{" "}
                {new Date(assignment.submissionDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray ">No assignments submitted.</p>
        )}
      </div>
    </div>
  );
}

export default AssessmentResult;
