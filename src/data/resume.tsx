import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayan Mishra",
  initials: "AM",
  url: "https://aayanmishra.com",
  location: "Sydney, AUS",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Artifical Intelligence/Machine Learning Developer",
  summary:
    "Hey there! I'm Aayan and I work on building AI projects, from finetuning models like OdysseyXL to developing systems such as Maverick Search. Whether its deep learning, experimenting with model optimization, or creating something entirely new, I'm always exploring something. When I'm not coding or training models, you'll probably find me watching Formula 1.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Vercel",
    "NumPy",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "Docker",
    "Keras",
    "GCP",
    "Azure",
    "AWS",
    "Pandas",
    "Unsloth",
    "Transformers",
    "Diffusers",
    "PEFT",
    "Jupyter Notebooks"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aayanmishra953@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aayan-Mishra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aayan-mishra/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Spestly",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "me@aayanmishra.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
      {
      company: "Noema Labs" + ' ',
      href: "https://open-neo.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Lead Developer of Transformers models",
      logoUrl: "/Noema.jpg",
      start: "May 2025",
      end: "Present",
      description:
        "In Noema Labs, I led the development of models such as NoemaCoder-T1 and and the Noema family through technology such as Unsloth which is a PEFT-based fine-tuning framework which allows parameter efficent fine-tuning of models.",
    },
    {
      company: "Cohere Labs - Open Science Community" + ' ',
      href: "https://cohere.com/research/open-science",
      badges: [],
      location: "Remote",
      title: "Open Science Developer & Researcher",
      logoUrl: "/cohere-pfp.png",
      start: "May 2025",
      end: "Present",
      description:
        "Cohere Labs – Open Science Community is a collaborative research initiative supported by Cohere Labs, aimed at advancing machine learning through open science. The community brings together independent researchers, engineers, students, and practitioners from around the world to contribute to shared projects in areas such as natural language processing, large language models, evaluation frameworks, and responsible AI. Projects hosted under the CohereLabsCommunity Hugging Face organization reflect the collective efforts of this global network, emphasizing transparency, reproducibility, and inclusive access to cutting-edge AI research.",
    },
    {
      company: "Open-Neo" + ' ',
      href: "https://open-neo.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Founder & Diffusion Model Engineer",
      logoUrl: "/open-neo.png",
      start: "Jan 2025",
      end: "March 2025",
      description:
        "In Open-Neo, I led the maintenance of OdysseyXL, A SOTA Stable Difussion model based on Stability AI's SDXL model. The model was fine-tuned through Dreamboothing to help enhance the model's overall realism when generating outputs for specific categories such as landscapes.",
    }
  ],
  education: [
    {
      school: "Harvard University - CS50x: Introduction to Computer Science",
      href: "https://cs50.harvard.edu/x/2025/",
      degree: "This is CS50x , Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.",
      logoUrl: "https://lh3.googleusercontent.com/fASk3OpbgUcnw_-X_34NDtnPXwg82zpN_uPCulHuoJwli63r9SvHdD0x8IHMvvM0MHWGNqdD_nz04orpBmLDy38RwN4HabEVWDcptpwWPjNGAAAdDUyIRicfwJURMEarGrnH-EyZxlnTNY8VAuiirDY",
      start: "2025",
      end: "Present",
    },
    {
      school: "CodeSignal - Building Neural Networks with PyTorch",
      href: "https://codesignal.com/learn/certificates/cm4f4plwd000cmgla9jg5zfv6/course-paths/41",
      degree: "Master PyTorch with this learning path, designed for those experienced in Python and machine learning. From tensor basics to advanced modeling, it includes practical exercises focused on real-world datasets, such as the wine dataset, enhancing your deep learning skills through PyTorch.",
      logoUrl: "/codes.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Sololearn - Python Developer",
      href: "https://www.sololearn.com/certificates/CC-HIOWA4X8",
      degree: "Python is the world's fastest growing programming language is easy to read, learn and code. You'll learn to build interactive programs and automate your tasks, analyze and visualize even the most complex data and create AI and machine learning models. No previous coding experience needed.",
      logoUrl: "/solo.png",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Kyro-n1",
      href: "https://open-neo.vercel.app/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Kyro-n1 is a lightweight and fast reasoning model based on Qwen/Qwen2.5-3B-Instruct.",
      technologies: [
        "Python",
        "LLMs",
        "Transformers",
        "Qwen2.5",
        "Unsloth",
      ],
      links: [
        {
          type: "Read More",
          href: "https://open-neo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/Neo-Banner.png",
      video:
        "",
    },
    {
      title: "OdysseyXL",
      href: "https://open-neo.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Fine-tune of Stability.ai's SDXL text-to-image model for enhanced realism and better image generation",
      technologies: [
        "SDXL",
        "Low-Code",
        "Stability.ai",
        "Cloud Training",
        "Diffusers",
        "Python",
      ],
      links: [
        {
          type: "Read More",
          href: "https://aayanmishra.com/blog/odysseyxl",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/API%20(1).png",
      video: "",
    },
    {
      title: "Open-Neo",
      href: "https://open-neo.vercel.app/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Open-Neo is an Australia based research lab dedicated to advancing open-source AI models",
      technologies: [
        "Python",
        "Low-Code",
        "text-to-text",
        "NLP",
        "Research"
      ],
      links: [
        {
          type: "Website",
          href: "https://open-neo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/Open-Neo.png",
      video:
        "",
    },
        {
      title: "NoemaCoder",
      href: "",
      dates: "April 2024 - Present",
      active: true,
      description:
        "NoemaCoder is a SOTA coding LLM that excels in many enviourments. Based on Bytedance-Seed's SeedCoder-8B, providing an excelent base which outperforms models such as Alibaba's QwQ-32B and Deepseek AI's Deepseek-R1",
      technologies: [
        "Python",
        "Unsloth",
        "text-to-text",
        "Code",
        "NLP",
        "Research",
        "Llama"
      ],
      links: [
        {
          type: "Read More",
          href: "https://huggingface.co/collections/Spestly/noema-1-680b09e8f1f79700ffa03e3e",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/www.aayanmishra.com/refs/heads/main/public/noema.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Maverick Search",
      dates: "05/04/2025",
      location: "",
      description:
        "Maverick Search is an open-source AI search engine designed to run locally. Any local model can be used but Athena-3 models are optimised with this code. Maverick Search uses Exa Search API ",
      image:
        "",
      links: [
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aayan-Mishra/Maverick-Search",
        },
      ],
    },
  ],
} as const;
