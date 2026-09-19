import "../styles/features.css";

const Features = () => {
  const feature = [
    {
      title: "Future Self Journal",
      description: "write letters/notes to your future self.",
    },
    {
      title: "Vision Board",
      description: "Dreams into one visual board.",
    },
    {
      title: "Lock it",
      description: "Lock your future self in a time capsule.",
    },
  ];
  return (
    <div className="features-container">
      <h1 className="features-title">What you need is here..</h1>
      <div className="features">
        {feature.map((feature) => (
          <div className="feature">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
