import { motion } from 'framer-motion';
import { Clock, Smartphone, Star, Truck } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      name: 'Classic Pre-Pleating',
      description: 'Easy slip-on pleats—narrow or broad, you pick!',
      idealFor: 'Work, casual events',
      turnaround: '24 hours',
      price: '₹300+'
    },
    {
      id: '2',
      name: 'Trendy Fusion Pleats',
      description: 'Asymmetric, fluffy, or slit styles with 2025\'s cool twists',
      idealFor: 'Weddings, parties',
      turnaround: '48 hours',
      price: '₹450+'
    },
    {
      id: '3',
      name: 'Bridal Express',
      description: 'Custom pallu, perfect fit, trial pins for that big-day sparkle',
      idealFor: 'Wedding magic',
      turnaround: 'Same-day rush',
      price: '₹600+'
    },
    {
      id: '4',
      name: 'Eco-Replenish Kit',
      description: 'Pre-pleat + care kit (pins, pouch) for multiple wears',
      idealFor: 'Eco-chic queens',
      turnaround: '24 hours',
      price: '₹400+'
    }
  ];

  const addOns = [
    {
      title: 'Doorstep pickup/delivery',
      description: 'Free in local area, ₹100 elsewhere'
    },
    {
      title: 'Virtual Sneak Peek',
      description: 'AR try-on coming soon for global fans!'
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
              Pre-Pleating That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}Pops
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-4">Just for You</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick festival fix or bridal glow-up, our saree pre-pleating service saves your time and slays the style. 
              Starts at ₹300, with rush options!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fab Offerings</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-600">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Ideal for: {service.idealFor}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      <span>Turnaround: {service.turnaround}</span>
                    </div>
                  </div>
                  
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">
                      Choose This Service
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Make It Yours */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Make It Yours
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Send measurements via app or WhatsApp. We nail silks, georgettes, even tricky tissues—no saree too fussy!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-Ons</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? (
                      <Truck className="w-6 h-6 text-white" />
                    ) : (
                      <Smartphone className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {addon.title}
                  </h3>
                  <p className="text-gray-600">{addon.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Tip */}
  <section className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Trend Tip</h2>
            <p className="text-xl text-[#6B3F19] mb-8">
              For 2025's sheer vibe, try tissue sarees with light pleats—pure magic.
            </p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                Grab Your Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;