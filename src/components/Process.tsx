const steps = [
  {
    title: 'Initial Discovery',
    description: 'Understand client operations, bottlenecks, and specific needs.',
  },
  {
    title: 'Operational Audit',
    description: 'Comprehensive review of workflows, resource use, and existing systems.',
  },
  {
    title: 'Solution Design & Alignment',
    description: 'Bespoke system design, workflow mapping, and clinic layouts tailored to client goals.',
  },
  {
    title: 'Proposal & SLA',
    description: 'Agree on detailed project scope, terms, deliverables, and service levels.',
  },
  {
    title: 'Implementation & Deployment',
    description: 'Launch new software, protocols, training, data migration and operational changes.',
  },
  {
    title: 'Ongoing Management & Support',
    description: 'Continuous system updates, performance monitoring, and help desk assistance.',
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-gradient-to-b from-brand-50 to-cream py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">How We Work</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-700 sm:text-4xl">
            Our client onboarding process
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-lg text-navy-700/75">
            A structured, six-step engagement that takes you from first conversation to fully
            supported operations.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/onboarding-process.jpg"
            alt="AVA Health client onboarding process: discovery, audit, solution design, proposal and SLA, implementation, and ongoing support"
            className="mx-auto w-full max-w-xl rounded-full shadow-2xl"
            loading="lazy"
          />

          <ol className="relative space-y-6 border-l-2 border-gold-300 pl-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold-300 bg-navy-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-navy-700">{step.title}</h3>
                <p className="mt-1 text-navy-700/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
