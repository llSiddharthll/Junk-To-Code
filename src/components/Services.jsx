import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Workflow, Layers, Brain, 
  Database, ShoppingCart, Rocket,
  ArrowRight, Zap, Sparkles, Shield,
  Terminal, Code2, Server, Palette
} from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Cpu,
      title: 'Web Applications & Dashboards',
      description: 'High-performance React applications with real-time data visualization and intuitive interfaces.',
      features: ['Real-time analytics', 'Interactive dashboards', 'PWA support', 'Responsive design'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      tech: ['React', 'Next.js', 'TypeScript', 'D3.js']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation & Tools',
      description: 'Custom automation solutions that streamline operations and boost team productivity.',
      features: ['Process automation', 'API integrations', 'Custom tooling', 'Reporting systems'],
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      tech: ['Python', 'Node.js', 'Airflow', 'Docker']
    },
    {
      icon: Layers,
      title: 'Full-Stack Product Development',
      description: 'End-to-end development from concept to deployment and maintenance.',
      features: ['Architecture design', 'Scalable backends', 'CI/CD pipelines', 'Monitoring setup'],
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20',
      tech: ['MERN Stack', 'PostgreSQL', 'AWS/Azure', 'Kubernetes']
    },
    {
      icon: Brain,
      title: 'AI / ML Prototypes & Integrations',
      description: 'Intelligent solutions leveraging cutting-edge AI and machine learning technologies.',
      features: ['ML model deployment', 'LLM integrations', 'Computer vision', 'Predictive analytics'],
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain']
    },
    {
      icon: Database,
      title: 'REST APIs & Backend Systems',
      description: 'Scalable, secure backend architectures with comprehensive API design.',
      features: ['GraphQL/REST APIs', 'Microservices', 'Database design', 'Authentication systems'],
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      tech: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & CMS Solutions',
      description: 'Custom commerce platforms and content management systems tailored to your needs.',
      features: ['Payment integration', 'Inventory management', 'Admin dashboard', 'SEO optimization'],
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      tech: ['Shopify API', 'Stripe', 'Headless CMS', 'React']
    },
    {
      icon: Rocket,
      title: 'Demo Apps & MVP Prototypes',
      description: 'Rapid prototyping to validate ideas and secure funding with polished MVPs.',
      features: ['Lean development', 'User testing', 'Iterative design', 'Investor-ready demos'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      tech: ['React Native', 'Firebase', 'Figma', 'Vercel']
    }
  ];

  const stats = [
    { icon: Zap, label: 'Avg. Delivery Time', value: '4-8 weeks' },
    { icon: Shield, label: 'Code Coverage', value: '90%+' },
    { icon: Terminal, label: 'Projects Completed', value: '50+' },
    { icon: Sparkles, label: 'Client Satisfaction', value: '100%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hover: { 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900/50 dark:to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800 mb-4">
            <Server className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wider">
              SPECIALIZED ENGINEERING
            </span>
          </div>
          <h2 className="font-hirosaki text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Engineering</span>
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium software development services for technical leaders who demand 
            <span className="font-bold text-primary"> quality, scalability, and innovation</span>.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-800/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative bg-white dark:bg-black rounded-3xl p-8 border ${service.borderColor} hover:border-primary/40 transition-all duration-500 overflow-hidden h-full`}>
                {/* Background glow */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                  />
                )}

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </motion.div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Key Features:
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-black/20 dark:bg-white/20 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex items-center space-x-2 text-primary font-medium group/cta">
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-8 h-8 ${service.bgColor} transform rotate-45 translate-x-4 -translate-y-4`} />
                </div>
              </div>

              {/* Hover effect line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Ready to transform your technical vision into exceptional software?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-all duration-300 inline-flex items-center space-x-3 shadow-lg shadow-primary/25"
            >
              <span className="text-lg">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;