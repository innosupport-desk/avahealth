const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform healthcare with us?
          </p>
          <button
            className="mt-6 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/request-service'}
          >
            Get in touch
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          {/* All contact info and map removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default Contact;