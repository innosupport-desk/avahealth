import { Link } from 'react-router-dom';
import {
  Briefcase,
  Brain,
  Ambulance,
  LayoutGrid,
  Pill,
  Workflow,
  Building2,
  MonitorSmartphone,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Health Advisory',
    description:
      'Consulting with businesses to structure employee health plans and occupational safety protocols.',
  },
  {
    icon: Brain,
    title: 'Mental Wellness Support Programs',
    description:
      'Psychological support frameworks and stress management systems for corporate environments.',
  },
  {
    icon: Ambulance,
    title: 'Medical Outreach',
    description:
      'Planning and execution of community health interventions and mobile clinics.',
  },
  {
    icon: LayoutGrid,
    title: 'Clinic Design & Setup',
    description:
      'Physical layout planning and medical equipment procurement for new facilities.',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals & Medical Supplies Management',
    description:
      'Supply chain logistics and inventory tracking for clinical consumables.',
  },
  {
    icon: Workflow,
    title: 'Organizational Workflow & Process Design',
    description:
      'Mapping patient journeys and staff operations to eliminate administrative bottlenecks.',
  },
  {
    icon: Building2,
    title: 'Hospital Management Partnerships',
    description:
      'Collaborating with government entities and private owners to run the daily administration of medical centres.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Health Solutions',
    description:
      'Electronic medical records and custom inventory management software to digitize hospital operations.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">Core Services</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-700 sm:text-4xl">
            End-to-end support for healthcare operations
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-lg text-navy-700/75">
            From clinic design and supply chains to digital systems and hospital management, we
            cover the operational side of healthcare so your teams can focus on care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 text-sm font-bold text-gold-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mb-5 w-fit rounded-xl bg-gradient-to-br from-navy-700 to-brand-600 p-3.5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-bold leading-snug text-navy-700">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-700/70">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy-700 p-10 text-center text-white sm:p-12">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-500" />
          <h3 className="mb-3 text-2xl font-bold sm:text-3xl">Ready to streamline your operations?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Tell us about your facility or organization and we&apos;ll start with an initial
            discovery session.
          </p>
          <Link
            to="/request-service"
            className="inline-flex items-center rounded-lg bg-gold-400 px-8 py-3.5 font-semibold text-navy-900 transition-colors duration-200 hover:bg-gold-300"
          >
            Request a Service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
