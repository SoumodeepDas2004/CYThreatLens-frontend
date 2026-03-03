export default function WorldUpdate() {
  const updates = [
    {
      title: "Middle East Tension Escalation",
      summary:
        "Missile exchanges reported between regional actors. Air defense systems active. Strategic posture elevated."
    },
    {
      title: "Cyber Threat Surge",
      summary:
        "Increase in state-sponsored scanning activity targeting financial institutions in EU and APAC regions."
    },
    {
      title: "Global Infrastructure Watch",
      summary:
        "Port and maritime traffic disruptions observed in Red Sea corridor."
    }
  ];

  return (
    <div className="world-container">
      <h1> Global Strategic Update</h1>

      <div className="update-grid">
        {updates.map((item, index) => (
          <div key={index} className="update-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}