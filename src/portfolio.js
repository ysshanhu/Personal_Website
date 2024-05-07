/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yingshan Hu",
  title: "Hi all, I'm Shan",
  subTitle: emoji(
    "🚀 A dynamic Full Stack Software Developer, I build scalable Web and Mobile applications using a versatile toolkit including Java, Python, React, React Native, SpringBoot, Django REST, and more." +
    "🌟 My approach combines a strong technical foundation with a passion for innovative problem-solving, aiming to deliver impactful tech advancements."
),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ysshanhu",
  linkedin: "https://www.linkedin.com/in/yingshanhu/",
  gmail: "yingshanhu23@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@yingshanhu",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate full-stack developer eager to delve into every tech stack, blending innovation with expertise to craft exceptional digital experiences.",
  skills: [
    emoji(
      "⚡ Design and develop APIs for seamless integration and data exchange in web and mobile applications, focusing on security and performance optimization."
    ),
    emoji(
      "⚡ Spearhead full-stack development projects to create dynamic, responsive web and mobile applications, enhancing user experience with React Native and Express.js."
    ),
    emoji("⚡ Implement robust CI/CD pipelines, automating testing and deployment processes to boost development efficiency and ensure consistent, high-quality software delivery."
    ),
    emoji(
      "⚡ Engage in cutting-edge AI research to develop algorithms that analyze audio inputs for mental health assessments, applying machine learning to diagnose and understand depression."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Django REST",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database" // Symbolic representation of databases
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git" // Direct representation of Git
    },
    // Similar approach for Postman, Kubernetes, and Jenkins with chosen symbolic icons
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-ship"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-mail-bulk"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brandeis University",
      logo: require("./assets/images/brandeisLogo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "New York University",
      logo: require("./assets/images/NYULogo.jpeg"),
      subHeader: "Master of Arts in Bilingual Education",
      duration: "September 2018 - May 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "The University of Nottingham",
      logo: require("./assets/images/NottinghamLogo.jpeg"),
      subHeader: "Bachlor of Arts in Applied Linguistics and International Business",
      duration: "September 2014 - July 2018",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "55%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud Services and DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Baofeng Knitting",
      companylogo: require("./assets/images/Baofeng.png"),
      date: "May 2022 – Aug 2022",
      desc: "Engineered a system to streamline order management and optimize data handling processes in Knitting Industry.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Engineer",
      company: "Glamour City",
      companylogo: require("./assets/images/glamour.webp"),
      date: "May 2023 – Aug 2023",
      desc: "Contributed to a comprehensive e-commerce application for both iOS and Android platforms by utilizing React-Native and Xcode, integrated JWT for robust user authentication, enhancing application security."
    },
    {
      role: "Backend Developer",
      company: "SkyIT Services",
      companylogo: require("./assets/images/skyit.png"),
      date: "Sep 2023 – Dec 2023",
      desc: "Developed HTTP APIs for retrieving file history logs, ensuring data persistence, as part of a collaborative Node.js backend system; managing secure data operations with Firebase and documenting API functionalities on Postman."
    },
    {
      role: "ML/AI Software Developer",
      company: "Resilience, Inc",
      companylogo: require("./assets/images/resilience.jpeg"),
      date: "Jan 2024 – Present",
      desc: "Collabratively building the AIMEE mobile app, which utilized Speech emotion recognition to recognize a user’s emotions through streamed speech and return an emotional prediction and probability score."
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
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Professional Certificate:Introduction to Object-Oriented Programming with Java",
      subtitle:
        "College of Computing at Georgia Tech",
      image: require("./assets/images/GT.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14P4HytpSl1FUYhLYz0GnPt_Rf8YO3erW/view?usp=share_link"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Professional Certificate:Introduction to Python Programming",
      subtitle:
        "College of Computing at Georgia Tech",
      image: require("./assets/images/GT.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ePX9YY9NImd9GRdyBwgZBrEXhg7a_36R/view?usp=share_link"
        }
      ]
    },

    {
      title: "Professional Certificate: Data Structures and Algorithms",
      subtitle: "College of Computing at Georgia Tech",
      image: require("./assets/images/GT.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1TpHclM1Y9l_gCgMXYtASlxrWXj5gXAsV/view?usp=share_link"}
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-3474060899",
  email_address: "yingshanhu23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
