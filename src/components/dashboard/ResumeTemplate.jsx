/* eslint-disable react/prop-types */
import html2pdf from "html2pdf.js";

const ResumeTemplate = ({ data }) => {
  const handlePdf = async () => {
    const element = document.getElementById("element");

    // Hide the button during PDF generation
    const downloadButton = document.getElementById("download-button");
    downloadButton.style.display = "none";

    const opt = {
      margin: 1,
      filename: "myResume.pdf",
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { format: "a4", orientation: "portrait" },
    };

    // Generate the PDF and then show the button again
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        // Show the button again after PDF is generated
        downloadButton.style.display = "block";
      });
  };

  return (
    <div
      id="element"
      className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-4 text-center">{data.name}</h1>
      <p className="mb-2 text-center">
        {data.email} | {data.phone}
      </p>
      <p className="mb-4 text-center">{data.address}</p>
      <p className="mb-4 text-center">{data.gender}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
      <p className="mb-4">{data.description}</p>

      {data.education.title &&
        data.education.degree &&
        data.education.institute &&
        data.education.year && (
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
            <p className="font-bold">{data.education.title}</p>
            <p>
              {data.education.degree} - {data.education.institute},{" "}
              {data.education.year}
            </p>
          </div>
        )}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <p>
        {data.skill.title} - {data.skill.experience}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Social Links</h2>
      <p>Facebook: {data.socialLinks.facebook}</p>
      <p>Twitter: {data.socialLinks.twitter}</p>
      <p>LinkedIn: {data.socialLinks.linkedin}</p>
      <p>GitHub: {data.socialLinks.github}</p>

      {/* Download Button */}
      <button
        id="download-button"
        onClick={handlePdf}
        className="mt-6 px-4 py-2 bg-blue text-white font-bold rounded shadow hover:bg-darkBlue transition duration-300"
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeTemplate;
