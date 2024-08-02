export const navItems = ["about", "experiences", "projects", "contacts"];

export const about = {
  name: "Citra Puspita Rahman",
  headline: "I build things for the web",
  description:
    " I am a software engineer specializing in building web application. Currently, I am living in Istanbul, Turkey. I am focusing on building applications with Ruby On Rails and or React JS.",
  resumeButtonName: " Check out my Resume",
  resumeLink:
    "https://www.dropbox.com/scl/fi/mwgw35xvc6qbtyw9lk1tm/Citra-Resume.pdf?rlkey=1kp1ursb98i41b0d6eupwe6b9&st=6zs055x3&raw=1",
};

export const experiences = [
  {
    date: "2019 - Present",
    title: "Freelance Web Developer",
    description: [
      "Create UI Prototype using For Traject Data Application",
      "Chat Platform: Create Responsive Navigation in the App",
      "TD Status Page React.js Prototype Challenge",
      "JSON API Specification and Documentation for Angular Web Application",
    ],
    tags: ["React JS", "Next JS", "Express JS", "Swagger"],
  },
  {
    date: "2021 - 2023",
    title: "Backend Engineer . Happy5",
    description: [
      "Maintain and Add New Features for Performance Management System.",
    ],
    tags: [
      "Ruby On Rails",
      "PostgreSQL",
      "Sidekiq",
      "RSpec",
      "Redis",
      "WebSocket",
      "AWS",
    ],
  },
  {
    date: "2020 - 2021",
    title: "Full Stack Javascript Engineer . Shipsland",
    description: ["Develop an order Management System"],
    tags: ["React JS", "Express JS", "MongoDB", "REST", "JEST", "AWS EC2"],
  },
  {
    date: "2018 - 2018",
    title: "Card Personalization System Engineer . IDEMIA",
    description: ["Maintain Card Personalization System for Card Factories"],
    tags: ["Java"],
  },
  {
    date: "2016 - 2018",
    title: "Full Stack Net Developer . Praisindo Tech",
    description: [
      "Maintain and Add New Features for Investment Management System.",
      "Help customer service solve technical issues.",
    ],
    tags: ["ASP NET", "SOAP", "REST", "SQL Server", "T-SQL", "SSRS"],
  },
];

export const projects = [
  {
    name: "Traject Data Application",
    imgPath: "/traject-data.png",
    description: "Web Prototype challenge by Top Coder, built using React JS and Material UI.",
    link: "https://wonderful-alfajores-4e26f4.netlify.app"
  },
  {
    name: "To Do Application",
    imgPath: "/todo-app-web.png",
    description:
      "Simple To Do Web Application built using ReactJS (Front End) and Firebase (Back End).",
    link: "https://todoist-34829.web.app/",
  },
  {
    name: "Covid-19 101",
    imgPath: "/covid19.png",
    description:
      "A responsive website of Covid-19 to increase awareness of corona virus built with NextJS.",
    link: "https://covid101.netlify.app/",
  },
];
