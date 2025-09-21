import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import { FAQ } from '../types';

const FAQPage = () => {
  // Removed searchTerm state
  
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What sarees can you pleat?',
      answer: 'All kinds—cotton to heavy Kanjivaram. We work with silk, chiffon, georgette, organza, tissue, and more. We skip super-blingy ones with heavy embellishments for pin safety, but most sarees work perfectly with our process.'
    },
    {
      id: '2',
      question: 'How much does pre-pleating cost?',
      answer: 'From ₹300 for classic pre-pleating. Full pricing depends on your specific requirements - get your personalized quote on our services page. No sneaky fees, everything is transparent!'
    },
    {
      id: '3',
      question: 'What are the 2025 trending styles you offer?',
      answer: 'Slit fusions, pastel pleats, asymmetric twists, fluffy Kerala-style pleats, and tissue saree light pleats. Book now for wedding season to get the latest trendy styles!'
    },
    {
      id: '4',
      question: 'Do you offer returns or guarantees?',
      answer: '100% satisfaction guaranteed or we re-pleat free! If you\'re not happy with the results, we\'ll redo it at no extra cost. Your happiness is our priority.'
    },
    {
      id: '5',
      question: 'Are your methods eco-friendly?',
      answer: 'Oh yeah! We use biodegradable pins that leave no marks, recyclable packaging, and sustainable methods. Good for your saree and the planet.'
    },
    {
      id: '6',
      question: 'How long do the pleats last?',
      answer: 'Our eco-pins are designed for 5+ wears with proper care. Each order comes with a detailed care guide to help you maintain the pleats.'
    },
    {
      id: '7',
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to US, UK, Australia, and many other countries. Trackable shipping with duties covered. Perfect for NRI festivities and special occasions.'
    },
    {
      id: '8',
      question: 'Can I adjust the pleats after receiving them?',
      answer: 'Absolutely! The pleats stay put but untuck easily. You can adjust the draping style while keeping the pleated portion intact.'
    },
    {
      id: '9',
      question: 'What if my saree gets damaged?',
      answer: 'Our eco-pins are completely safe and leave no marks. We have insurance coverage for any unlikely damage, and our artisans are trained to handle delicate fabrics with utmost care.'
    },
    {
      id: '10',
      question: 'How do I measure myself for the perfect fit?',
      answer: 'We\'ll guide you through it! Send measurements via our app or WhatsApp, and we provide detailed instructions. Our team can also help you measure correctly over video call if needed.'
    }
  ];

  // Removed filteredFAQs, render all faqs

  // Removed topQueries array

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Got Qs? We've Got
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}Fab Answers
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Find everything you need to know about our pre-pleating service
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                      <Disclosure.Button className="flex justify-between items-center w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900 text-lg">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`${
                            open ? 'rotate-180' : ''
                          } w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-4`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          {/* No search, so no empty state needed */}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Wondering?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! Get in touch and we'll answer any questions you have.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="inline-flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Email Support
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;