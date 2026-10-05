import { Target, Compass, Eye, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Goal',
    description:
      'To provide targeted operational solutions that connect supply chain logistics with digital health systems to optimize daily administrative activities and improve patient outcomes across medical facilities and corporate environments.',
  },
  {
    icon: Compass,
    title: 'Our Mission',
    description:
      'To deliver operational support and advisory services that help healthcare facilities and corporate organizations manage clinical workflows effectively. We achieve this by connecting physical clinic design with digital management platforms to eliminate administrative bottlenecks and enhance daily facility administration.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To establish healthcare systems where streamlined operational processes and structured medical supply chains directly improve patient care across private and government sectors, so that administrative efficiency enables healthcare providers to focus entirely on clinical outcomes.',
  },
];

const highlights = [
  'Evaluate existing operational frameworks',
  'Identify inefficiencies and bottlenecks',
  'Align facility workflows with organizational goals',
  'Connect supply chain logistics with patient administration',
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/aphllc/woman-medic-wearing-stethoscope-red-uniform.jpg?updatedAt=1750693267622"
              alt="Medical professional"
              className="h-[28rem] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-2 max-w-[16rem] rounded-2xl bg-navy-700 p-6 text-white shadow-xl sm:-right-6">
              <div className="gold-rule mb-3" />
              <p className="text-sm leading-relaxed text-white/90">
                Administrative efficiency that lets providers focus on clinical outcomes.
              </p>
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <span className="eyebrow">About Us</span>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-700 sm:text-4xl">
              Healthcare support services built around how facilities actually run
            </h2>
            <div className="gold-rule" />
            <p className="text-lg leading-relaxed text-navy-700/80">
              AVA Health is a healthcare support service provider specializing in operational
              support and advisory services. We work directly with healthcare facilities and
              corporate organizations, including government agencies, to manage their clinical and
              healthcare-related consultations and operations.
            </p>
            <p className="text-lg leading-relaxed text-navy-700/80">
              We provide access to targeted solutions designed to optimize daily administrative
              activities and improve overall patient outcomes.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-navy-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Goal / Mission / Vision */}
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-700 via-brand-600 to-gold-400" />
              <div className="mb-5 w-fit rounded-xl bg-white p-3 shadow-xs">
                <Icon className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy-700">{title}</h3>
              <p className="leading-relaxed text-navy-700/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
