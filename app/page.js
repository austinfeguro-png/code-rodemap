import Link from "next/link";
import StepCard from "@/components/StepCard";

const steps = [
  { icon: "🎨", label: "Step 1", title: "HTML & CSS", text: "Learn to structure and style web pages. Build a simple profile page." },
  { icon: "⚡", label: "Step 2", title: "JavaScript", text: "Learn variables, functions, and the DOM to make pages interactive." },
  { icon: "🔀", label: "Step 3", title: "Git & GitHub", text: "Track your changes and share your projects with version control." },
  { icon: "⚛️", label: "Step 4", title: "React", text: "Build user interfaces from reusable components and state." },
  { icon: "🚀", label: "Step 5", title: "Next.js", text: "Add routing, layouts, and full-stack features on top of React." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="float f1">⚛️</span>
        <span className="float f2">🚀</span>
        <span className="float f3">⚡</span>
        <p className="eyebrow">Beginner friendly • Free resources</p>
        <h1 className="hero-title">
          Your <span className="gradient-text">Web Programming</span> Roadmap
        </h1>
        <p className="hero-text">
          Not sure where to start? Follow these five steps, from your first web
          page to a full Next.js app.
        </p>
        <Link href="/resources" className="button">
          See Free Resources <span className="arrow">→</span>
        </Link>
      </section>

      <h2 className="section-title">The 5 Steps</h2>
      <div className="grid">
        {steps.map((s, i) => (
          <StepCard key={s.title} index={i} icon={s.icon} label={s.label} title={s.title}>
            {s.text}
          </StepCard>
        ))}
      </div>
    </>
  );
}