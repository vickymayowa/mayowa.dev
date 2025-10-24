import ExperienceTimeline from "@/components/experience-timeline"

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    date: "2022 - Present",
    description:
      "Led development of multiple full-stack applications using Next.js and React. Mentored junior developers and established best practices for the team.",
    highlights: ["Next.js", "React", "Node.js", "PostgreSQL", "Team Leadership"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    date: "2020 - 2022",
    description:
      "Developed and maintained web applications for various clients. Implemented responsive designs and optimized performance across all projects.",
    highlights: ["React", "JavaScript", "CSS", "REST APIs", "Agile"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Web Studio",
    date: "2018 - 2020",
    description:
      "Built interactive user interfaces and implemented complex features. Collaborated with designers to create pixel-perfect implementations.",
    highlights: ["React", "HTML/CSS", "JavaScript", "UI/UX", "Figma"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "StartUp Hub",
    date: "2017 - 2018",
    description:
      "Started my career building web applications and learning modern development practices. Contributed to multiple projects and grew my technical skills.",
    highlights: ["JavaScript", "HTML/CSS", "Git", "Problem Solving"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="section-container">
      <div className="mb-12">
        <h1 className="mb-4">Work Experience</h1>
        <p className="text-foreground/70 max-w-2xl">
          My professional journey in web development, showcasing roles, responsibilities, and key achievements.
        </p>
      </div>

      <ExperienceTimeline experiences={experiences} />
    </div>
  )
}
