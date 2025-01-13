import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

function calculateAge(birthday: string): number {
  // Convert the birthday string into a Date object
  const birthDate = new Date(birthday);

  // Get today's date
  const today = new Date();

  // Calculate the age
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust the age if the birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

export const DATA = {
  name: "Nathan Powell",
  location: "Manchester, United Kingdom",
  initials: "NP",
  url: "https://nathanpowell.uk",
  description:
    `A passionate ${calculateAge('2002-07-07')}-year-old Full Stack Software Engineer skilled in JavaScript, TypeScript, Python, React, and Node.js, driven by a commitment to innovation and creating impactful web solutions.`,
  summary:
    `As a passionate Full Stack Software Engineer, I bring a dynamic blend of cutting-edge technical skills and a fresh, creative approach to software development. At just ${calculateAge('2002-07-07')} years old, I have already made significant strides in both front-end and back-end technologies. My journey in coding began early, allowing me to develop a deep understanding of languages such as JavaScript, TypeScript, and Python, along with frameworks like React and Node.js.\n\nMy experience includes building responsive and user-friendly web applications, diving deep into databases, and crafting efficient server-side algorithms. What sets me apart is my eagerness to embrace new challenges and my commitment to staying on top of industry trends. My coding is not just a profession; it’s a passion that drives me to create innovative solutions that resonate with users.`,
  avatarUrl: "/avatar.png",
  skills: [
      "Python",
      "Javascript",
      "Typescript",
      "Java",
      "C++",
      "Rust",
      "CSS",
      "HTML",
      "Vue.js",
      "Django",
      "FastAPI",
      "React",
      "NuxtJS",
      "NextJS",
      "Electron",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Bootstrap",
      "Material-UI",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Tauri"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Nathan-Powell-CV.pdf", icon: NotebookIcon, label: "PDF CV" },
  ],
  contact: {
    email: "nathan@omnibyte.tech",
    tel: "+441615240093",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mrnat7471",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathan-t-powell/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Natpow7471",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Email",
        url: "mailto:contact@omnibyte.tech",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Omnibyte Technologies",
      href: "https://omnibyte.tech",
      badges: [],
      location: "Remote",
      title: "Founder & Lead Developer",
      logoUrl: "/omnibyte.jpeg",
      start: "Feb 2022",
      end: "Present",
      description:
        "One of the co-founder of Omnibyte Technologies. We specialize in bespoke software development, web development, and project maintenance. Our work includes projects like the \"Drivers Hub\" and a custom Discord bot for Prime Logistics, as well as TrackSim, a job logging solution for simulation games. I handle all aspects of day-to-day company management, ensuring we deliver high-quality technology solutions to our clients around the globe.",
    },
    {
      company: "Roco Technology Group",
      href: "https://rocotg.co.uk",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer",
      logoUrl: "/roco.jpeg",
      start: "Jun 2021",
      end: "March 2025",
      description: "",
    },
    {
      company: "Nathan7471 Development",
      href: "https://nathanpowell.uk",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "/nathan7471.png",
      start: "Jun 2020",
      end: "Feb 2022",
      description: "",
    }
  ],
  education: [
    {
      school: "BPP University",
      href: "https://bpp.com",
      degree: "BSc (Hons), Digital and Technology Solutions",
      logoUrl: "/bpp.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Estio Training",
      href: "https://estio.co.uk",
      degree: "BSc Level 4, Software Developer",
      logoUrl: "/estio.jpeg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Calderdale College",
      href: "https://www.calderdale.ac.uk/",
      degree: "BTEC Level 3 Extended Diploma, Computing",
      logoUrl: "/calderdale.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Mogul®",
      associated: 'Roco Technology Group',
      role: 'Day 0 Software Engineer',
      href: "https://mogulsearch.com",
      dates: "Jan 2024 - March 2025",
      active: true,
      description:
          "Mogul is a specialist finance and insurance comparison platform designed for property investors, business owners, and entrepreneurs. Beyond being a search engine for live property finance rates, Mogul offers a comprehensive decision-making tool. \n\nWith Mogul Insight, users can not only compare real-time rates but also receive detailed financial analysis, practical tips, and expert guidance from a broker’s perspective. \n\nWe believe in empowering our clients through education, offering creative strategies to help them grow and protect their wealth, ensuring they make the best-informed decisions for their investments.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "NextUI",
        "Python",
        "Django",
        "Django Rest Framework"
      ],
      links: [
        {
          type: "Website",
          href: "https://mogulsearch.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/mogul.mp4",
    },
    {
      title: "Kartify",
      associated: null,
      role: 'Founder & Software Engineer',
      href: "https://kartify.live",
      dates: "Sep 2024 - Present",
      active: true,
      description:
          "Kartify is a platform for logging karting lap times, tracking performance across various tracks, and viewing progression for users.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "NextUI",
        "Python",
        "Django",
        "Django Rest Framework"
      ],
      links: [
        {
          type: "Website",
          href: "https://kartify.live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/lAT4UqF.png",
      video: "",
    },
    {
      title: "VTC Gateway",
      associated: 'Omnibyte Technologies',
      role: 'Co-Founder',
      href: "https://vtcgateway.com",
      dates: "Dec 2023 - Present",
      active: true,
      description:
        "Welcome to VTC Gateway, your ultimate online hub for virtual trucking adventures! Dive into the open road with friends or virtual trucking companies, where you can enjoy robust customization, user-friendly features, and a thriving community. Create or join a virtual trucking company and embark on epic journeys tailored to your preferences. At VTC Gateway, we put you in control—experience trucking like never before. Visit our website today and start your journey!",
      technologies: [
          "Next.js",
          "Typescript",
          "MySQL",
          "TailwindCSS",
          "Stripe",
          "NextUI",
          "Python",
          "Django",
          "Django Rest Framework"
      ],
      links: [
        {
          type: "Website",
          href: "https://vtcgateway.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/GnNwYcT.png",
      video: "",
    },
    {
      title: "Simulator Hits Website & Panel",
      associated: null,
      role: 'Software Engineer Consultant',
      href: "https://simulatorhits.com",
      dates: "Jun 2023 - Present",
      active: true,
      description:
          "I have been providing support and training on a consultancy level as they have migrated their site to a more modern framework suitable for their station. We have now built an API and Basic Panel for the station with more features to come.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Python",
        "Django",
        "Django Rest Framework"
      ],
      links: [
        {
          type: "Website",
          href: "https://simulatorhits.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/SWaYNbB.png",
      video: "",
    },
    {
      title: "DNA Financial Solutions",
      associated: 'Roco Technology Group',
      role: 'Day 0 Software Engineer',
      href: "https://dnafs.co.uk",
      dates: "Feb 2023 - March 2025",
      active: true,
      description:
          "DNA is a leading specialist finance and insurance brokerage in the UK, providing expert advice for both individuals and businesses. We specialise in complex residential and commercial property finance, as well as personal and corporate protection. \n\nOur skilled teams, tech-driven approach, and tailored-individual-unique solutions set us apart as pioneers in the industry.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "NextUI",
        "Python",
        "Django",
        "Django Rest Framework"
      ],
      links: [
        {
          type: "Website",
          href: "https://dnafs.co.uk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/dna.mp4",
    },
    {
      title: "TrackSim",
      associated: 'Omnibyte Technologies',
      role: 'Co-Founder',
      href: "https://simulatorhits.com",
      dates: "Jan 2023 - Present",
      active: true,
      description:
          "A job logging solution for American Truck Simulator and Euro Truck Simulator 2 that processes the game data and sends it straight to your Drivers Hub with no fuss!\n\nWe know it’s not easy to create your own tracker. That’s why we have made this solution so you don’t have to worry about creating one.\n\nWith TrackSim, we make it simple. Your drivers install our client, you setup the integration to your Drivers Hub and the jobs your drivers log go straight through to your Drivers Hub, no fuss.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Stripe",
        "TailwindCSS",
        "Python",
        "Django",
        "Django Rest Framework",
        "C++",
        "Java",
      ],
      links: [
        {
          type: "Website",
          href: "https://tracksim.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/tracksim.mp4",
    },
    {
      title: "Prime Logistics Drivers Hub",
      associated: 'Omnibyte Technologies',
      role: 'Chief Technology Officer',
      href: "https://primevtc.com",
      dates: "Jun 2021 - Present",
      active: true,
      description:
          "Managing and maintaining a panel for 800+ gamers and tracking and processing 1000s of events per day whilst developing new features on the backend and frontend.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Python",
        "Django",
        "Django Rest Framework",
      ],
      links: [
        {
          type: "Website",
          href: "https://primevtc.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/DDabFuY.png",
      video: "",
    }
  ],
} as const;
