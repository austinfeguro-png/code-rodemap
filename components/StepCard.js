export default function StepCard({ icon, label, title, children, link, index = 0 }) {
  return (
    <div className="card" style={{ "--i": index }}>
      <div className="card-top">
        {icon && <span className="card-icon">{icon}</span>}
        <span className="badge">{label}</span>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="card-link">
          Visit site <span className="arrow">↗</span>
        </a>
      )}
    </div>
  );
}