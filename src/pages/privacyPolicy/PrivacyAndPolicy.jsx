import { ScrollRestoration } from "react-router-dom";

const PrivacyAndPolicy = () => {
  const policies = [
    {
      section: "1. Introduction",
      description:
        "At Reacriter, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy details how we collect, use, and protect your information when you apply for jobs through our recruitment platform.",
    },
    {
      section: "2. Information We Collect",
      description:
        "We collect various types of information to facilitate the hiring process, including:",
      content: [
        "1. Personal Information: Your name, email address, phone number, and other contact details.",
        "2. Resume Details: Information included in your resume, such as your work history, education, skills, and certifications.",
        "3. Job Application Information: Details related to the positions you apply for, including cover letters and references.",
        "4. Usage Information: Data about how you use our platform, including your IP address, browser type, and application history.",
        "5. Communication Records: Any correspondence with us regarding your job applications and inquiries.",
      ],
    },
    {
      section: "3. How We Use Your Information",
      description:
        "We use the information we collect for the following purposes:",
      content: [
        "1. Job Matching: To match you with job opportunities that fit your profile.",
        "2. Communication: To contact you regarding job applications, interviews, and recruitment updates.",
        "3. Application Processing: To review and evaluate your qualifications for open positions.",
        "4. Customer Support: To respond to your inquiries and provide assistance during the hiring process.",
        "5. Improvement: To enhance our services and user experience based on your feedback.",
      ],
    },
    {
      section: "4. Information Sharing and Disclosure",
      description:
        "We do not sell or rent your personal information to third parties. We may share your information in the following situations:",
      content: [
        "1. With Employers: We may share your information with potential employers for job opportunities you have applied for.",
        "2. With Service Providers: We may share your information with trusted service providers who assist us in managing our recruitment processes.",
        "3. For Legal Reasons: We may disclose your information if required by law or in response to legal processes.",
        "4. To Protect Rights and Safety: We may share information to protect the rights, property, or safety of Reacriter, our users, or others.",
      ],
    },
    {
      section: "5. Data Security",
      description:
        "We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      section: "6. Data Retention",
      description:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When your information is no longer needed, we will securely delete or anonymize it.",
    },
    {
      section: "7. Your Rights",
      description:
        "You have certain rights regarding your personal information, including:",
      content: [
        "1. Access: You can request access to the personal information we hold about you.",
        "2. Correction: You can request corrections to any inaccurate or incomplete information.",
        "3. Deletion: You can request the deletion of your personal information, subject to legal and contractual restrictions.",
        "4. Opt-Out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in those communications.",
      ],
    },
    {
      section: "8. Third-Party Links",
      description:
        "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any personal information.",
    },
    {
      section: "9. Changes to this Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and indicating the date of the latest revision.",
    },
    {
      section: "10. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy, please contact us:",
        "Phone: +001 123 4567",
        "Email: support@reacriter.com",
        "Address: 1234 Job St. City, State, Zip Code",
        "Thank you for choosing Reacriter for your job search!",
      ],
    },
  ];

  return (
    <div className="xl:pt-16 lg:pt-12 md:pt-10 pt-7 max-w-4xl mx-auto px-5">
      <div className="text-center space-y-2">
        <h2>
          Privacy Policy
        </h2>
        <p>Last Updated: 06 May, 2024</p>
      </div>

      <div className="pt-16">
        {policies.map((pol, index) => (
          <div key={index} className="pb-10">
            {/* Section heading */}
            <h2>
              {pol.section}
            </h2>

            {/* Section description */}
            <p className="pb-2 mt-4">{pol.description}</p>

            {/* List of content items, if present */}
            {pol?.content && (
              <ul className="flex flex-col gap-2">
                {pol.content.map((item, index) => {
                  const [beforeColon, afterColon] = item.split(":");
                  return (
                    <li key={index}>
                      <span>
                        {beforeColon}:
                      </span>{" "}
                      <span>{afterColon}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default PrivacyAndPolicy;
