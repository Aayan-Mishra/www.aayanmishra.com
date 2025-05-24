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
  avatarUrl: "/mer.png",
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
      company: "Open-Neo" + ' ',
      href: "https://open-neo.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Founder &  Transformers Model Engineer",
      logoUrl: "/Noema.jpg",
      start: "Jan 2025",
      end: "Present",
      description:
        "",
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
      logoUrl: "https://cdn-lfs.hf.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1747960809&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Nzk2MDgwOX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=HJdY6h6R3np3cPF5YJkVyhO7EiXZzsnGniKP3s0pazxeMlKDWrK8G0eCc6CE9N8K979z3WWteNOuUjwnkjwZD3WePoe%7Exy--MzzNmyutmbJCIIgUPyeZEDGsspC6vQJS9qZGS293z00sTqhdO9qyO20CVhlAlhf5wzNaRf8zySZ4wb18w7PPXhgQHyvX1y9MWc3OuBaBkLuHZl4Aa%7E%7Eqza3TXffYbsH2fY3o35jd6OcDXfAj0o9VE9ybWikph7CcwaMzqhdhtfNDRyxB3Tx4B6DUS-DioVQ%7EuMBt-weVdOvELudefjTzVijFrUP5cZo4vXkJ9wk9mwjmGumeBLdhcg__&Key-Pair-Id=K3RPWS32NSSJCE",
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
