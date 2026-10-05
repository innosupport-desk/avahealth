import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Briefcase, Landmark, Activity } from 'lucide-react';

const audiences = [
  { icon: Building2, label: 'Healthcare Facilities' },
  { icon: Briefcase, label: 'Corporate Organizations' },
  { icon: Landmark, label: 'Government Agencies' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream pb-28 pt-16 lg:pt-24">
      {/* Decorative heartbeat line, echoing the logo */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-40 w-full -translate-y-1/2 opacity-[0.07] lg:block"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline
          points="0,80 300,80 330,40 350,120 370,20 395,140 420,80 700,80 730,50 750,110 770,80 1200,80"
          fill="none"
          stroke="#c09440"
          strokeWidth="4"
        />
      </svg>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="eyebrow">
                <Activity className="h-4 w-4" />
                Operational Support &amp; Advisory
              </span>
              <h1 className="text-4xl font-extrabold leading-tight text-navy-700 sm:text-5xl lg:text-6xl">
                Efficient operations.{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                  Better patient outcomes.
                </span>
              </h1>
              <div className="gold-rule" />
              <p className="text-lg leading-relaxed text-navy-700/80 sm:text-xl">
                AVA Health works with healthcare facilities, corporate organizations and government
                agencies to manage their clinical and healthcare-related operations, so care
                providers can focus entirely on patients.
              </p>
              <p className="text-base leading-relaxed text-navy-700/70 sm:text-lg">
                We evaluate existing operational frameworks, remove administrative bottlenecks, and
                implement practical systems that connect supply chain logistics with daily patient
                administration.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/request-service" className="btn-primary px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary px-8 py-4"
              >
                Explore Services
              </button>
            </div>

            {/* Who we serve */}
            <div className="border-t border-gold-200 pt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-700/60">
                Who we serve
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {audiences.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="rounded-lg bg-brand-50 p-2.5">
                      <Icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <span className="text-sm font-semibold text-navy-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-gold-300" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://ik.imagekit.io/aphllc/portrait-nurse-scrubs-clinic.jpg?updatedAt=1750693283734"
                alt="Healthcare professional in a clinic"
                className="h-96 w-full object-cover lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-gold-200 bg-white p-5 shadow-xl sm:-left-8 sm:right-auto">
              <div className="flex items-center gap-4">
                <img src="/favicon.png" alt="" className="h-12 w-12" />
                <div>
                  <div className="font-bold text-navy-700">Supply chain + digital systems</div>
                  <div className="text-sm text-navy-700/70">Connected for smoother facility administration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
