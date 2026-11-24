import StepCard from "@/components/StepCard";

export const metadata = { title: "Resources | Code Roadmap" };

const resources = [
  { icon: "📘", label: "HTML/CSS", title: "MDN Web Docs", link: "https://developer.mozilla.org", text: "The most trusted reference for HTML, CSS, and JavaScript." },
  { icon: "🏕️", label: "All-in-one", title: "freeCodeCamp", link: "https://www.freecodecamp.org", text: "Free interactive lessons and projects with certifications." },
  { icon: "📜", label: "JavaScript", title: "javascript.info", link: "https://javascript.info", text: "A clear, modern JavaScript tutorial from basics to advanced." },
  { icon: "🐙", label: "Git", title: "GitHub Docs", link: "https://docs.github.com", text: "Learn Git, repositories, and how to publish your code." },
  { icon: "⚛️", label: "React", title: "React Docs", link: "https://react.dev", text: "The official, beginner-friendly guide to React." },
  { icon: "▲", label: "Next.js", title: "Next.js Learn", link: "https://nextjs.org/learn", text: "The official hands-on course for building Next.js apps." },
];

export default function Resources() {
  return (
    <>
      <div className="page-head">
        <p className="eyebrow">Learn for free</p>
        <h1 className="page-title">Free Learning Resources</h1>
        <p className="hero-text">Hand-picked sites that match each step of the roadmap.</p>
      </div>
      <div className="grid">
        {resources.map((r, i) => (
          <StepCard key={r.title} index={i} icon={r.icon} label={r.label} title={r.title} link={r.link}>
            {r.text}
          </StepCard>
        ))}
      </div>
    </>
  );
}