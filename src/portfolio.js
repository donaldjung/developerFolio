/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Donald Jung",
  title: "Hello, I'm Donald Jung.",
  subTitle: emoji(
    "I'm a Computer Science Co-op student from Toronto creating useful things in technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YG4r5jDHzt7fkaaAJOZ4hbJNhEJFhFr6/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/donaldjung",
  linkedin: "https://www.linkedin.com/in/donald-jung/",
  email: "donald.jung@torontomu.ca",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Am Working On",
  subTitle: "Specializing in Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, and Fullstack Web and Mobile Development.",
  skills: [
    emoji(
      "⚡ Develop and optimize algorithms for Data Science and Machine Learning applications"
    ),
    emoji(
      "⚡ Build and deploy scalable, AI-powered systems using the latest Artificial Intelligence techniques"
    ),
    emoji(
      "⚡ Design and manage robust cloud infrastructure solutions on platforms like AWS, Azure, and Google Cloud"
    ),
    emoji(
      "⚡ Develop full-stack web and mobile applications, ensuring responsive and dynamic user experiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    //<FontAwesomeIcon icon="fa-brands fa-java" />
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "microsoft azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Toronto Metropolitan University - Toronto",
      logo: require("./assets/images/TMU.png"),
      subHeader: "Bachelor of Science in Computer Science Co-op",
      duration: "September 2023 - Present",
      desc: "Current Cumulative GPA: 4.0 (Dean's List)",
      descBullets: [
        "Recipient of the Michel Julien Award (2023)",
        "Completed courses in Python, Java, Software Engineering, Calculus, Discrete Math, Physics, Economics, ...",
      ]
    },
    {
      schoolName: "Meta",
      logo: require("./assets/images/facebookLogo.png"),
      subHeader: "Meta Developer Certifications",
      duration: "2023 - 2024",
      desc: "Certifications in Full-Stack Web Development",
      descBullets: [
        "Programming with Javascript",
        "Introduction to Front-End and Back-End Development",
        "React Basics and advanced concepts",
        "HTML and CSS in depth",
      ]
    },
    {
      schoolName: "IBM",
      logo: require("./assets/images/ibm.png"),
      subHeader: "IBM Certifications and Courses",
      duration: "2023 - 2024",
      desc: "Certifications in Cloud Computing",
      descBullets: [
        "Cloud Computing Fundamentals",
        "IBM Z Xplore: Introduction to Mainframe",
        "React Basics and advanced concepts",
        "HTML and CSS in depth",
      ]
    },
    {
      schoolName: "Google",
      logo: require("./assets/images/google.png"),
      subHeader: "Google Certifications and Courses",
      duration: "2023 - 2024",
      desc: "Certifications in Full-Stack Web Development",
      descBullets: [
        "Introduction to Generative AI",
      ]
    },
    {
      schoolName: "Toronto Metropolitan University -  Toronto",
      logo: require("./assets/images/TMU.png"),
      subHeader: "Bachelor of Applied Science in Food and Nutrition",
      duration: "September 2020 - April 2021",
      desc: "Cumulative GPA: 4.0 (Dean's List)",
      descBullets: ["Accredited Undergraduate Dietetic Internship Program"]
    },
    {
      schoolName: "Wilfrid Laurier University - Waterloo",
      logo: require("./assets/images/laurier.png"),
      subHeader: "Bachelor of Science in Computer Science Co-op",
      duration: "September 2013 - April 2014",
      desc: "Took courses about Software Engineering, Python, Linear Algebra, Calculus, Physics, ...",
      descBullets: ["Awarded Entrance Scholarship & Bursary"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Owner",
      company: "Wholesale to Retail Sales",
      companylogo: require("./assets/images/tech_store.png"),
      date: "June 2018 – Present",
      desc: "Wholesale procurement of consumer tech goods, sold to the retail market at a very attractive discount.",
      descBullets: [
        "In partnership with Best-Buy",
        "Brands included Apple, Dyson, Bowflex, Sony, LG and more."
      ]
    },
    {
      role: "Personal Trainer",
      company: "Freelance",
      companylogo: require("./assets/images/fitness.png"),
      date: "Sept 2015 – June 2018",
      desc: "Created custom training and nutrition plans for clients in the GTA area to optimize fitness and health goals.",
      descBullets: [
        "Macronutrient based nutrition plans",
        "Progressive overload based training plans"
      ]
    },
    {
      role: "Tech - Specialist",
      company: "Staples Canada",
      companylogo: require("./assets/images/staples_logo.png"),
      date: "Sept 2013 – June 2014",
      desc: "Created and implemented custom customer solutions to solve problems in the technology sector of Staples Canada.",
      descBullets: [
        "Computer security: Virus and Malware removal",
        "Installing and managing software for new computers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Start-Up Certified",
      subtitle:
        "DMZ Startup incubator certification",
      image: require("./assets/images/dmz.png"),
      footerLink: [
        {
          name: "DMZ @ TMU",
          url: "https://dmz.torontomu.ca/"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss an opportunity or just want to say hi? My Inbox is open for all.",
  email_address: "donald.jung@torontomu.com"
};

// Twitter Section

const twitterDetails = {
  userName: "donaldjung0", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
