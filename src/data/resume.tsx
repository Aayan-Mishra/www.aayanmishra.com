import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayan Mishra",
  initials: "AM",
  url: "https://aayan-mishra.vercel.app",
  location: "Sydney, AUS",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Artifical Intelligence/Machine Learning",
  summary:
    "Hey there! I'm Aayan and I work on building AI projects, from finetuning models like OdysseyXL to developing advanced systems like Kyro and Mimir. Whether its deep learning, experimenting with model optimization, or creating something entirely new, I'm always exploring the next big idea. When I'm not coding or training models, you'll probably find me watching Formula 1, , or refining my STEM.",
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
        url: "https://www.linkedin.com/in/aayan-mishra-856945311/",
        icon: Icons.linkedin,

        navbar: false,
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Open-Neo" + ' ',
      href: "https://open-neo.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Founder & Diffusion Model Engineer",
      logoUrl: "/open-neo.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Open-Neo began as a small personal project fueled by curiosity and a passion for AI. Over time, it has evolved into a public research lab dedicated to pushing the boundaries of innovation. With a focus on creating cutting-edge models and solutions, Open-Neo empowers individuals, fostering collaboration, learning, and breakthroughs in AI and machine learning.",
    }
  ],
  education: [
    {
      school: "Machine Learning Engineer Path - Google",
      href: "https://www.cloudskillsboost.google/paths/17",
      degree: "",
      logoUrl: "/google.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "CodeSignal - Building Neural Networks with PyTorch",
      href: "https://learn.codesignal.com/course-paths/41",
      degree: "",
      logoUrl: "/codes.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Sololearn - Python Developer",
      href: "https://www.sololearn.com/certificates/CC-HIOWA4X8",
      degree: "",
      logoUrl: "/solo.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Kyro-n1",
      href: "",
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
          href: "https://aayan-mishra.vercel.app/blog/neov",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/NEO-v1.png",
      video:
        "",
    },
    {
      title: "OdysseyXL",
      href: "https://magicui.design",
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
          href: "https://aayan-mishra.vercel.app/blog/odysseyxl",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/API%20(1).png",
      video: "",
    },
    {
      title: "Open-Neo",
      href: "",
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
      image: "https://huggingface.co/spaces/open-neo/README/resolve/main/Open-Neo.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Coming Soon!",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      links: [
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
