import { motion } from 'framer-motion';
import { Clock, Crown, Globe, Heart, Mail, MapPin, MessageCircle, Phone, Scissors, Shield, Sparkles, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Super Quick',
      description: 'Pickup and delivery in 24-48 hours, anywhere in India',
    },
    {
      icon: Shield,
      title: 'Your Style, Your Way',
      description: 'Sleek narrow pleats, flowy broad ones, or trendy asymmetric twists',
    },
    {
      icon: Globe,
      title: 'Love Your Heirloom',
      description: 'Eco-friendly pins, no damage, good for 5+ wears',
    },
  ];

  const testimonials = [
    {
      name: 'Priya',
      location: 'Bangalore Bride',
      text: 'No more wedding chaos—my silk saree draped like a dream!',
      rating: 5,
    },
    {
      name: 'Aisha',
      location: 'New York',
      text: 'Total game-changer for my NRI wedding! Mumbai to NYC, flawless.',
      rating: 5,
    },
    {
      name: 'Meera',
      location: 'Chennai',
      text: 'Fluffy organza pleats? Diwali perfection!',
      rating: 5,
    },
  ];

  const sareeStyles = [
    {
      title: 'Pastel Organza',
      image: '/src/images/image1.jpeg',
      description: 'Light, airy, perfect for daytime events',
    },
    {
      title: 'Kanjivaram Fusion',
      image: '/src/images/image2.jpeg',
      description: 'Traditional meets contemporary',
    },
    {
      title: 'Slit Design',
      image: '/src/images/image3.jpeg',
      description: 'Bold and trendy for modern queens',
    },
    {
      title: 'Tissue Elegance',
      image: '/src/images/image4.jpeg',
      description: 'Shimmery perfection for special occasions',
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Book & Spill the Deets',
      description: 'Share your saree type, measurements, and vibe via website or WhatsApp',
      color: 'from-pink-500 to-red-400'
    },
    {
      icon: Truck,
      title: 'Pickup or Ship',
      description: 'We grab it from your door or guide easy shipping worldwide',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Scissors,
      title: 'Pro Pleating',
      description: 'Our experts craft perfect folds with eco-pins, good for 5+ wears',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Sparkles,
      title: 'Get It & Glow',
      description: 'Back in 24-48 hours, boxed with care guide. Slip it on—done!',
      color: 'from-purple-500 to-pink-400'
    }
  ];

  const services = [
    {
      name: 'Classic Pre-Pleating',
      description: 'Easy slip-on pleats—narrow or broad, you pick!',
      price: '₹300+',
      turnaround: '24 hours',
      icon: Scissors,
      color: 'from-amber-500 to-yellow-400',
      features: ['Narrow or broad pleats', 'All fabric types', 'Quick turnaround']
    },
    {
      name: 'Trendy Fusion Pleats',
      description: 'Asymmetric, fluffy, or slit styles with 2025\'s cool twists',
      price: '₹450+',
      turnaround: '48 hours',
      icon: Sparkles,
      color: 'from-amber-600 to-orange-500',
      features: ['Asymmetric designs', 'Fluffy organza', 'Slit styles']
    },
    {
      name: 'Bridal Express',
      description: 'Custom pallu, perfect fit, trial pins for big-day sparkle',
      price: '₹600+',
      turnaround: 'Same-day rush',
      icon: Crown,
      color: 'from-yellow-500 to-amber-500',
      features: ['Custom pallu', 'Trial pins', 'Same-day service']
    },
    {
      name: 'Eco-Replenish Kit',
      description: 'Pre-pleat + care kit for multiple wears',
      price: '₹400+',
      turnaround: '24 hours',
      icon: Heart,
      color: 'from-orange-500 to-red-500',
      features: ['Eco-friendly pins', 'Care guide', 'Multiple wears']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/src/images/hero.png)'
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Drape in a Minute,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">
                {' '}Shine Forever!
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Timeless Sarees, Zero Hassle with SareeGlow
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-xl px-12 py-4">
                Send Your Saree
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About SareeGlow</h2>
            <h3 className="text-2xl font-semibold text-amber-600 mb-6">
              Where Sarees Meet Effortless Glam
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Hey, love sarees but short on time? No stress! Our pre-pleating service turns your gorgeous sarees into ready-to-wear magic in minutes. 
              Perfect for weddings, parties, or that bold 2025 vibe. Be timeless, effortlessly!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Started in Coimbatore, we're not just a pre-pleating service—we're your shortcut to saree perfection! 
              From fluffy Kerala-style pleats to chic asymmetric cuts, our artisans mix old-school charm with new-age flair.
            </p>
            <Link to="/about">
              <Button variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Us?</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Carousel */}
      <section className="py-16 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/src/images/image1.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hot 2025 Styles</h2>
            <p className="text-xl text-gray-600">
              Rock pastel organzas, Kanjivaram fusions, or slit designs for that wow factor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sareeStyles.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {style.title}
                      </h3>
                      <p className="text-gray-200 text-sm">{style.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link to="/services">
                      <Button variant="outline" size="sm" className="w-full">
                        Pre-Pleat This!
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Brief */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-pleating that pops, just for you. Quick festival fix or bridal glow-up!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price and Time */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-500 font-medium">Price:</span>
                      <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Time:</span>
                      <span className="text-gray-700 font-semibold">{service.turnaround}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                      Choose This Service
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="px-8 py-4">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Brief */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              4 easy steps to saree bliss. No fuss, all fabulous!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/how-it-works">
              <Button variant="outline">
                See Detailed Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Women, Real Vibes</h2>
            <p className="text-xl text-gray-600">
              Join 5,000+ happy customers who love their pre-pleated sarees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Brief */}
      <section className="py-16 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/src/images/image4.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Pleat Something Stunning Together
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ping us—we reply in 2 hours, promise! Ready to transform your saree into effortless elegance?
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">hello@sareeglow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">+91 7708032077</span>
                  <span className="text-gray-700">+91 9442067037</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Kovai Pudur ,Sundakkamuthur ,Kuniyamuthur ,Coimbatore</span>
                </div>
              </div>

              <Link to="/contact">
                <Button size="lg">
                  Get Your Free Quote
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Saree Type (e.g., Silk Kanjivaram)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/src/images/border1.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to glow?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Join thousands of women who've discovered the magic of pre-pleated sarees
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;