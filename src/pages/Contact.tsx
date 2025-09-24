import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Contact = () => {
  // Contact form removed

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sareeglow.com',
      href: 'mailto:hello@sareeglow.com'
    },
    {
      icon: Phone,
      label: 'Phone/WhatsApp',
      value: '+91-7708032077',
      href: 'tel:+917708032077'
    },
    {
      icon: MapPin,
      label: 'Studio Address',
      value: 'Coimbatore Studio, 641010 ',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Sat, 9AM-7PM IST',
      href: '#'
    }
  ];

  // Removed unused services array

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
              Let's Pleat Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}Stunning Together
              </span>
            </h1>
            <p className="text-xl text-gray-700">
              Ping us—we reply in 2 hours, promise!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get in Touch Left */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.label}</p>
                            {item.href !== '#' ? (
                              <a 
                                href={item.href}
                                className="text-gray-600 hover:text-amber-600 transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-600">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Map Right, Larger */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card className="p-0 overflow-hidden w-full h-[400px]">
                  <iframe
                    title="Coimbatore Map"
                    src="https://www.google.com/maps?q=Coimbatore+641010+India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need it Super Fast?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Book a consultation slot directly or reach us on WhatsApp for instant responses!
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Book Consultation
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;