import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      quote: "Finally, AI that works for my business without risking client data.",
      industry: "Business"
    },
    {
      quote: "PAI3 is HIPAA-safe AI for healthcare.",
      industry: "Healthcare"
    },
    {
      quote: "Now my AI serves me — not Big Tech.",
      industry: "Personal Privacy"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Trusted by <span className="text-green-500">Professionals</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20"
            >
              <Quote className="h-8 w-8 text-green-500 mb-4" />
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                "{story.quote}"
              </p>
              <div className="text-green-500 font-semibold">{story.industry}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;