import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Aditya Pathak",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "adityapathak301@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Explore Aditya's portfolio, showcasing innovative product design and impactful projects. Discover his journey in creating seamless and engaging user experiences",
};

export const blog: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Browse through my projects, featuring detailed descriptions and live demos showcasing my skills and expertise.",
};

export const SOCIALS: Socials = [
{ 
    NAME: "instagram",
    HREF: "https://www.instagram.com/aditya.rendr/"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/aditya-pathak-designer/",
  }
];
