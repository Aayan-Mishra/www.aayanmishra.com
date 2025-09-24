import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayan Mishra",
  initials: "AM",
  url: "https://aayanmishra.com",
  location: "Sydney, AUS",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Artifical Intelligence/Machine Learning Developer & Researcher",
  summary:
    "Hey there! I'm Aayan and I work on building AI projects, from finetuning models like OdysseyXL to developing systems such as Maverick Search. Whether its deep learning, experimenting with model optimization, or creating something entirely new, I'm always exploring something. When I'm not coding or training models, you'll probably find me watching Formula 1.",
  avatarUrl: "https://avatars.githubusercontent.com/u/176997922?s=400&u=1d5678bbadc68b20b829f64106c8074475a03e7b&v=4",
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
    email: "me@aayanmishra.com",
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
        url: "https://www.linkedin.com/in/mishraayan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Spestly",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/aayan-mishra-resume-v1.pdf",
        icon: Icons.globe,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:me@aayanmishra.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
   {
      company: "Loom Labs" + ' ',
      href: "https://loomlabs.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Founder & Head of Post Training",
      logoUrl: "LoomLabs.png",
      start: "July 2025",
      end: "Present",
      description:
        "",
    },
    {
      company: "Cohere Labs - Open Science" + ' ',
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
      school: "Hugging Face - LLM Course",
      href: "https://cdn-uploads.huggingface.co/production/uploads/noauth/lmjaPx4aE-aFfMWiwPoV0.webp",
      degree: "The Hugging Face LLM Course is a practical, hands-on introduction to working with large language models (LLMs) using the Hugging Face ecosystem. It covers key concepts like transformers, tokenization, model inference with pipelines, fine-tuning on custom datasets, evaluation, and deployment. Designed for developers and ML practitioners with basic Python skills, the course teaches how to leverage state-of-the-art models for tasks such as summarization, classification, and translation. Learners get to explore the Hub, train and share models, and optimize inference with tools like Text Generation Inference (TGI) and accelerate, all through interactive Colab notebooks and real-world examples.",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SWKXhvP9a0SUoa0lKwL0gqVDHpL0YKxay3Og937JRUAnNkSmDQXJMIcLHBPG4_6s9uY&usqp=CAU",
      start: "2025",
      end: "2025",
    },
    {
      school: "TAFE NSW - Introduction to Artificial Intelligence",
      href: "/tafe-ai-microskill.pdf",
      degree: "Completed a 2.5-hour self-paced online Microskill course introducing the fundamentals of Artificial Intelligence, with no prior technical knowledge required. Gained foundational understanding of how AI learns from data, explored real-world applications across various industries, learned key AI terminology, and received insights from industry professionals on starting a career in AI. The course also addressed common myths and misconceptions surrounding AI. Successfully completed all modules and assessments to earn a certificate of completion.",
      logoUrl: "https://sopba.com.au/wp-content/uploads/2019/04/NSW-Government-Logo.png",
      start: "2025",
      end: "2025",
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
      title: "OdysseyXL",
      href: "https://huggingface.co/collections/Spestly/odysseyxl-683bc2e002c1a474a83bfafb",
      dates: "November 2023 - Present",
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
        {
          type: "Weights & Code",
          href: "https://github.com/Aayan-Mishra/OdysseyXL/tree/main",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Playground",
          href: "https://spestly-odysseyxlplayground.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/API%20(1).png",
      video: "",
    },
    {
      title: "Athena",
      href: "https://huggingface.co/collections/Spestly/athena-project-681857404c4a58f02fb32ad9",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Athena is a high-performance LLM that is designed to excel in most STEM areas as well as general NLP tasks!",
      technologies: [
        "Python",
        "Low-Code",
        "text-to-text",
        "NLP",
        "Research"
      ],
      links: [
        {
          type: "Model Weights",
          href: "https://huggingface.co/collections/Spestly/athena-project-681857404c4a58f02fb32ad9",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Playground",
          href: "https://spestly-athenaplayground.hf.space/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/athena-banner.png",
      video:
        "",
    },
    {
      title: "Maverick Search",
      href: "https://github.com/Aayan-Mishra/Maverick-Search",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "Maverick Search is an open-source AI search engine designed to run locally with Ollama. This project is designed to be an open-source alternative to major AI search engines such as Perplexity and etc.",
      technologies: [
        "Python",
        "Low-Code",
        "text-to-text",
        "NLP",
        "Research"
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/Aayan-Mishra/Maverick-Search",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/maverick-banner.png",
      video:
        "",
    },
    {
      title: "Senna",
      href: "",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Senna is a small but powerful open-source computer vision model based on YOLOv11 for detecting Formula 1 Cars",
      technologies: [
        "Python",
        "Low-Code",
        "Ultralytics",
        "Computer Vision",
        "Research",
        "YOLO"
      ],
      links: [
        {
          type: "Try Senna",
          href: "https://senna.aayanmishra.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/senna-banner.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Leveraging AI Model Systems to Transform Online Education: The Victor Academy Approach",
      dates: "In Progress",
      location: "",
      description:
        "This research project explored the application of AI model systems to enhance online education. I led the design and development of intelligent learning tools under the Victor Academy framework, focusing on adaptive assessment, personalized content delivery, and progress tracking through AI. The purpose of this project was to investigate how modern LLM-based systems can transform digital education environments by improving accessibility, scalability, and learner outcomes.",
      image:
        "LoomLabs.png",
      links: [
        {
          title: "Victor Academy",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://victor.aayanmishra.com/",
        },
      ],
    },
    {
      title: "Loom-V1: Enhancing Multilingual Language Models with Group Relative Policy Optimisation (GRPO)",
      dates: "Planned",
      location: "",
      description:
        "This is a research project which I led the development of the Loom model family. The purpose of this research project was to analyse how we can improve non-reasoning multilingual LLMs through reinforcement specifically Group Relative Policy Optimisation (GRPO).",
      image:
        "LoomLabs.png",
      links: [
        {
          title: "Models",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://huggingface.co/Loom-Labs",
        },
      ],
    },
  ],
} as const;
