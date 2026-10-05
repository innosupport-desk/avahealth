import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe, ArrowRight, type LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  label: string;
  lines: { text: string; href?: string }[];
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    lines: [{ text: 'hello@ava-health.org', href: 'mailto:hello@ava-health.org' }],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: [
      { text: '(+234) 814 311 5485', href: 'tel:+2348143115485' },
      { text: '(+234) 907 572 9987', href: 'tel:+2349075729987' },
    ],
  },
  {
    icon: MapPin,
    label: 'Office',
    lines: [{ text: 'Lagos, Nigeria' }],
  },
  {
    icon: Globe,
    label: 'Website',
    lines: [{ text: 'www.ava-health.org', href: 'https://www.ava-health.org' }],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <span className="eyebrow">Contact Us</span>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-700 sm:text-4xl">
              Let&apos;s talk about your operations
            </h2>
            <div className="gold-rule" />
            <p className="text-lg text-navy-700/75">
              Whether you run a clinic, a hospital, a corporate health programme or a public
              health facility, we&apos;d like to hear what you&apos;re working on.
            </p>
            <Link to="/request-service" className="btn-primary px-8 py-4">
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {contactItems.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="rounded-2xl border border-navy-100 bg-cream p-6">
                <div className="mb-4 w-fit rounded-xl bg-white p-3 shadow-sm">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-navy-700/60">
                  {label}
                </p>
                {lines.map((line) =>
                  line.href ? (
                    <a
                      key={line.text}
                      href={line.href}
                      className="block break-words text-lg font-semibold text-navy-700 transition-colors hover:text-brand-600"
                      {...(line.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {line.text}
                    </a>
                  ) : (
                    <p key={line.text} className="text-lg font-semibold text-navy-700">
                      {line.text}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
