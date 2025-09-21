import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Globe } from 'lucide-react';
import Card from '../components/UI/Card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Heart',
      description: 'Every pleat is made with love and attention to detail by our skilled artisans',
      image: '/src/images/image1.jpeg'
    },
    {
      icon: Leaf,
      title: 'Green Today, Fab Tomorrow',
      description: 'Biodegradable pins and reusable methods to keep it eco-chic',
      image: '/src/images/image2.jpeg'
    },
    {
      icon: Globe,
      title: 'Your Smile, Our Win',
      description: 'Making women worldwide shine effortlessly in their sarees',
      image: '/src/images/image3.jpeg'
    }
  ];

  const commitments = [
    {
      title: 'For Every You',
      description: 'Pleats that fit every body—petite, curvy, or queen-size'
    },
    {
      title: 'Green & Gorgeous',
      description: 'Biodegradable pins, reusable methods to keep it eco-chic'
    },
    {
      title: 'Global Love',
      description: 'India or overseas, we ship seamless joy for NRI festivities'
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
              Started in 2023 in Mumbai, we're not just a pre-pleating service—we're your shortcut to saree perfection! 
              In 2025's fast world, we slow down to cherish your saree's magic: its flow, its story, its vibe.
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