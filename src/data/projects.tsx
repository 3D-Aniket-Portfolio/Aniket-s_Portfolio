import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpring />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "staynjoy",
    category: "Full-Stack Web App",
    title: "Stay'N'Joy",
    src: "/assets/projects-screenshots/staynjoy/landing.png",
    screenshots: ["landing.png"],
    live: "https://staynjoy.scriptbliss.com/",
    github: "https://github.com/AniketTotawarKC-DAC/staynjoy",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Stay&apos;N&apos;Joy is an online accommodation portal connecting property
            owners and tenants — think Airbnb but built from scratch with a
            scalable production-grade stack.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Designed to handle 1,000+ concurrent users with thousands of
            property listings. React.js frontend deployed on Vercel, Spring Boot
            backend on AWS EC2, and production database on AWS RDS.
          </p>
          <TypographyH3 className="my-4 mt-8">Auth & Security</TypographyH3>
          <p className="font-mono mb-2">
            Secure authentication using Spring Security and JWT with Role-Based
            Access Control (RBAC) for owners and tenants.
          </p>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>End-to-end CRUD for property listing, search, and booking</li>
            <li>Optimized MySQL schema for high-performance queries</li>
            <li>RESTful APIs with full user management</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "smart-bus",
    category: "IoT Project",
    title: "IoT Smart School Bus Monitor",
    src: "/assets/projects-screenshots/smart-bus/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/AniketTotawarKC-DAC",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An IoT-based real-time school bus tracking system built to enhance
            student safety and give parents and school authorities live visibility
            into bus locations.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">GPS Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Implemented GPS-based live tracking achieving 90% location accuracy,
            reducing response time to incidents significantly.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Improved operational transparency for school authorities</li>
            <li>Real-time alerts to parents on bus location</li>
            <li>Reduced incident response time</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
