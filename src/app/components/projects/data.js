import dice from "../../../assets/images/dice.png";
import figma from "../../../assets/images/figma.png";
import movies from "../../../assets/images/movies.png";
import portfolio from "../../../assets/images/portfolio.png";
import positivius from "../../../assets/images/positivius.JPG";
import shopmate from "../../../assets/images/shomate.png";
import todo from "../../../assets/images/todo.png";
import wordcounter from "../../../assets/images/word-counter.png";
import bytewise from "../../../assets/images/bytewise.JPG";
import bytewiseLearning from "../../../assets/images/bytewise-learning.JPG";
import digian from "../../../assets/images/digian.JPG";
import finter from "../../../assets/images/finter.JPG";
import pronto from "../../../assets/images/pronto.JPG";
import imgtopdf from "../../../assets/images/imgtopdf.JPG";
import styleshop from "../../../assets/images/styleshop.JPG";

import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const projectsData = [
  {
    name: "Bytewise",
    image: bytewise,
    tech: "react  |  tailwindcss",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://bytewisetn.netlify.app/",
    date: "2025",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Positivius layout",
    image: positivius,
    tech: "react  |  tailwindcss",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://positivus-t.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Dice Game",
    image: dice,
    tech: "html  |  css  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://talha-tn.github.io/Dice-Rolling-Game/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Figma layout",
    image: figma,
    tech: "html  |  css  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://talha-tn.github.io/Figma-layout/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Pronto",
    image: pronto,
    tech: "react  |  tailwindcss  |",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://prontotn.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Cinemate",
    image: movies,
    tech: "react  | tailwindcss  | javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://cinemate-talhanawaz.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Old Portfolio",
    image: portfolio,
    tech: "html  | css  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://talha-tn.github.io/My-portfolio/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Shopmate",
    image: shopmate,
    tech: "react | tailwindcss  |  redux",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://shopmate-tn.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Todo App",
    image: todo,
    tech: "html  |  css  | react",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://taskmate-talhanawaz.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Word Counter",
    image: wordcounter,
    tech: "react  | tailwindcss",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://stunning-parfait-250e03.netlify.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Bytewise Learning",
    image: bytewiseLearning,
    tech: "react  | tailwindcss",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://bytewise-learning.netlify.app/",
    date: "2025",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Digian",
    image: digian,
    tech: "Html  | CSS  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://talha-fullstackdev.github.io/digian/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Finter",
    image: finter,
    tech: "Html  | CSS  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://talha-fullstackdev.github.io/finter/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "StyleShop",
    image: styleshop,
    tech: "react  | tailwindcss  |  javascript",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://styleshop.vercel.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
  {
    name: "Images to pdf",
    image: imgtopdf,
    tech: "nextjs  | typescript  |  tailwindcss",
    github:
      "https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07",
    link: "https://images-to-pdf-gold.vercel.app/",
    date: "2024",
    githubIcon: <FiGithub />,
    linkIcon: <HiOutlineExternalLink />,
  },
];
export default projectsData;
