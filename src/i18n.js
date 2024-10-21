import i18n from "i18next"; 
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "bn", 
    resources: {
      en: {
        translation: {
            home_hero_title: "The <1>Easiest</1> Way To Get <br/> Your New Job.",
            home_hero_subTitile: "Every month, 3 million job seekers use our platform, submitting over 140,000 applications daily to explore new opportunities and connect with potential employers.",
            browsbyCategory:"Browse by category",
            browsbyCategory_subTitle: "Find the job that’s perfect for you. About 800+ new jobs every day",
            todayNewJobs:"Today New Jobs",
            searchJobBtn:"Search Jobs",
            moreJobs:"More Jobs",
            weAre: "WE ARE",
            hiring:"HIRING",
            hiringBannerDescrip:"Let’s Work Together & Explore Opportunities",
            applyBtn:"Apply Now",
            growthSection_hero:"Million's Of Jobs",
            growthSection_hero2:"Choose the Perfect Match for You",
            learnMore:"Learn More",
            topRecruiters: "Top Recruiters",
            topRecruitersDecrip: "Top Recruiters",
            moreRecruiters:"More Recruiters",
            newsandBlogs:"News and Blogs",
            newsandBlogsDescrip:"Get the latest news, updates, and tips",
            moreBlogs:"More Blogs",
            newsLetter:"New Things Will Always Update Regularly",
            subscribe:"Subscribe",
            review: "REVIEW",
            reviewleft1:"Leave us a feedback!",
            reviewleft2:"Please provide your valuable feedback and something something ...",
            reviewRightCard:"Your opinion matters!",
            reviewRightCard_1:"How was your experience?",
            reviwBtn:"leave Feedback",
            jobsByLocation:"Jobs By Location",
            jobsByLocationDescrip:"Find your favourite jobs and get the benefits of yourself",


        },
      },
      bn: {
        translation: {
            home_hero_title: "আপনার নতুন চাকরি পাওয়ার <1>সবচেয়ে সহজ</1> উপায়।",
            home_hero_subTitile: "প্রতিমাসে, ৩০ লক্ষ চাকরি প্রত্যাশী আমাদের প্ল্যাটফর্ম ব্যবহার করেন, প্রতিদিন ১৪০,০০০ এরও বেশি আবেদন জমা দিয়ে নতুন সুযোগগুলো আবিষ্কার করতে এবং সম্ভাব্য নিয়োগকর্তাদের সাথে সংযুক্ত হতে।",
            browsbyCategory:"শ্রেণীভিত্তিক চাকরি খুঁজুন",
            browsbyCategory_subTitle:"সঠিক চাকরি খুঁজে নিন। প্রতিদিন ৮০০+ নতুন চাকরি আপনার জন্য অপেক্ষা করছে!",
            todayNewJobs: "আজকের নতুন নিয়োগ",
            searchJobBtn:"চাকরি খুঁজুন",
            moreJobs:"আরও চাকরি",
            weAre: "আমদের প্রতিষ্ঠানে",
            hiring:"নিয়োগ চলছে",
            hiringBannerDescrip: "চলুন, একসাথে কাজ করে নতুন সম্ভাবনাগুলো অন্বেষণ করি।",
            applyBtn:"আবেদন করুন",
            growthSection_hero:"চাকরির সমুদ্রে",
            growthSection_hero2:"আপনার জন্য সঠিক চাকরিটি বেছে নিন",
            learnMore:"আরও জানুন",
            topRecruiters: "সেরা নিয়োগদাতাদের তালিকা",
            topRecruitersDescrip: "আপনার ক্যারিয়ারের পরবর্তী পদক্ষেপ, ফ্রিল্যান্স কাজ, অথবা ইন্টার্নশিপ সন্ধান করুন",
            moreRecruiters:"আরও নিয়োগদাতা",
            newsandBlogs:"নিউজ এবং ব্লগ",
            newsandBlogsDescrip:"সর্বশেষ তথ্য, আপডেট এবং টিপস নিন",
            moreBlogs:"আরও ব্লগ",
            newsLetter:"নতুন বিষয়গুলো নিয়মিত <br/> আপডেট করা হয়",
            subscribe:"সাবস্ক্রাইব করুন",
            review: "আলোচনা",
            reviewleft1:"আমাদেরকে মতামত দিন!",
            reviewleft2:"আপনার মূল্যবান মতামত প্রদান করুন এবং আমাদের সেবা উন্নত করতে কিছু পরামর্শ দিন...",
            reviewRightCard:"আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ!",
            reviewRightCard_1:"আপনার অভিজ্ঞতা কেমন?",
            reviwBtn:"প্রতিক্রিয়া জানান",
            jobsByLocation:"স্থানভিত্তিক চাকরি",
            jobsByLocationDescrip:"আপনার প্রিয় চাকরি খুঁজুন এবং নিজেকে উন্নত করেন",

            

            


        }
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
