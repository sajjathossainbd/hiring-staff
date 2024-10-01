# Hiring Staff

**Live site:**

- [Hiring Staff](https://hiring-staff.vercel.app/)

**Server site Repo:**

- [Hiring Staff - Server Site Repo](https://github.com/sajjathossainbd/hiring-staff-server)

## Credential:
Admin Email and password
1. Email: admin@gmail.com
2. Password: aaaaa1
   
Recruiter Email and password
1. Email: recruiter@gmail.com
2. Password: aaaaa1
   
Candidates Email and password
1. Email: candidate@gmail.com
2. Password: aaaaa1

## Features and Characteristics:

1. **Granular Role-Based Access Control:**
- _Description:_ This feature allows for precise control over what different users (e.g., admins, recruiters, candidates) can view, access, and perform on the platform.
- _Benefit:_ It enhances security by ensuring that only authorized users can access certain features, and provides a tailored experience for different user roles.
- _Example:_ An admin can manage all job postings, recruiters can only manage the jobs they post, and candidates can view and apply to jobs.
2. **Advanced Search & Filtering:**
- _Description:_ This feature enables users to search for jobs, recruiters, or candidates using various filters like location, job type, salary, and experience level.
- _Benefit:_ Improves user experience by helping users quickly find relevant jobs or candidates.
- _Example:_ A candidate can search for “Remote Frontend Developer jobs with 5+ years of experience,” or recruiters can filter candidates by specific skills and qualifications.
3. **User-Generated Ratings and Reviews**
- _Description:_ Allows users to provide ratings and reviews for recruiters or companies after interviews or job experiences.
- _Benefit:_ Builds trust in the platform and provides valuable feedback to improve services.
- _Example:_ Candidates can rate their interview experience with a company, helping future candidates make informed decisions.
4. **Integrated Resume Builder:**
- _Description:_ Provides candidates with a tool to create or edit their resumes directly on the platform.
- _Benefit:_ Simplifies the process for candidates to apply for jobs with professional-looking resumes without needing third-party software.
- _Example:_ A candidate can choose from templates, enter their details, and instantly generate a professional resume ready for submission.
5. **Automated Email Notifications:**
- _Description:_ Automatically sends notifications to users for important events like job application status updates, new job postings, or interview schedules.
- _Benefit:_ Keeps users informed in real-time without requiring them to manually check the platform.
- _Example:_ A candidate receives an email notification when their application status changes, or when a recruiter views their resume.
6. **Real-Time Job Application Status Tracking: ** 
- _Description:_ Allows candidates to monitor the status of their job applications in real time.
- _Benefit:_ Provides transparency to candidates, reducing the uncertainty around job applications.
- _Example:_ Candidates can see if their application is “Reviewed,” “In Progress,” or “Rejected” in real-time.
7. **Secure Payment Gateway for Premium Services:**
- _Description:_ Integrates a secure payment system for premium features such as highlighted job postings or advanced analytics.
- _Benefit:_ Ensures users can make payments securely for additional services, increasing revenue opportunities.
- _Example:_ Recruiters may pay for premium job postings that appear at the top of search results, or candidates can purchase resume review services.
8. **Detailed Analytics and Reporting:**
- _Description:_ Provides users (especially recruiters and admins) with in-depth insights and reports on various activities, like job post performance or candidate engagement.
- _Benefit:_ Helps in decision-making by giving users access to data and trends, improving the overall efficiency of the platform.
- _Example:_ Recruiters can track how many candidates viewed, applied, or were selected for their job postings.
9. **Real-Time Messaging System:**
- _Description:_ A chat or messaging feature that allows candidates and recruiters to communicate instantly.
- _Benefit:_ Speeds up the recruitment process by enabling immediate communication without switching to external platforms like email.
- _Example:_ A recruiter can instantly message a candidate for an interview invitation or further information about their application.
10. **Multi-Language Support:**
- _Description:_ Offers the platform in multiple languages to cater to users from different regions.
- _Benefit:_ Expands the platform’s reach to a global audience by overcoming language barriers.
- _Example:_ A candidate from Spain can use the platform in Spanish, while another from France uses it in French, ensuring a more user-friendly experience.


## How to run:
Please follow the instructions to run this repository on your machine:

1. Clone this repository -
    ```sh
    git clone https://github.com/sajjathossainbd/hiring-staff
    ```
2. Go to the cloned project directory
    ```sh
    cd hiring-staff
    ```
3. Install project Dependencies
   
   If you use Yarn:
    ```sh
    yarn add
    ```
   Or if you use npm:
    ```sh
    npm install
    ```
5. Run project local machine
   
    If you use Yarn:
    ```sh
    yarn dev
    ```
   Or if you use npm:
    ```sh
    npm start
    ```

## Additional Information
- **Environment Variables:**
  - Create a `.env.local` file in the root of your client project and add the following variables:
    ```plaintext
    VITE_API_KEY=Your firebase config file
    VITE_AUTH_DOMAIN=Your firebase config file
    VITE_PROJECT_ID=Your firebase config file
    VITE_STORAGE_BUCKET=Your firebase config file
    VITE_MESSAGING_SENDER_ID=Your firebase config file
    VITE_APP_ID=Your firebase config file
    VITE_API_BASE_URL=Your firebase config file
    VITE_IMAGEBB_API_KEY=your imageBB Api key
    ```


## Resources and Dependencies:
- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [React Router Dom](https://reactrouter.com/en/main) - Declarative routing for React applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Daisy UI](https://daisyui.com/) - Component library for Tailwind CSS
- [Firebase](https://console.firebase.google.com/) - Firebase is a set of backend cloud computing services
- [React Icon](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons.
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async) - Dynamic header title change
- [Sweetalert2](etalert2.github.io) - Beautiful, responsive, customizable replacement for JavaScript's popup boxes
- [Tanstack Query](https://github.com/TanStack/query) - Powerful asynchronous state management, fetching, caching, and updating data in React.
- [Axios](https://www.axios.com/) - Promise-based HTTP client for the browser and Node.js.
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [Swiper](https://swiperjs.com/) - The Most Modern Mobile Touch Slider


## Contributing

If you want to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).
