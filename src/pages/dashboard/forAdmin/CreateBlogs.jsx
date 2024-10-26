import { useState } from "react";
import DefaultInput from "../shared/DefaultInput";
import TextareaField from "../shared/TextareaField";
import { FiSend } from "react-icons/fi";
import axiosInstance from "../../../utils/axios";
import toast from "react-hot-toast";

const CreateBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    author: "",
    date_published: "",
    content: [
      {
        heading: "",
        details: "",
        subsections: [
          { subheading: "", details: "" }
        ]
      }
    ],
    tags: "",
    category: "",
    url: ""
  });

  const handleChange = (e, sectionIndex = null, subIndex = null) => {
    const { name, value } = e.target;

    if (sectionIndex !== null && subIndex === null) {
      // Update specific section in content
      setFormData((prev) => {
        const newContent = [...prev.content];
        newContent[sectionIndex][name] = value;
        return { ...prev, content: newContent };
      });
    } else if (sectionIndex !== null && subIndex !== null) {
      // Update specific subsection in a section
      setFormData((prev) => {
        const newContent = [...prev.content];
        newContent[sectionIndex].subsections[subIndex][name] = value;
        return { ...prev, content: newContent };
      });
    } else {
      // General field update
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      content: [...prev.content, { heading: "", details: "", subsections: [{ subheading: "", details: "" }] }]
    }));
  };

  const addSubsection = (sectionIndex) => {
    setFormData((prev) => {
      const newContent = [...prev.content];
      newContent[sectionIndex].subsections.push({ subheading: "", details: "" });
      return { ...prev, content: newContent };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tagsArray = formData.tags.split(',').map(tag => tag.trim());
    const blogData = { ...formData, tags: tagsArray }; // Convert tags to array format

    axiosInstance.post("/blogs", blogData).then((res) => {
      if (res.data.insertId) {
        toast.success("Blog successfully posted!");
      }
    });
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <DefaultInput
          label="Blog Title"
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextareaField
          label="Short Description"
          name="short_description"
          placeholder="Write a brief description..."
          value={formData.short_description}
          onChange={handleChange}
        />
        <DefaultInput
          label="Author"
          type="text"
          name="author"
          placeholder="Author's name"
          value={formData.author}
          onChange={handleChange}
        />
        <DefaultInput
          label="Published Date"
          type="date"
          name="date_published"
          value={formData.date_published}
          onChange={handleChange}
        />
        {formData.content.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            <DefaultInput
              label="Section Heading"
              type="text"
              name="heading"
              placeholder="Enter section heading"
              value={section.heading}
              onChange={(e) => handleChange(e, sectionIndex)}
            />
            <TextareaField
              label="Section Details"
              name="details"
              placeholder="Enter section details..."
              value={section.details}
              onChange={(e) => handleChange(e, sectionIndex)}
            />
            {section.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="pl-4 space-y-2">
                <DefaultInput
                  label="Subheading"
                  type="text"
                  name="subheading"
                  placeholder="Enter subheading"
                  value={sub.subheading}
                  onChange={(e) => handleChange(e, sectionIndex, subIndex)}
                />
                <TextareaField
                  label="Subsection Details"
                  name="details"
                  placeholder="Enter subsection details..."
                  value={sub.details}
                  onChange={(e) => handleChange(e, sectionIndex, subIndex)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addSubsection(sectionIndex)}
              className="btn-add-subsection"
            >
              + Add Subsection
            </button>
          </div>
        ))}
        <button type="button" onClick={addSection} className="btn-add-section">
          + Add Section
        </button>
        <DefaultInput
          label="Tags (comma-separated)"
          type="text"
          name="tags"
          placeholder="e.g., Interview Tips, Job Search"
          value={formData.tags}
          onChange={handleChange}
        />
        <DefaultInput
          label="Category"
          type="text"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
        />
        <DefaultInput
          label="Image URL"
          type="url"
          name="url"
          placeholder="Enter image URL"
          value={formData.url}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn bg-blue text-white px-6 py-3 flex items-center"
        >
          <FiSend className="mr-2" /> Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogs;
