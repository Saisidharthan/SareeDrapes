import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { Testimonial } from '../types';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Aisha Patel',
      location: 'New York, USA',
      rating: 5,
      text: 'Total game-changer for my NRI wedding! Mumbai to NYC, flawless. The pleats stayed perfect throughout the 8-hour celebration.',
      image: '/src/images/image1.jpeg'
    },
    {
      id: '2',
      name: 'Meera Krishnan',
      location: 'Chennai, India',
      rating: 5,
      text: 'Fluffy organza pleats? Diwali perfection! My mother-in-law was so impressed, she asked for the service details.',
      image: '/src/images/image2.jpeg'
    },
    {
      id: '3',
      name: 'Lakshmi Iyer',
      location: 'Hyderabad, India',
      rating: 5,
      text: 'Mom of two, no time—this fit my curves and saved my day! The kids couldn\'t mess up my pleats no matter how they tried.',
      image: '/src/images/image3.jpeg'
    },
    {
      id: '4',
      name: 'Priya Singh',
      location: 'Bangalore, India',
      rating: 5,
      text: 'No more wedding chaos—my silk saree draped like a dream! The pre-pleating made me feel like a queen.',
      image: '/src/images/image4.jpeg'
    },
    {
      id: '5',
      name: 'Riya Sharma',
      location: 'London, UK',
      rating: 5,
      text: 'International shipping was seamless! My Diwali party saree arrived perfectly pleated. Everyone asked where I got it done.',
      image: '/src/images/image5.jpeg'
    },
    {
      id: '6',
      name: 'Kavitha Reddy',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'The eco-friendly approach won my heart. Beautiful pleats that didn\'t harm my grandmother\'s vintage saree.',
      image: '/src/images/image1.jpeg'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '50+', label: 'Cities Served' },
    { number: '10,000+', label: 'Sarees Pleated' }
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
              Women Raving About Their
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}Pre-Pleated Sparkle
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />
                  
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl p-8 text-white">
              <Quote className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <p className="text-2xl font-medium mb-6">
                "SareeGlow transformed my wedding experience. I felt confident and beautiful throughout the entire celebration!"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="/src/images/image2.jpeg"
                  alt="Featured customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">Aditi Mehta</p>
                  <p className="opacity-90">Mumbai Bride</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join 5,000+ Happy Divas
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to share your SareeGlow story?
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Tell Your Story
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Book Your Service
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;