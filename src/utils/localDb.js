import * as icon from "../assets/icons/offerIcon.js";
import * as blogImages from "../assets/images/blogImages/blogImages.js";
import * as professional from "../assets/images/aboutImages/index.js";

export const navLinks = [
  {
    title: "Home",
    path: "/",
    links: [
      { name: "AI Text to Speech", url: "#" },
      { name: "AI Auto Subtitle", url: "#" },
      { name: "AI Text to Video", url: "#" },
      { name: "Screen Recorder", url: "#" },
      { name: "All Tools ➜", url: "#" },
    ],
  },
  {
    title: "Pages",
    path: "/pages",
    links: [
      { name: "Our Story", url: "#" },
      { name: "Team", url: "#" },
      { name: "Careers", url: "#" },
    ],
  },
  {
    title: "Services",
    path: "/service/web-design-services",
    links: [
      { name: "Consulting", url: "#" },
      { name: "Support", url: "#" },
      { name: "Custom Solutions", url: "#" },
    ],
  },
  {
    title: "Blogs",
    path: "/blogs",
    links: [
      { name: "Support", url: "#" },
      { name: "Sales", url: "#" },
      { name: "Partnerships", url: "#" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    links: [
      { name: "Support", url: "#" },
      { name: "Sales", url: "#" },
      { name: "Partnerships", url: "#" },
    ],
  },
];

export const offers = [
  {
    id: 1,
    icon: icon.fastforward,
    title: "Birthday Videos",
    description:
      "Send a one-of-a-kind birthday wish with a personalized video. Celebrate their special day in a way they’ll never forget!",
  },
  {
    id: 2,
    icon: icon.home,
    title: "Wedding Videos",
    description:
      "Create a personalized wedding video that captures the magic of their big day. A beautiful keepsake to celebrate love and commitment!",
  },
  {
    id: 3,
    icon: icon.loudspeaker,
    title: "Convocation Videos",
    description:
      "Congratulate graduates with a unique convocation video that honors their achievement in style.",
  },
  {
    id: 4,
    icon: icon.people,
    title: "Engagement Videos",
    description:
      "Announce or celebrate engagements with a beautifully crafted video, the perfect way to announce and cherish your love story.",
  },
  {
    id: 5,
    icon: icon.filmtape,
    title: "Christmas Videos",
    description:
      "Spread holiday joy with a festive Christmas video, perfect for sending warm wishes to friends and family.",
  },
  // {
  //   id: 6,
  //   icon: icon.videoplayer,
  //   title: "Tutorial Video",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 7,
  //   icon: icon.fastforward,
  //   title: "Offer 7",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 8,
  //   icon: icon.fastforward,
  //   title: "Offer 8",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 9,
  //   icon: icon.fastforward,
  //   title: "Offer 9",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 10,
  //   icon: icon.fastforward,
  //   title: "Offer 10",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 11,
  //   icon: icon.fastforward,
  //   title: "Offer 11",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 12,
  //   icon: icon.fastforward,
  //   title: "Offer 12",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 13,
  //   icon: icon.fastforward,
  //   title: "Offer 13",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
  // {
  //   id: 14,
  //   icon: icon.fastforward,
  //   title: "Offer 14",
  //   description:
  //     "Identify relevant and high-impact keywords for your industry.",
  // },
];

export const templates = {
  Birthday: [
    { id: 1, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 5, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  Convocation: [
    { id: 1, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 2, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 4, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
  ],
  Christmas: [
    { id: 1, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 5, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  Wedding: [
    { id: 1, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 2, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 4, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, title: "abc", url: "https://www.w3schools.com/html/movie.mp4" },
  ],
  Engagement: [
    { id: 1, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 5, title: "abc", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],

  // "Category 6": [
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  // ],
  // "Category 7": [
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  //   "https://www.w3schools.com/html/mov_bbb.mp4",
  // ],
  // "Category 8": [
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  //   "https://www.w3schools.com/html/movie.mp4",
  // ],

  // A d d v i d e o s f o r o t h e r c a t e g o r i e s. . .
};

export const faqs = [
  {
    question: `What types of videos does Wishings create?`,
    answer: `Wishings specializes in creating personalized videos for special occasions such as Christmas, Halloween, Weddings, Birthdays, Convocations and more. Our videos are designed to capture the essence of each event and are tailored to your specific requirements.`,
  },
  {
    question: `Can I personalize my video?`,
    answer: `Yes, all our videos are fully customizable! You can personalize the video by according to your details like names, photos, special messages, and other elements that reflect your vision.`,
  },
  {
    question: `Do I need to create the video myself, or will Wishings handle everything for me?`,
    answer: `You won’t need to create the video yourself! Simply choose your favorite template and provide us with the details, such as photos, videos, and messages. From there, we’ll take care of everything and create a beautiful, personalized video just the way you want it.`,
  },
  {
    question: `How do I place an order?`,
    answer: `Placing an order is simple. Just visit our website, select your occasion, fill out the customization form with your details, and our team will handle the rest. We’ll work closely with you to create the perfect video.`,
  },
  {
    question: `How long does it take to receive my video?`,
    answer: `The delivery time varies depending on the complexity of your request. Generally, you can expect your video within 3-5 business days. We also offer expedited delivery options for those last-minute needs.`,
  },
  {
    question: `What formats will the video be available in?`,
    answer: `Our videos are delivered in high-quality formats that are compatible with most devices, including MP4. If you need a specific format, please let us know when placing your order`,
  },
];

export const blogPosts = [
  {
    id: 1,
    category: `Social Media Marketing`,
    title: `New Study: Instagram Reels Outperform TikTok & Facebook Videos.`,
    author: `John Doe`,
    date: `25 January 2024`,
    backgroundImage: blogImages.blog1,
  },
  {
    id: 2,
    category: `Content Marketing`,
    title: `Creative Ways That Non-ProfitsCan Increase Donations Via Social Media During the Holidays.`,
    author: `Jane Smith`,
    date: `12 February 2024`,
    backgroundImage: blogImages.blog2,
  },
  {
    id: 3,
    category: `SEO Optimization`,
    title: `Top SEO Trends for 2024: What You Need to Know.`,
    author: `Alex Johnson`,
    date: `10 March 2024`,
    backgroundImage: blogImages.blog3,
  },
];

export const footerLinks = [
  {
    id: 2,
    title: "TOOLS",
    links: [
      { name: "AI Text to Speech", url: "#" },
      { name: "AI Auto Subtitle", url: "#" },
      { name: "AI Text to Video", url: "#" },
      { name: "Screen Recorder", url: "#" },
      { name: "All Tools ➜", url: "#" },
    ],
  },
  {
    id: 3,
    title: "SUPPORT",
    links: [
      { name: "Help Center", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Tutorials", url: "#" },
      { name: "Video Tutorials", url: "#" },
    ],
  },
  {
    id: 4,
    title: "RESOURCES",
    links: [
      { name: "Blog", url: "#" },
      { name: "Case Studies", url: "#" },
      { name: "Compare", url: "#" },
      { name: "Category", url: "#" },
      { name: "Templates", url: "#" },
      { name: "Stock Video", url: "#" },
      { name: "Features", url: "#" },
    ],
  },
  {
    id: 1,
    title: "USE FLEXCLIP FOR",
    links: [
      { name: "Promo Video", url: "#" },
      { name: "Marketing Video", url: "#" },
      { name: "News Video", url: "#" },
      { name: "Trailer Video", url: "#" },
      { name: "Intro Video", url: "#" },
      { name: "Wedding Video", url: "#" },
      { name: "Lyric Video", url: "#" },
      { name: "Birthday Video", url: "#" },
      { name: "Invitation Video", url: "#" },
      { name: "Slideshow Maker", url: "#" },
      { name: "Video Editor", url: "#" },
      { name: "Movie Maker", url: "#" },
      { name: "View More ➜", url: "#" },
    ],
  },
];

export const footerAddress = [
  {
    id: 1,
    heading: "Global Reach",
    icon: "FaLocationDot",
    description:
      "Our solutions connect you with users across the globe, ensuring a seamless experience everywhere.",
  },
  {
    id: 2,
    heading: "Innovative Ideas",
    icon: "FaLocationDot",
    description:
      "We bring innovative and creative ideas to life, solving complex challenges with simplicity.",
  },
  {
    id: 3,
    heading: "Fast Deployment",
    icon: "FaLocationDot",
    description:
      "Experience quick and efficient deployment with our streamlined processes and expert support.",
  },
];

export const teamCardData = [
  {
    image: professional.person,
    heading: "Card Title 1",
    paragraph: "This is a description for card 1.",
  },
  {
    image: professional.person,
    heading: "Card Title 2",
    paragraph: "This is a description for card 2.",
  },
  {
    image: professional.person,
    heading: "Card Title 3",
    paragraph: "This is a description for card 3.",
  },
  {
    image: professional.person,
    heading: "Card Title 4",
    paragraph: "This is a description for card 4.",
  },
];

export const statsCardData = [
  {
    heading: "Revenue",
    paragraph: "This is our revenue for the year.",
    endValue: 250000,
    sign: "$",
  },
  {
    heading: "Growth",
    paragraph: "This is our revenue for the year.",
    endValue: 35,
    sign: "%",
  },
  {
    heading: "Users",
    paragraph: "This is our revenue for the year.",
    endValue: 12000,
    sign: "+",
  },
  {
    heading: "Sales",
    paragraph: "This is our revenue for the year.",
    endValue: 850,
    sign: "+",
  },
];

// Mock Blog Data
export const blogs = [
  {
    imageUrl:
      "https://images.pexels.com/photos/18111149/pexels-photo-18111149/free-photo-of-yachts-moored-in-harbor-to-jetty.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "How to Learn React",
    date: "December 5, 2024",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/18111149/pexels-photo-18111149/free-photo-of-yachts-moored-in-harbor-to-jetty.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Understanding JavaScript Closures",
    date: "November 30, 2024",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/18111149/pexels-photo-18111149/free-photo-of-yachts-moored-in-harbor-to-jetty.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "CSS Grid: A Complete Guide",
    date: "November 25, 2024",
  },
];

// Service Page Mock Data
export const servicesData = [
  {
    title: "Web Design Services",
    subtitle: "We create stunning websites.",
    textSection: {
      title: "What We Offer",
      text: "Our team creates beautiful, responsive websites tailored to your business needs.",
      image: "/images/web-design.jpg",
    },
    videoSection: {
      title: "Video Tutorials",
      videos: [
        {
          url: "/videos/tutorial1.mp4",
          title: "How to Design a Website",
          description: "Learn the basics of web design.",
        },
        {
          url: "/videos/tutorial2.mp4",
          title: "CSS Flexbox Layout",
          description: "Master the art of flexible layouts.",
        },
        {
          url: "/videos/tutorial3.mp4",
          title: "HTML Basics",
          description: "A beginner's guide to HTML.",
        },
        {
          url: "/videos/tutorial4.mp4",
          title: "JavaScript for Web Designers",
          description: "Learn JavaScript to enhance your web designs.",
        },
      ],
    },
  },
  {
    title: "SEO Services",
    subtitle: "Boost your website's visibility and ranking on search engines.",
    textSection: {
      title: "What We Offer",
      text: "Our team provides comprehensive SEO services to improve your website's ranking on Google and other search engines, increasing traffic and enhancing online presence.",
      image: "/images/seo.jpg",
    },
    videoSection: {
      title: "SEO Tutorials",
      videos: [
        {
          url: "/videos/seo-tutorial1.mp4",
          title: "Introduction to SEO",
          description:
            "Learn the basics of Search Engine Optimization and why it's essential for your website.",
        },
        {
          url: "/videos/seo-tutorial2.mp4",
          title: "Keyword Research for SEO",
          description:
            "Discover how to choose the right keywords for your SEO strategy.",
        },
        {
          url: "/videos/seo-tutorial3.mp4",
          title: "On-Page SEO Techniques",
          description:
            "Optimize your website content for better search engine rankings.",
        },
        {
          url: "/videos/seo-tutorial4.mp4",
          title: "Link Building Strategies",
          description:
            "Learn how to build high-quality backlinks to improve your SEO.",
        },
      ],
    },
  },
];
