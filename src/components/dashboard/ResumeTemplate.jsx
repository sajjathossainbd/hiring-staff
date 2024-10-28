/* eslint-disable react/prop-types */
import html2pdf from "html2pdf.js";
import { useState } from "react";

const ResumeTemplate = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const handlePdf = async () => {
    const element = document.getElementById("element");
    const downloadButton = document.getElementById("download-button");

    downloadButton.style.display = "none";
    setLoading(true);

    const opt = {
      margin: 1,
      filename: "myResume.pdf",
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { format: "a4", orientation: "portrait" },
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      downloadButton.style.display = "block";
      setLoading(false);
    }
  };

  return (
    <div id="element" className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">{data?.name || "Name"}</h1>
      <p className="mb-2 text-center">{data?.email || "Email"} | {data?.phone || "Phone"}</p>
      <p className="mb-4 text-center">{data?.address || "Address"}</p>
      <p className="mb-4 text-center">{data?.gender || "Gender"}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
      <p className="mb-4">{data?.description || "Description goes here"}</p>

      {/* Education Section */}
      {data?.education?.title && data?.education?.degree && data?.education?.institute && data?.education?.year ? (
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
          <p className="font-bold">{data.education.title}</p>
          <p>{data.education.degree} - {data.education.institute}, {data.education.year}</p>
        </div>
      ) : (
        <p className="text-center">Education information not available</p>
      )}

      {/* Skills Section */}
      {data?.skills?.length > 0 ? (
        <>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill.title} - {skill.experience}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center">Skills not available</p>
      )}

      {/* Social Links Section */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Social Links</h2>
      <p>Facebook: {data?.socialLinks?.facebook || "N/A"}</p>
      <p>Twitter: {data?.socialLinks?.twitter || "N/A"}</p>
      <p>LinkedIn: {data?.socialLinks?.linkedin || "N/A"}</p>
      <p>GitHub: {data?.socialLinks?.github || "N/A"}</p>

      {/* Download Button */}
      <button
        id="download-button"
        onClick={handlePdf}
        className="mt-6 px-4 py-2 bg-blue text-white font-bold rounded shadow hover:bg-darkBlue transition duration-300"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Download Resume'}
      </button>
    </div>
  );
};

export default ResumeTemplate;
