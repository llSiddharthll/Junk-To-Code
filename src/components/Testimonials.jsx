import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';
import {
    Quote, Star, ChevronLeft, ChevronRight,
    Building, User, Calendar, Award,
    Sparkles, Zap, CheckCircle
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const swiperRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            quote: "JunkToCode transformed our legacy system into a modern, scalable platform. Their engineering approach eliminated years of technical debt while maintaining 100% uptime during migration.",
            author: "Alex Morgan",
            role: "CTO",
            company: "TechScale Inc.",
            rating: 5,
            project: "Enterprise Platform Migration",
            duration: "6 months",
            results: [
                "40% performance improvement",
                "99.9% uptime maintained",
                "Reduced maintenance costs by 60%"
            ],
            avatarColor: "bg-blue-500/20",
            textColor: "text-blue-600 dark:text-blue-400"
        },
        {
            id: 2,
            quote: "Working with a founder-led studio made all the difference. They delivered a complex workflow automation system that processes 10,000+ transactions daily with zero errors.",
            author: "Sarah Chen",
            role: "Head of Product",
            company: "InnovateLabs",
            rating: 5,
            project: "Workflow Automation Platform",
            duration: "4 months",
            results: [
                "10,000+ daily transactions",
                "Zero critical errors",
                "95% process automation"
            ],
            avatarColor: "bg-green-500/20",
            textColor: "text-green-600 dark:text-green-400"
        },
        {
            id: 3,
            quote: "They delivered our MVP in record time without compromising code quality. The clean, maintainable architecture allowed us to scale from 0 to 50K users in 3 months.",
            author: "Marcus Rodriguez",
            role: "Founder",
            company: "StartupXYZ",
            rating: 5,
            project: "SaaS MVP Development",
            duration: "3 months",
            results: [
                "50K users in 3 months",
                "500ms average response time",
                "Seamless scaling to 10x load"
            ],
            avatarColor: "bg-purple-500/20",
            textColor: "text-purple-600 dark:text-purple-400"
        },
        {
            id: 4,
            quote: "Professional, transparent, and technically superb. They built a custom AI integration that improved our prediction accuracy by 35% while reducing inference time by 70%.",
            author: "James Wilson",
            role: "Engineering Director",
            company: "EnterpriseCorp",
            rating: 5,
            project: "AI Integration System",
            duration: "5 months",
            results: [
                "35% accuracy improvement",
                "70% faster inference",
                "Real-time processing enabled"
            ],
            avatarColor: "bg-amber-500/20",
            textColor: "text-amber-600 dark:text-amber-400"
        },
        {
            id: 5,
            quote: "Their API architecture is exceptional. We needed a high-throughput system handling 1M+ requests daily, and they delivered with comprehensive documentation and monitoring.",
            author: "Lisa Thompson",
            role: "VP Engineering",
            company: "DataFlow Systems",
            rating: 5,
            project: "High-Volume API Platform",
            duration: "4 months",
            results: [
                "1M+ daily requests",
                "99.99% availability",
                "< 50ms p95 latency"
            ],
            avatarColor: "bg-cyan-500/20",
            textColor: "text-cyan-600 dark:text-cyan-400"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const ProgressIndicator = () => {
        return (
            <div className="flex justify-center space-x-2 mb-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            swiperRef.current?.swiper.slideTo(index);
                            setActiveIndex(index);
                        }}
                        className="relative group"
                    >
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                            ? 'bg-primary w-8'
                            : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'
                            }`} />
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Testimonial {index + 1}
                        </span>
                    </button>
                ))}
            </div>
        );
    };

    const StatBadge = ({ icon: Icon, label, value, color }) => (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
            <div className={`p-2 rounded-lg ${color}`}>
                <Icon className="w-4 h-4" />
            </div>
            <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                <div className="text-sm font-medium">{value}</div>
            </div>
        </motion.div>
    );

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                        TRUSTED BY INDUSTRY LEADERS
                    </span>
                    <h2 className="font-hirosaki text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Technical Excellence,<br />
                        <span className="text-gradient">Proven Results</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what technical leaders have to say about working with us.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Background Decoration */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl" />

                    {/* Progress Indicator */}
                    <ProgressIndicator />

                    {/* Main Swiper */}
                    <div className="relative max-w-5xl mx-auto">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={isAutoPlaying ? { delay: 5000, disableOnInteraction: false } : false}
                            navigation={{
                                prevEl: '.testimonial-prev',
                                nextEl: '.testimonial-next',
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            autoHeight={false}
                            className="pb-12"
                            breakpoints={{
                                1024: {
                                    slidesPerView: 1.2,
                                }
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className='min-h-full flex'>
                                    <motion.div
                                        layout
                                        className="bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[480px] h-full"
                                    >
                                        <div className="grid lg:grid-cols-2 min-h-[inherit]">
                                            {/* Left Column - Testimonial Content */}
                                            <div className="p-8 lg:p-10 flex flex-col min-h-full">
                                                <div className="mb-6">
                                                    <Quote className="w-12 h-12 text-primary/30 mb-4" />
                                                    <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                                                        "{testimonial.quote}"
                                                    </p>
                                                </div>

                                                {/* Author Info */}
                                                <div className="mt-auto">
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        <div className={`w-14 h-14 rounded-full ${testimonial.avatarColor} flex items-center justify-center`}>
                                                            <User className={`w-7 h-7 ${testimonial.textColor}`} />
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center space-x-2">
                                                                <h3 className="text-xl font-bold">{testimonial.author}</h3>
                                                                <div className="flex">
                                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                                                <span className="font-medium">{testimonial.role}</span>
                                                                <span className="text-gray-400">•</span>
                                                                <span>{testimonial.company}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column - Project Details */}
                                            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 min-h-full">
                                                <div className="mb-6">
                                                    <div className="inline-flex items-center space-x-2 mb-4">
                                                        <Zap className="w-5 h-5 text-primary" />
                                                        <span className="text-sm font-medium text-primary">PROJECT HIGHLIGHTS</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold mb-2">{testimonial.project}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400">Completed in {testimonial.duration}</p>
                                                </div>

                                                {/* Results */}
                                                <div className="space-y-3 mb-8">
                                                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Key Results:
                                                    </div>
                                                    {testimonial.results.map((result, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center space-x-3"
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                                            <span className="text-gray-700 dark:text-gray-300">{result}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <StatBadge
                                                        icon={Building}
                                                        label="Company"
                                                        value={testimonial.company}
                                                        color="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                                    />
                                                    <StatBadge
                                                        icon={Calendar}
                                                        label="Timeline"
                                                        value={testimonial.duration}
                                                        color="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Stats Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { label: 'Projects Delivered', value: '50+', icon: Award },
                                { label: 'Client Satisfaction', value: '100%', icon: Star },
                                { label: 'On-Time Delivery', value: '98%', icon: Calendar },
                                { label: 'Repeat Clients', value: '85%', icon: User }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="text-center p-4 bg-white dark:bg-black rounded-xl border border-primary dark:border-primary"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;