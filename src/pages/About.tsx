import { motion } from 'framer-motion';
import { Globe, Heart, Leaf } from 'lucide-react';
import Card from '../components/UI/Card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Dedicated Craftsmanship',
      description: 'Expert artisans with years of experience in traditional and modern pleating techniques',
      image: '/src/images/image1.jpeg'
    },
    {
      icon: Leaf,
      title: 'Your Satisfaction, Our Success',
      description: 'Happy clients wearing their perfectly pleated sarees with confidence and elegance',
      image: '/src/images/image2.jpeg'
    },
    {
      icon: Globe,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly packaging and biodegradable materials for conscious fashion choices',
      image: '/src/images/image3.jpeg'
    }
  ];

  const commitments = [
    {
      title: 'Inclusive Fit',
      description: 'Tailored pleating for all body types—tiny, curvy, or plus-size. Every woman deserves perfect draping.'
    },
    {
      title: 'Sustainable Practices',
      description: 'Biodegradable pins and reusable packaging for an eco-friendly approach to fashion.'
    },
    {
      title: 'Wide Reach',
      description: 'Serving Coimbatore locations and offering nationwide courier services across India.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/src/images/image5.jpeg)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pleating Happiness,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                {' '}One Saree at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-700 font-medium">
              Where Sarees Meet Effortless Glam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founded in 2025 in Coimbatore, Diva's Pre-Pleating is more than a service—it's a commitment to effortless style. In today's fast-paced world, we dedicate ourselves to enhancing your saree's beauty and functionality, preserving its fabric and heritage with every fold. From traditional pleats to contemporary designs
              , our skilled team blends expertise with innovation to meet your needs.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From fluffy Kerala-style pleats to chic asymmetric cuts for city brides, our artisans mix old-school 
              charm with new-age flair. Your saree, your rules—we make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vow Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vow</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600">{commitment.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <value.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Mission */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We're a women-led crew obsessed with making you shine
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A perfect pleat? It's your freedom to slay!
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-lg font-medium text-amber-600 mb-2">Fun Fact:</p>
              <p className="text-gray-700">
                Pre-pleated sarees are taking over wardrobes worldwide! Jump on the effortless trend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;