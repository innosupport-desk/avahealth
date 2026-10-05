import {
  CalendarHeart,
  Baby,
  HeartPulse,
  ClipboardList,
  UserPlus,
  Route,
  Network,
  PackageSearch,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

interface Product {
  name: string;
  tagline: string;
  description: string;
  accent: 'brand' | 'navy';
  features: { icon: LucideIcon; title: string; description: string }[];
}

const products: Product[] = [
  {
    name: 'Iyaami',
    tagline: 'Maternal care application',
    description:
      'Iyaami focuses on female reproductive health, with tools to track fertility, manage pregnancies, monitor postnatal recovery and support general female wellness.',
    accent: 'brand',
    features: [
      {
        icon: CalendarHeart,
        title: 'Fertility tracking',
        description: 'Log daily health metrics and monitor ovulation cycles.',
      },
      {
        icon: ClipboardList,
        title: 'Pregnancy management',
        description: 'Organize prenatal appointments and receive developmental updates.',
      },
      {
        icon: Baby,
        title: 'Postnatal care',
        description: 'Track maternal physical recovery and record newborn health data after childbirth.',
      },
      {
        icon: HeartPulse,
        title: 'Female health management',
        description: 'Record menstrual cycles and log physical symptoms for long-term reproductive tracking.',
      },
    ],
  },
  {
    name: 'AVA HMS',
    tagline: 'Hospital management system',
    description:
      'A fully modular, autonomous hospital management platform that handles backend facility operations, managing administrative tasks so medical staff can focus entirely on patient care.',
    accent: 'navy',
    features: [
      {
        icon: UserPlus,
        title: 'Staff onboarding',
        description: 'Automate document collection and manage training schedules for new personnel.',
      },
      {
        icon: Route,
        title: 'Workflow design',
        description: 'Map patient journeys from admission to discharge to eliminate bottlenecks.',
      },
      {
        icon: Network,
        title: 'Process flow management',
        description: 'Standardize daily operations and coordinate inter-departmental communication.',
      },
      {
        icon: PackageSearch,
        title: 'Supply chain management',
        description: 'Track pharmaceutical stock levels and trigger automated reorder alerts.',
      },
      {
        icon: Wrench,
        title: 'Inventory management',
        description: 'Monitor physical medical equipment and track asset maintenance schedules.',
      },
    ],
  },
];

const accentStyles = {
  brand: {
    header: 'from-brand-600 to-brand-800',
    icon: 'bg-brand-50 text-brand-600',
  },
  navy: {
    header: 'from-navy-700 to-navy-900',
    icon: 'bg-navy-50 text-navy-700',
  },
};

const Products = () => {
  return (
    <section id="products" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">Our Products</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-700 sm:text-4xl">
            Digital tools for patients and facilities
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product) => {
            const styles = accentStyles[product.accent];
            return (
              <article
                key={product.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-lg"
              >
                <div className={`relative bg-gradient-to-br ${styles.header} p-8 text-white sm:p-10`}>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-500" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-200">
                    {product.tagline}
                  </p>
                  <h3 className="mt-2 text-3xl font-extrabold">{product.name}</h3>
                  <p className="mt-4 leading-relaxed text-white/85">{product.description}</p>
                </div>
                <ul className="grid flex-1 gap-6 p-8 sm:grid-cols-2 sm:p-10">
                  {product.features.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="flex gap-4">
                      <div className={`h-fit rounded-lg p-2.5 ${styles.icon}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-700">{title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-navy-700/70">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
