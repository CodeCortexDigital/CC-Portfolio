import InfoGrid from "./InfoGrid";
import { workSteps, engagementModels, confidentiality } from "../data/content";

function HowWeWork() {
  return (
    <>
      <div className="steps-grid">
        {workSteps.map((s) => (
          <div className="step-card" key={s.title}>
            <span className="step-number">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <InfoGrid items={engagementModels} />
      <p className="confidentiality-note">{confidentiality}</p>
    </>
  );
}

export default HowWeWork;
