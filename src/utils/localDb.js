import * as icon from "../assets/icons/offerIcon.js";
import * as blogImages from "../assets/images/blogImages/blogImages.js";
import * as professional from "../assets/images/aboutImages/index.js";

export const navLinks = [
  {
    title: "Home",
    path: "/",
    links: [],
  },
  {
    title: "About Us",
    path: "/about",
    links: [],
  },
  {
    title: "Services",
    path: "/services",
    links: [
      { name: "Birthday", url: "/service/birthday" },
      { name: "Convocation", url: "/service/convocation" },
      { name: "Christmas", url: "/service/christmas" },
      { name: "New year", url: "/service/new-year" },
      { name: "Wedding", url: "/service/wedding" },
      { name: "Wedding Proposal", url: "/service/wedding-proposal" },
      { name: "Engagement", url: "/service/engagement" },
      { name: "Valentine Day", url: "/service/valentine-day" },
      { name: "Thanksgiving", url: "/service/thanksgiving" },
      { name: "Family Memory", url: "/service/family-memories" },
      { name: "Anniversary", url: "/service/anniversary" },
      { name: "Death Memories", url: "/service/death-memories" },
    ],
  },
  {
    title: "Other Services",
    path: "/other",
    links: [
      { name: "Video Editing", url: "/other/video-editing" },
      { name: "2D Animation", url: "/other/2d-animation" },
      { name: "3D Animation", url: "/other/3d-animation" },
    ],
  },

  {
    title: "Blogs",
    path: "/blogs",
    links: [],
  },
  {
    title: "Contact",
    path: "/contact",
    links: [],
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
  {
    id: 6,
    icon: icon.videoplayer,
    title: "New Year",
    description:
      "Welcome the New Year with joy and inspiration! Our personalized videos are perfect for sharing resolutions, celebrations, and heartfelt wishes with your loved ones as you embark on a fresh start together.",
  },
  {
    id: 7,
    icon: icon.fastforward,
    title: "Valentine’s Day",
    description:
      "Say “I love you” in a way they’ll never forget! Celebrate your love story with a personalized Valentine’s Day video that captures your special moments and conveys your deepest emotions.",
  },
  {
    id: 8,
    icon: icon.fastforward,
    title: "Thanksgiving",
    description:
      "Express your gratitude this Thanksgiving with a personalized video message. Celebrate the season of thankfulness by sharing warm wishes, cherished family moments, and heartfelt memories.",
  },
  {
    id: 9,
    icon: icon.fastforward,
    title: "Family Memory",
    description:
      "Create a timeless memory of your family's most cherished feelings. Our personalized films capture your memories for future generations, whether it's a reunion, a trip, or a simple moment of happiness.",
  },
  {
    id: 10,
    icon: icon.fastforward,
    title: "Anniversary Video",
    description:
      "Celebrate the journey of love with a stunning anniversary video. Relive your cherished memories, milestones, and heartfelt messages to make your special day even more memorable.",
  },
  {
    id: 11,
    icon: icon.fastforward,
    title: "Funeral Memories",
    description:
      "Honor and remember your loved ones with a beautifull tribute video. Share their legacy, celebrate their life, and cherish the memories they’ve left behind.",
  },
  {
    id: 12,
    icon: icon.fastforward,
    title: "Wedding Proposal",
    description: `Create the ultimate “yes” moment with a personalized wedding proposal video. Let us help you plan a magical and unforgettable way to pop the question!`,
  },
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
    description: "Short description of blog 6",
    content: "Full content of blog 6.",
    image: blogImages.blog1,
  },
  {
    id: 2,
    category: `Content Marketing`,
    title: `Creative Ways That Non-ProfitsCan Increase Donations Via Social Media During the Holidays.`,
    author: `Jane Smith`,
    date: `12 February 2024`,
    description: "Short description of blog 6",
    content: "Full content of blog 6.",
    image: blogImages.blog2,
  },
  {
    id: 3,
    category: `SEO Optimization`,
    title: `Top SEO Trends for 2024: What You Need to Know.`,
    author: `Alex Johnson`,
    date: `10 March 2024`,
    description: "Short description of blog 6",
    content: "Full content of blog 6.",
    image: blogImages.blog3,
  },
  {
    id: 4,
    category: `Marketing`,
    title: `Social Media Strategies`,
    author: `Emily Davis`,
    date: `20 March 2024`,
    description: "Effective social media strategies for small businesses.",
    content: "Full content of blog 4.",
    image: blogImages.blog3,
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "USEFUL LINKS",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Blogs", url: "/blogs" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    id: 2,
    title: "ALL SERVICES",
    links: [
      { name: "Birthday", url: "/service/birthday" },
      { name: "Convocation", url: "/service/convocation" },
      { name: "Christmas", url: "/service/christmas" },
      { name: "New year", url: "/service/new-year" },
      { name: "Wedding", url: "/service/wedding" },
      { name: "Wedding Proposal", url: "/service/wedding-proposal" },
      { name: "Engagement", url: "/service/engagement" },
      { name: "Valentine Day", url: "/service/valentine" },
      { name: "Thanksgiving", url: "/service/thanksgiving" },
      { name: "Family Memory", url: "/service/family-memory" },
      { name: "Anniversary", url: "/service/anniversary" },
      { name: "Death Memory", url: "/service/death-memory" },
    ],
  },
  {
    id: 3,
    title: "OTHER SERVICES",
    links: [
      { name: "Video Editing", url: "#" },
      { name: "2D Animation", url: "#" },
      { name: "3D Animation", url: "#" },
    ],
  },
  {
    id: 4,
    title: "SUPPORT",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms and Conditions", url: "#" },
      { name: "Refund Policy", url: "#" },
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
    title: "Birthday",
    subtitle: "Celebrate Birthdays with Unforgettable Video Surprises!",
    textSection: {
      title: "What We Offer",
      text: "Birthdays are special, but finding the perfect gift? That’s a whole different story. Enter Wishings! We create one-of-a-kind personalized birthday videos that are as unique as the birthday star. Whether you’re celebrating your best friend, sibling, or that one coworker who always steals your snacks, We’re here to make it happen! Just pick a template, share your photos and messages, and let us work our magic. No stress, no mess—just pure joy wrapped in a video that’ll have everyone laughing, crying, or maybe even both. Make this year’s birthday one to remember with a gift they’ll never forget!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
      // videos: [
      //   {
      //     url: "/videos/tutorial1.mp4",
      //     title: "How to Design a Website",
      //     description: "Learn the basics of web design.",
      //   },
      //   {
      //     url: "/videos/tutorial2.mp4",
      //     title: "CSS Flexbox Layout",
      //     description: "Master the art of flexible layouts.",
      //   },
      //   {
      //     url: "/videos/tutorial3.mp4",
      //     title: "HTML Basics",
      //     description: "A beginner's guide to HTML.",
      //   },
      //   {
      //     url: "/videos/tutorial4.mp4",
      //     title: "JavaScript for Web Designers",
      //     description: "Learn JavaScript to enhance your web designs.",
      //   },
      // ],
    },
  },
  {
    title: "Convocation",
    subtitle: "Wish Them Success and Joy on Their Big Day!",
    textSection: {
      title: "What We Offer",
      text: "Graduation caps, tassels, and speeches are great, but what about a gift that stands out? At Wishings, we craft personalized convocation videos that capture the pride, joy, and maybe a few happy tears of this milestone moment. Whether it’s for your bestie, your favorite overachieving cousin, or even yourself (why not?), our videos are the ultimate way to say, “You did it!” Just share your photos, messages, and details, and we’ll do the rest—no last-minute panic required. Celebrate the big day with a keepsake that’s as extraordinary as the graduate themselves!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Christmas",
    subtitle: "Spread Holiday Cheer with Heartfelt Wishes!",
    textSection: {
      title: "What We Offer",
      text: "Deck the halls and dazzle your loved ones with something truly special this Christmas! At Wishings, we create heartwarming personalized Christmas videos that sprinkle a little extra magic into the holiday season. Whether it’s a message for family far away, a surprise for your Secret Santa, or a cheerful greeting for your holiday crew, we’ve got the perfect touch of joy. Share your photos, festive messages, and a sprinkle of holiday spirit, and let us handle the rest. Make this Christmas unforgettable with a video that’s as warm and bright as the season itself!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "New Year",
    subtitle: "Send Warm Wishes for a Bright New Year!",
    textSection: {
      title: "What We Offer",
      text: "Start the New Year with a bang—and a personalized video that says it all! At Wishings, we craft vibrant and memorable New Year videos that are perfect for ringing in fresh beginnings. Whether you want to cheer on your friends, thank your loved ones, or send wishes for a fantastic year ahead, we’ve got you covered. Share your favorite moments, heartfelt messages, and a dash of New Year’s sparkle, and we’ll create a video that’s as inspiring as your resolutions. Celebrate the countdown in style with a keepsake to kick off the year right!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Wedding",
    subtitle: "Send Heartfelt Wishes for Their Happily Ever After!",
    textSection: {
      title: "What We Offer",
      text: "Say “I do” to memories that last a lifetime with our personalized wedding videos! At Wishings, we design heartfelt and elegant videos to celebrate the joy of your big day. Whether you’re surprising the newlyweds with a touching tribute or sharing your love story with friends and family, we’ll make it magical. Just send us your cherished photos, sweet messages, and a sprinkle of romance, and we’ll craft a video as beautiful as the love it celebrates. Make every moment unforgettable with a wedding video that’s forever in style!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Wedding Proposal",
    subtitle: "Helping You Wish for the Perfect 'Yes'!",
    textSection: {
      title: "What We Offer",
      text: "Make your proposal as unforgettable as the love you share with a personalized wedding proposal video from Wishings! Whether you want to relive your most cherished moments, express your love in a unique way, or pop the big question with a creative twist, we’ve got your back. Share your favorite photos, heartfelt messages, and a vision for the perfect proposal, and we’ll craft a video that speaks straight to the heart. Let us help you set the stage for a “yes” they’ll never forget!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Engagement",
    subtitle: "Wish Them a Journey of Love and Commitment!",
    textSection: {
      title: "What We Offer",
      text: "Celebrate love with Engagement! We create beautiful, personalized engagement videos to preserve your special moments forever. From the proposal to the journey of your love story, we create videos that capture every heartfelt moment. Our team ensures each video reflects the unique bond you share, making it a timeless treasure. Share your joy with family and friends or keep it as a personal keepsake for years to come. Let's help you celebrate such a beautiful milestone in style that will be remembered for an eternity!",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Valentine Day",
    subtitle: "Wish Them a Lifetime of Love and Happiness!",
    textSection: {
      title: "What We Offer",
      text: "Make this Valentine’s Day as unforgettable as your love story with a personalized video from Wishings! Whether you want to celebrate your most cherished moments, surprise your special someone with a heartfelt message, or express your love in a creative and unique way, we’re here to make it magical. Share your favorite photos, sweet memories, and a vision for the perfect Valentine’s Day surprise, and we’ll craft a video that speaks straight to the heart. Let us help you create a love story moment they’ll treasure forever! ",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Thanksgiving",
    subtitle: "Wish Them a Day Filled with Gratitude and Blessings!",
    textSection: {
      title: "What We Offer",
      text: "Spread the joy of gratitude with our Thanksgiving videos! Personalized creations to celebrate the season and share heartfelt thanks. Whether you're sending wishes to family or expressing appreciation to friends, our videos capture the warmth of the holiday. Let us help you convey your love and gratitude in a special way that lasts forever. In all your custom messages and added creative touches, a video on Thanksgiving will be well remembered this season. Give thanks for togetherness, joy, and thankfulness in this meaningful expression of celebration",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Family memories",
    subtitle: "Wish Them Cherished Memories That Last a Lifetime!",
    textSection: {
      title: "What We Offer",
      text: "Spread the joy of gratitude with our family memorie videos! Personalized creations to celebrate the season and share heartfelt thanks. Whether you're sending wishes to family or expressing appreciation to friends, our videos capture the warmth of the holiday. Let us help you convey your love and gratitude in a special way that lasts forever. In all your custom messages and added creative touches, a video on family memorie will be well remembered this season. Give thanks for togetherness, joy, and thankfulness in this meaningful expression of celebration.",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Anniversary",
    subtitle: "Wish Them Many More Years of Happiness and Togetherness!",
    textSection: {
      title: "What We Offer",
      text: "Personalized anniversary video with your love. Beautiful, pre-made videos are created to remind you of this special day. It might be the first or your golden anniversary, but our videos can always capture the essence of your love story, packed with meaningful moments. Share those memories, laughter, and milestones through a video that is uniquely yours. We make sure that the video we deliver to you shows the depth of your bond, a heartfelt keepsake to be treasured for life. Share your love with family and friends or keep it as a personal reminder of your enduring love.",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
  {
    title: "Death Memories",
    subtitle: "Honor Their Memory with Love and Respect.",
    textSection: {
      title: "What We Offer",
      text: "A loving tribute video to honor a dear one. We create a personalized video that celebrates the life, legacy, and special moments shared. It could be a memorial, anniversary, or just a way to keep their memory alive, and we craft a story that captures their spirit. Our team makes sure each video reflects the love and joy they brought into your life, making it a meaningful keepsake to treasure forever. Share it with family and friends or hold it close as a reminder of their lasting impact on your heart. Let us help you preserve their memory in a way that speaks from the heart.",
      image: professional.person,
    },
    videoSection: {
      title: "Explore Top Videos",
     
    },
  },
];
