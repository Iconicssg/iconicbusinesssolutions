const StatsSection = () => {
  const stats = [
    {
      number: "4+",
      label: "Years Experience",
    },
    {
      number: "2000+",
      label: "Candidates Placed",
    },
    {
      number: "10+",
      label: "Enterprise Clients",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-smooth"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
