// src/components/Philosophy.jsx
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const principles = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every line of code serves a purpose. We build systems that are maintainable, testable, and scalable from day one.',
  },
  {
    icon: Users,
    title: 'Founder-Led',
    description: 'Direct involvement from technical founders ensures deep understanding and uncompromised quality.',
  },
  {
    icon: Zap,
    title: 'Velocity & Quality',
    description: 'Rapid iteration without sacrificing technical excellence. We move fast but never break things.',
  },
  {
    icon: Shield,
    title: 'Trust Through Transparency',
    description: 'Clear communication, regular updates, and complete visibility into the development process.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Built on <span className="text-accent">Principles</span>,<br />
              Not Promises
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We approach software as an engineering discipline, not just a service. 
              Our methodology combines academic rigor with decades of practical experience.
            </p>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8">
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-accent to-transparent"
                      style={{ width: `${Math.random() * 60 + 40}%` }}
                    />
                    <div className="text-sm text-gray-400 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-8 right-8">
                <div className="text-right">
                  <div className="text-accent text-2xl font-bold">100%</div>
                  <div className="text-gray-400 text-sm">Code Coverage</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}