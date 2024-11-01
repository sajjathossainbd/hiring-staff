/* eslint-disable react/prop-types */
import { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import PrimaryBtnBlue from "../ui/PrimaryBtnBlue";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ResumeTemplate = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const drawWrappedText = (page, text, x, y, options) => {
    const { size, maxWidth } = options;
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    words.forEach((word) => {
      const testLine = line + word + " ";
      const width = testLine.length * size * 0.6;

      if (width > maxWidth && line) {
        page.drawText(line, { x, y: currentY, size, ...options });
        line = word + " ";
        currentY -= 15;
      } else {
        line = testLine;
      }
    });

    if (line) {
      page.drawText(line, { x, y: currentY, size, ...options });
    }
    return currentY - 20;
  };

  const handlePdf = async () => {
    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();

      let pageHeight = 800;

      const page = pdfDoc.addPage([700, pageHeight]);

      const titleFontSize = 24;
      const sectionTitleFontSize = 16;
      const regularFontSize = 12;
      const headerColor = rgb(0, 0.5, 0.7);

      // Destructure data
      const {
        name,
        email,
        phone,
        address,
        gender,
        description,
        education,
        skills,
        socialLinks,
      } = data;

      let yOffset = 730;

      // Add title
      page.drawText(name || "Name", {
        x: 50,
        y: yOffset,
        size: titleFontSize,
        color: headerColor,
      });
      yOffset -= 30;

      // Contact information
      drawWrappedText(
        page,
        `${email || "Email"} | ${phone || "Phone"}`,
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );
      yOffset -= 20;
      drawWrappedText(page, address || "Address", 50, yOffset, {
        size: regularFontSize,
        maxWidth: 700,
      });
      yOffset -= 20;
      drawWrappedText(page, gender || "Gender", 50, yOffset, {
        size: regularFontSize,
        maxWidth: 700,
      });
      yOffset -= 20;

      // Add description
      page.drawText("Description:", {
        x: 50,
        y: yOffset,
        size: sectionTitleFontSize,
        color: headerColor,
      });
      yOffset -= 20;
      yOffset = drawWrappedText(
        page,
        description || "Description goes here",
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );
      yOffset -= 10;

      // Add education section
      page.drawText("Education:", {
        x: 50,
        y: yOffset,
        size: sectionTitleFontSize,
        color: headerColor,
      });
      yOffset -= 20;
      if (education && education.length > 0) {
        education.forEach((edu) => {
          yOffset = drawWrappedText(
            page,
            `${edu.title || "Title"} - ${edu.degree || "Degree"}, ${
              edu.institute || "Institute"
            }, ${edu.year || "Year"}`,
            50,
            yOffset,
            { size: regularFontSize, maxWidth: 700 }
          );
          yOffset -= 20;
        });
      } else {
        yOffset = drawWrappedText(
          page,
          "Education information not available",
          50,
          yOffset,
          { size: regularFontSize, maxWidth: 700 }
        );
        yOffset -= 20;
      }

      // Add skills section
      page.drawText("Skills:", {
        x: 50,
        y: yOffset,
        size: sectionTitleFontSize,
        color: headerColor,
      });
      yOffset -= 20;
      if (skills && skills.length > 0) {
        skills.forEach((skill) => {
          yOffset = drawWrappedText(
            page,
            `${skill.title || "Skill"} - ${skill.experience || "Experience"}`,
            50,
            yOffset,
            { size: regularFontSize, maxWidth: 700 }
          );
          yOffset -= 20;
        });
      } else {
        yOffset = drawWrappedText(page, "Skills not available", 50, yOffset, {
          size: regularFontSize,
          maxWidth: 700,
        });
        yOffset -= 20;
      }

      // Add social links section
      page.drawText("Social Links:", {
        x: 50,
        y: yOffset,
        size: sectionTitleFontSize,
        color: headerColor,
      });
      yOffset -= 20;
      yOffset = drawWrappedText(
        page,
        `Facebook: ${socialLinks?.facebook || "N/A"}`,
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );
      yOffset -= 20;
      yOffset = drawWrappedText(
        page,
        `Twitter: ${socialLinks?.twitter || "N/A"}`,
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );
      yOffset -= 20;
      yOffset = drawWrappedText(
        page,
        `LinkedIn: ${socialLinks?.linkedin || "N/A"}`,
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );
      yOffset -= 20;
      yOffset = drawWrappedText(
        page,
        `GitHub: ${socialLinks?.github || "N/A"}`,
        50,
        yOffset,
        { size: regularFontSize, maxWidth: 700 }
      );

      // page height
      if (yOffset < 20) {
        pageHeight += 100;
        pdfDoc.addPage([700, pageHeight]);
      }

      // Save the PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "myResume.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto bg-white dark:bg-darkBlue dark:border dark:border-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">{data?.name || "Name"}</h1>
      <p className="text-sm sm:text-base">{data?.email || "Email"}</p>
      <p className="text-sm sm:text-base">{data?.phone || "Phone"}</p>
      <p className="text-sm sm:text-base">{data?.address || "Address"}</p>
      <p className="text-sm sm:text-base">{data?.gender || "Gender"}</p>

      {/* Description Section */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Description</h2>
      <p className="text-sm sm:text-base">
        {data?.description || "Description goes here"}
      </p>

      {/* Education Section */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Education</h2>
      {data?.education?.length > 0 ? (
        data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold">{edu.title || "Title"}</p>
            <p className="text-sm sm:text-base">
              {edu.degree || "Degree"} - {edu.institute || "Institute"},{" "}
              {edu.year || "Year"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-sm sm:text-base">
          Education information not available
        </p>
      )}

      {/* Skills Section */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Skills</h2>
      {data?.skills?.length > 0 ? (
        <ul className="list-disc ml-5 dark:text-white">
          {data.skills.map((skill, index) => (
            <li key={index} className="text-sm sm:text-base">
              {skill.title || "Skill"} - {skill.experience || "Experience"}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm sm:text-base">Skills not available</p>
      )}

      {/* Social Links Section */}
      <h2 className="text-2xl font-bold mt-6 mb-2">Social Links</h2>
      <p className="text-sm sm:text-base">
        Facebook: {data?.socialLinks?.facebook || "N/A"}
      </p>
      <p className="text-sm sm:text-base">
        Twitter: {data?.socialLinks?.twitter || "N/A"}
      </p>
      <p className="text-sm sm:text-base">
        LinkedIn: {data?.socialLinks?.linkedin || "N/A"}
      </p>
      <p className="text-sm sm:text-base">
        GitHub: {data?.socialLinks?.github || "N/A"}
      </p>

      {/* Download Button */}
      <button
        onClick={handlePdf}
        className={`mt-6 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        <PrimaryBtnBlue
          title={loading ? "Generating PDF..." : "Download Resume"}
          icon={<IoCloudDownloadOutline />}
        />
      </button>
    </div>
  );
};

export default ResumeTemplate;
