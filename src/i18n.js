import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("language") || "en",
    resources: {
      en: {
        translation: {
          home_hero_title: "The <1>Easiest</1> Way To Get <br/> Your New Job.",
          home_hero_subTitile:
            "Every month, 3 million job seekers use our platform, submitting over 140,000 applications daily to explore new opportunities and connect with potential employers.",
          browsbyCategory: "Browse by category",
          browsbyCategory_subTitle:
            "Find the job that’s perfect for you. About 800+ new jobs every day",
          todayNewJobs: "Today's New Jobs",
          searchJobBtn: "Search Jobs",
          moreJobs: "More Jobs",
          weAre: "WE ARE",
          hiring: "HIRING",
          hiringBannerDescrip: "Let’s Work Together & Explore Opportunities",
          applyBtn: "Apply Now",
          growthSection_hero: "Million's Of Jobs",
          growthSection_hero2: "Choose the Perfect Match for You",
          learnMore: "Learn More",
          topRecruiters: "Top Recruiters",
          topRecruitersDescrip:
            "Look for your next career move, freelance opportunities, or internships.",
          moreRecruiters: "More Recruiters",
          newsandBlogs: "News and Blogs",
          newsandBlogsDescrip: "Get the latest news, updates, and tips",
          moreBlogs: "More Blogs",
          newsLetter: "New Things Will Always Update Regularly",
          subscribe: "Subscribe",
          review: "REVIEW",
          reviewleft1: "Leave us a feedback!",
          reviewleft2:
            "Please provide your valuable feedback and something something ...",
          reviewRightCard: "Your opinion matters!",
          reviewRightCard_1: "How was your experience?",
          reviwBtn: "leave Feedback",
          jobsByLocation: "Jobs By Location",
          jobsByLocationDescrip:
            "Find your favourite jobs and get the benefits of yourself",
          jobBannerTitle: "{{count}} Job Available Now",
          jobBannerDescrip:
            "Find the perfect job that fits your skills and aspirations. Browsethrough our latest job openings and take the next step in your career.",
          recruitersBannerTitle: "{{count}} Recruiters Available Now",
          recruitersBannerDescrip:
            "Browse top-rated recruiters across various locations, tailored to meet your project needs.",
            candidatesBannerTitle:"{{count}} candidates Available Now",
          candidatesBannerDescrip:
            "Browse top-rated professionals across various skills and locations,tailored to meet your project needs.",
          aboutUsTitle: "About Our Company",
          aboutUsSubTitle:
            "Discover more about our company and learn what sets us apart. Explore our mission, values, and the dedicated team that works tirelessly to deliver exceptional results and drive innovation in our industry.",
          companyAbout: "What we can do?",
          companyAboutDescription:
            "Our community is built on the foundation of trust, respect, and shared success. We pride ourselves on cultivating a network ofprofessionals who are not only skilled but also committed touplifting one another. By joining us, you’re becoming part of a supportive ecosystem where collaboration and mentorship are keyvalues. We offer a platform where job seekers can discover careerpaths tailored to their aspirations, and employers can find the perfect fit for their teams. Through continuous engagement, workshops, and networking events, we empower our members to grow, learn, and thrive. Together, we’re not just shaping careers — we’rebuilding a stronger, more connected workforce for the future.",
          readMore: "Read More",
          meetOurTeamTitile: "Meet Our Team",
          meetOurTeamDescrip:
            "Explore our company and get to know the talented team that drives our success. Each member is dedicated to innovation, excellence, and achieving outstanding results in every project we undertake.",
          testiminialTitle: "Our Happy Customer",
          testiminialDescrip:
            "When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.",
          getInTouch: "Get in Touch",
          getInTouchDescrip:
            "Let’s Build Connections and Uncover Opportunities Together for a Brighter Future!",
          sendMessages: "Send Messages",
          enterYourName: "Name",
          company: "company(optional)",
          yourEmail: "Email",
          phoneNumber: "Phone Number",
          tellAboutYourself: "Tell us about yourself",
          search: "Search",
          termsAndPolicy: "Terms and Policy",
          contactUs: "Contact Us",
          contactUsSubtitle: "Let us know how we can help.",
          fixedNavbarPlaceholder: "Type job title or keyword",
          allLocation: "All Location",
          allCategory: "All Category",
          home:"Home",
          jobs:"Jobs",
          recruiters:"Recruiters",
          candidates:"Candidates",
          about:"About",
          pricing:"Pricing",
          blogs:"Blogs",
          contact:"Contact",
          number:"328-435-6523",
          
          
        










        },
      },
      bn: {
        translation: {
          home_hero_title: "আপনার নতুন চাকরি পাওয়ার <1>সবচেয়ে সহজ</1> উপায়।",
          home_hero_subTitile:
            "প্রতিমাসে, ৩০ লক্ষ চাকরি প্রত্যাশী আমাদের প্ল্যাটফর্ম ব্যবহার করেন, প্রতিদিন ১৪০,০০০ এরও বেশি আবেদন জমা দিয়ে নতুন সুযোগগুলো আবিষ্কার করতে এবং সম্ভাব্য নিয়োগকর্তাদের সাথে সংযুক্ত হতে।",
          browsbyCategory: "শ্রেণীভিত্তিক চাকরি খুঁজুন",
          browsbyCategory_subTitle:
            "সঠিক চাকরি খুঁজে নিন। প্রতিদিন ৮০০+ নতুন চাকরি আপনার জন্য অপেক্ষা করছে!",
          todayNewJobs: "আজকের নতুন নিয়োগ",
          searchJobBtn: "চাকরি খুঁজুন",
          moreJobs: "আরও চাকরি",
          weAre: "আমদের প্রতিষ্ঠানে",
          hiring: "নিয়োগ চলছে",
          hiringBannerDescrip:
            "চলুন, একসাথে কাজ করে নতুন সম্ভাবনাগুলো অন্বেষণ করি।",
          applyBtn: "আবেদন করুন",
          growthSection_hero: "চাকরির সমুদ্রে",
          growthSection_hero2: "আপনার জন্য সঠিক চাকরিটি বেছে নিন",
          learnMore: "আরও জানুন",
          topRecruiters: "সেরা নিয়োগদাতাদের তালিকা",
          topRecruitersDescrip:
            "আপনার ক্যারিয়ারের পরবর্তী পদক্ষেপ, ফ্রিল্যান্স কাজ, অথবা ইন্টার্নশিপ সন্ধান করুন",
          moreRecruiters: "আরও নিয়োগদাতা",
          newsandBlogs: "নিউজ এবং ব্লগ",
          newsandBlogsDescrip: "সর্বশেষ তথ্য, আপডেট এবং টিপস নিন",
          moreBlogs: "আরও ব্লগ",
          newsLetter: "নতুন বিষয়গুলো নিয়মিত <br/> আপডেট করা হয়",
          subscribe: "সাবস্ক্রাইব করুন",
          review: "আলোচনা",
          reviewleft1: "আমাদেরকে মতামত দিন!",
          reviewleft2:
            "আপনার মূল্যবান মতামত প্রদান করুন এবং আমাদের সেবা উন্নত করতে কিছু পরামর্শ দিন...",
          reviewRightCard: "আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ!",
          reviewRightCard_1: "আপনার অভিজ্ঞতা কেমন?",
          reviwBtn: "প্রতিক্রিয়া জানান",
          jobsByLocation: "স্থানভিত্তিক চাকরি",
          jobsByLocationDescrip:
            "আপনার প্রিয় চাকরি খুঁজুন এবং নিজেকে উন্নত করেন",
          jobBannerTitle: "{{count}} টি চাকরির সুযোগ রয়েছে",
          jobBannerDescrip:
            "আপনার দক্ষতা ও লক্ষ্য অনুযায়ী সেরা চাকরিটি খুঁজুন। আমাদের নতুন চাকরির বিজ্ঞাপনগুলো দেখুন এবং আপনার ক্যারিয়ারে আরও এক ধাপ এগিয়ে যান।",
          recruitersBannerTitle: "{{count}} টি নিয়োগদাতা রয়েছেন",
          recruitersBannerDescrip:
            "আপনার প্রকল্পের প্রয়োজন অনুসারে বিভিন্ন লোকেশনের সেরা নিয়োগকারীদের খুঁজে বের করুন।",
          candidatesBannerTitle: "{{count}} জন চাকরি প্রার্থী রয়েছেন",
          candidatesBannerDescrip:
            "আপনার প্রকল্পের চাহিদা অনুযায়ী বিভিন্ন স্থানের ও দক্ষতার শীর্ষ পেশাজীবীদের ব্রাউজ করুন।",
          aboutUsTitle: "আমাদের সম্পর্কে জানুন",
          aboutUsSubTitle:
            "আমাদের প্রতিষ্ঠান সম্পর্কে আরও জানুন এবং আমাদের অনন্যতা সম্পর্কে জানুন। আমাদের লক্ষ্য, মূল্যবোধ এবং নিরলসভাবে কাজ করা দলটির সঙ্গে পরিচিত হন, যারা সর্বোচ্চ মানের ফলাফল এবং উদ্ভাবন আনতে কাজ করছে।",
          companyAbout: "আমরা কীভাবে সহায়তা করতে পারি?",
          companyAboutDescription:
            "আমাদের কমিউনিটি গড়ে উঠেছে বিশ্বাস, সম্মান, এবং যৌথ সফলতার ভিত্তির উপর। আমরা গর্বিত যে আমাদের নেটওয়ার্কে শুধু দক্ষ পেশাজীবীরাই নয়, একে অপরকে সহায়তা করতে প্রতিশ্রুতিবদ্ধ সদস্যরাও আছেন। আমাদের সাথে যোগ দিয়ে আপনি এমন একটি সহায়ক পরিবেশের অংশ হয়ে উঠছেন যেখানে সহযোগিতা ও মেন্টরশিপ প্রধান মূল্যবোধ। আমরা একটি এমন প্ল্যাটফর্ম প্রদান করি যেখানে চাকরি প্রার্থীরা তাদের আকাঙ্ক্ষা অনুযায়ী ক্যারিয়ার পথ আবিষ্কার করতে পারেন, এবং নিয়োগকর্তারা তাদের দলের জন্য উপযুক্ত প্রার্থী খুঁজে পান। ধারাবাহিক সম্পৃক্ততা, ওয়ার্কশপ এবং নেটওয়ার্কিং ইভেন্টের মাধ্যমে, আমরা আমাদের সদস্যদের বিকাশ, শেখা এবং সাফল্যের পথে এগিয়ে যেতে সক্ষম করে তুলি। একসাথে, আমরা শুধু ক্যারিয়ার গঠন করছি না—আমরা ভবিষ্যতের জন্য আরও শক্তিশালী ও সংযুক্ত কর্মশক্তি তৈরি করছি।",
          readMore: "আরও পড়ুন",
          meetOurTeamTitile: "আমাদের দলের সাথে পরিচিত হন",
          meetOurTeamDescrip:
            "আমাদের কোম্পানি সম্পর্কে জানুন এবং সেই দক্ষ দলের সাথে পরিচিত হন যা আমাদের সফলতার চাবিকাঠি। প্রত্যেক সদস্য উদ্ভাবন, উৎকর্ষতা এবং প্রতিটি প্রকল্পে অসাধারণ ফলাফল অর্জনের জন্য আত্মনিয়োগ করেছে।",
          testiminialTitle: "আমাদের প্রিয় গ্রাহক",
          testiminialDescrip:
            "আমাদের মূল্যবান গ্রাহকদের আস্থা ও নির্ভরতার উদযাপন, যারা আমাদের প্রতিদিন নতুন উদ্যমে কাজ করার অনুপ্রেরণা দেয়।",
          getInTouch: "আমাদের সাথে যোগাযোগ করুন",
          getInTouchDescrip:
            "চলুন সম্পর্ক তৈরি করি এবং একসঙ্গে একটি সুন্দর ভবিষ্যতের জন্য সুযোগগুলো খুঁজে বের করি!",
          sendMessages: "বার্তা জমা দিন",
          enterYourName: "আপনার নাম",
          company: "প্রতিষ্ঠানের নাম",
          yourEmail: "ইমেইল",
          phoneNumber: "ফোন নম্বর",
          tellAboutYourself: "আপনার সম্পর্কে কিছু বলুন",
          search: "খুঁজুন",
          termsAndPolicy: "শর্তাবলী এবং নীতি",
          contactUs: "যোগাযোগ করুন",
          contactUsSubtitle: "আমরা কিভাবে সাহায্য করতে পারি তা আমাদের জানান।",
          fixedNavbarPlaceholder: "চাকরির শিরোনাম বা কীওয়ার্ড লিখুন",
          allLocation: "সকল স্থান সমুহ",
          allCategory: "সকল শ্রেণী",
          home:"হোম",
          jobs:"চাকরি খুঁজুন",
          recruiters:"নিয়োগকর্তা",
          candidates:"চাকরিপ্রার্থী",
          about:"আমাদের সম্পর্কে",
          pricing:"মূল্য",
          blogs:"ব্লগ",
          contact:"যোগাযোগ",
          number:"৩২৮-৪৩৫-৬৫২৩",
          
        },
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
