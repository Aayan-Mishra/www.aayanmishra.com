import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayan Mishra",
  initials: "AM",
  url: "https://aayan-mishra.vercel.app",
  location: "Sydney, AUS",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Artifical Intelligence/Machine Learning Engineer",
  summary:
    "Since 2022, I’m fully immersed in building groundbreaking AI models, fine-tuning them to solve real-world problems, and exploring the intersection of innovation and impact at Apache Labs. With a strong foundation in Math, Python, and machine learning, I’ve worked on cutting-edge projects like Neo, a wildlife detection model, and fine-tuned YOLOv11 for African Wildlife detection.",
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
    "Anaconda",
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
        navbar: true,
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
      company: "Neo" + ' ',
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Lead Machine Learning Engineer",
      logoUrl: "/neo.png",
      start: "Dec 2024",
      end: "Present",
      description:
        "Neo v1 is a personal project where I fine-tuned YOLOv11 to create an AI model tailored for wildlife conservation. It automates the detection and monitoring of African wildlife in images and videos, enabling more efficient tracking of animal populations and supporting efforts to protect endangered species.",
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
      title: "NeoV.1",
      href: "",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "NeoV is an AI-powered wildlife detection model, fine-tuned from YOLOv11, designed to enhance conservation efforts by automating the monitoring of African wildlife.",
      technologies: [
        "Python",
        "Low-Code",
        "Image-classification Model",
        "Ultralytics",
        "YOLOv11",
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
      title: "Glacier-o1",
      href: "",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Glacier-o1 is a fine-tune of Alibaba's Marco o1. Glacier is designed to have a similar reasoning pattern to OpenAI's o1",
      technologies: [
        "Python",
        "Low-Code",
        "text-to-text",
        "Unsloth",
      ],
      links: [
        {
          type: "Download Weights",
          href: "https://huggingface.co/Spestly/Glacier-o1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/disc%20(2).png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Comming Soon!",
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
