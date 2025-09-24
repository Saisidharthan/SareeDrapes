import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Scissors, Sparkles, Truck } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Image4 from '../assets/image4.jpeg';
import Image5 from '../assets/image5.jpeg';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Book & Spill the Deets',
      description: 'Share your saree type (Kanjivaram? Chiffon?), measurements, and vibe via website, app, or WhatsApp. Free chat!',
      color: 'from-amber-500 to-orange-400'
    },
    {
      icon: Truck,
      title: 'Pickup or Ship',
      description: 'We grab it from your door (local) or guide easy shipping (India/world). Safe packing, we\'ve got you.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Scissors,
      title: 'Pro Pleating',
      description: 'Our experts craft perfect folds with eco-pins. Secure, removable, good for 5+ wears.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Sparkles,
      title: 'Get It & Glow',
      description: 'Back in 24-48 hours, boxed with a care guide. Slip it on—done in a minute!',
      color: 'from-purple-500 to-pink-400'
    }
  ];

  const faqs = [
    {
      question: 'Will it hurt my saree?',
      answer: 'Nope! Eco-pins leave no marks, we swear. Our specially designed pins are completely safe for all fabrics.'
    },
    {
      question: 'Global shipping?',
      answer: 'Yup! Trackable to US/UK/Aus, duties covered. We handle all the logistics so you don\'t have to worry.'
    },
    {
      question: 'Can I tweak it?',
      answer: 'Totally—pleats stay put but untuck easy. You can adjust the draping style while keeping the pleats intact.'
    },
    {
      question: 'How long do the pleats last?',
      answer: 'Our pleats are designed to last 5+ wears with proper care. Each order comes with detailed care instructions.'
    }
  ];

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
              4 Easy Steps to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}Saree Bliss
              </span>
            </h1>
            <p className="text-xl text-gray-700">
              No fuss, all fabulous! Our pre-pleating process fits your busy life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="text-center h-full">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <img
                  src={Image4}
                  alt="Before - Messy saree"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">BEFORE: Chaos</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src={Image5}
                  alt="After - Perfect pleated saree"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/40 to-transparent rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">AFTER: Chic</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From chaos to chic in a snap!
            </h2>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Kick Off Step 1
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`${
                            open ? 'rotate-180' : ''
                          } w-5 h-5 text-gray-500 transition-transform duration-200`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;