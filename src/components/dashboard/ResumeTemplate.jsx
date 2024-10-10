/* eslint-disable react/prop-types */
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeTemplate = ({ data }) => {


    const downloadResume = () => {
        const input = document.getElementById('resume');
        html2canvas(input, {
            backgroundColor: '#ffffff', // Standard background color
        }).then((canvas) => {
            const pdf = new jsPDF();
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190;
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('resume.pdf');
        }).catch(error => {
            console.error("Error capturing resume: ", error);
        });
    };

    return (
        <div id="resume" className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">{data.name}</h1>
            <p className="mb-2 text-center">{data.email} | {data.phone}</p>
            <p className="mb-4 text-center">{data.address}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
            <p className="mb-4">{data.description}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
            <p className="font-bold">{data.education.title}</p>
            <p>{data.education.degree} - {data.education.institute}, {data.education.year}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
            <p>{data.skill.title} - {data.skill.experience}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Social Links</h2>
            <p>Facebook: {data.socialLinks.facebook}</p>
            <p>Twitter: {data.socialLinks.twitter}</p>
            <p>LinkedIn: {data.socialLinks.linkedin}</p>
            <p>GitHub: {data.socialLinks.github}</p>

            <button
                onClick={downloadResume}
                className="mt-6 px-4 py-2 bg-blue text-white font-bold rounded shadow hover:bg-darkBlue transition duration-300"
            >
                Download Resume
            </button>
        </div>
    );
};

export default ResumeTemplate;
