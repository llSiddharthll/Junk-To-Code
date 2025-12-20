import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, PenTool, Code, TestTube, Rocket, Users,
    ArrowRight, CheckCircle, Clock, Zap, Terminal, Layers,
    ChevronRight, Play, Pause, FastForward, Rewind,
    BarChart3, Cpu, Shield, GitBranch
} from 'lucide-react';

const Process = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);

    const phases = [
        {
            id: 1,
            icon: Search,
            title: 'Discovery & Strategy',
            subtitle: 'Deep Technical Analysis',
            description: 'We conduct comprehensive technical discovery sessions, analyzing requirements, constraints, and success metrics. This phase includes stakeholder interviews, competitive analysis, and feasibility studies.',
            duration: '1-2 Weeks',
            deliverables: [
                'Technical Requirements Document',
                'Architecture Proposal',
                'Technology Stack Selection',
                'Project Roadmap'
            ],
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
            stats: [
                { label: 'Stakeholder Meetings', value: '5-8' },
                { label: 'Technical Documents', value: '3-5' },
                { label: 'Architecture Diagrams', value: '2-3' }
            ],
            animation: 'search'
        },
        {
            id: 2,
            icon: PenTool,
            title: 'Architecture & Design',
            subtitle: 'System Architecture Design',
            description: 'Detailed technical planning including system architecture, database design, API specifications, and UX/UI wireframes. We create comprehensive documentation and select optimal technology stack.',
            duration: '1-2 Weeks',
            deliverables: [
                'System Architecture Diagrams',
                'Database Schema Design',
                'API Specifications',
                'UI/UX Wireframes'
            ],
            color: 'from-emerald-500 to-green-500',
            bgColor: 'bg-gradient-to-br from-emerald-500/10 to-green-500/10',
            stats: [
                { label: 'Architecture Diagrams', value: '4-6' },
                { label: 'API Endpoints', value: '20-50' },
                { label: 'Database Tables', value: '10-30' }
            ],
            animation: 'design'
        },
        {
            id: 3,
            icon: Code,
            title: 'Agile Development',
            subtitle: 'Iterative Engineering',
            description: 'Implementation through 2-week sprints with daily standups, code reviews, and continuous integration. We follow test-driven development and maintain 90%+ code coverage.',
            duration: '4-12 Weeks',
            deliverables: [
                'Weekly Sprint Demos',
                'Source Code Repository',
                'Technical Documentation',
                'Integration Tests'
            ],
            color: 'from-violet-500 to-purple-500',
            bgColor: 'bg-gradient-to-br from-violet-500/10 to-purple-500/10',
            stats: [
                { label: 'Sprint Cycles', value: '2-6' },
                { label: 'Code Reviews', value: 'Daily' },
                { label: 'Test Coverage', value: '90%+' }
            ],
            animation: 'code'
        },
        {
            id: 4,
            icon: TestTube,
            title: 'Quality Assurance',
            subtitle: 'Comprehensive Testing',
            description: 'Rigorous testing including unit, integration, performance, and security audits. We conduct load testing, penetration testing, and accessibility compliance checks.',
            duration: '1-2 Weeks',
            deliverables: [
                'Test Reports & Metrics',
                'Performance Benchmarks',
                'Security Audit Report',
                'Bug Fix Logs'
            ],
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10',
            stats: [
                { label: 'Test Cases', value: '500-2000' },
                { label: 'Performance Tests', value: '10-20' },
                { label: 'Security Scans', value: '5-10' }
            ],
            animation: 'test'
        },
        {
            id: 5,
            icon: Rocket,
            title: 'Deployment',
            subtitle: 'Production Launch',
            description: 'Zero-downtime deployment with comprehensive monitoring setup. We configure CI/CD pipelines, set up logging, and provide launch support.',
            duration: '1 Week',
            deliverables: [
                'Production Deployment',
                'CI/CD Pipeline',
                'Monitoring Dashboard',
                'Launch Documentation'
            ],
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10',
            stats: [
                { label: 'Deployment Stages', value: '3-4' },
                { label: 'Monitoring Metrics', value: '50-100' },
                { label: 'CI/CD Jobs', value: '10-20' }
            ],
            animation: 'deploy'
        },
        {
            id: 6,
            icon: Users,
            title: 'Support & Scale',
            subtitle: 'Ongoing Excellence',
            description: 'Continuous maintenance, performance optimization, and scaling strategies. We provide regular health checks, updates, and team training.',
            duration: 'Ongoing',
            deliverables: [
                'Maintenance Plan',
                'Performance Reports',
                'Scaling Strategy',
                'Knowledge Transfer'
            ],
            color: 'from-cyan-500 to-teal-500',
            bgColor: 'bg-gradient-to-br from-cyan-500/10 to-teal-500/10',
            stats: [
                { label: 'Health Checks', value: 'Monthly' },
                { label: 'Performance Reviews', value: 'Quarterly' },
                { label: 'Team Training', value: 'As Needed' }
            ],
            animation: 'support'
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setActivePhase((prev) => (prev + 1) % phases.length);
            }, 4000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, phases.length]);

    const handlePhaseClick = (index) => {
        setActivePhase(index);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    };

    const handlePrev = () => {
        setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    };

    const handleNext = () => {
        setActivePhase((prev) => (prev + 1) % phases.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const floatingElementVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const PhaseVisualization = ({ phase }) => {
        const renderAnimation = () => {
            switch (phase.animation) {
                case 'search':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20"
                            />
                            <Search className="absolute inset-0 m-auto w-20 h-20 text-blue-500" />
                        </div>
                    );
                case 'design':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.div
                                animate={{
                                    borderRadius: ["30%", "50%", "30%"],
                                    rotate: 360
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-20"
                            />
                            <div className="grid grid-cols-2 gap-2 absolute inset-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                        className="bg-emerald-500/30 rounded"
                                    />
                                ))}
                            </div>
                        </div>
                    );
                case 'code':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.code
                                animate={{ y: [0, -100, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute inset-0 text-xs font-mono text-violet-500 opacity-50 flex items-center justify-center"
                            >
                                {`function engineerExcellence() {\n  return quality * innovation;\n}`}
                            </motion.code>
                            <motion.div
                                animate={{ height: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute right-0 top-0 w-1 bg-gradient-to-b from-violet-500 to-purple-500"
                            />
                        </div>
                    );
                case 'test':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-amber-500/30"
                            />
                            <div className="absolute inset-8 flex items-center justify-center">
                                <TestTube className="w-20 h-20 text-amber-500" />
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-10"
                            />
                        </div>
                    );
                case 'deploy':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Rocket className="w-20 h-20 text-pink-500" />
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-10"
                            />
                        </div>
                    );
                case 'support':
                    return (
                        <div className="relative w-40 h-40">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
                            />
                            <div className="absolute inset-8 flex items-center justify-center">
                                <Users className="w-20 h-20 text-cyan-500" />
                            </div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 opacity-10"
                            />
                        </div>
                    );
                default:
                    return (
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            <Code className="w-20 h-20 text-primary" />
                        </div>
                    );
            }
        };

        return (
            <div className="relative">
                {renderAnimation()}
            </div>
        );
    };

    return (
        <section id="process" className="relative min-h-screen py-32 overflow-hidden">
            {/* Background - Tech grid with particles */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                {/* Animated particles */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + 'vw',
                            y: Math.random() * 100 + 'vh',
                            opacity: 0
                        }}
                        animate={{
                            x: Math.random() * 100 + 'vw',
                            y: Math.random() * 100 + 'vh',
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                    />
                ))}
            </div>

            {/* Floating tech elements */}
            <motion.div
                variants={floatingElementVariants}
                initial="initial"
                animate="animate"
                className="absolute top-1/4 left-10 text-primary/20 hidden lg:block"
            >
                <Terminal className="w-24 h-24" />
            </motion.div>
            <motion.div
                variants={floatingElementVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute bottom-1/4 right-10 text-primary/20 hidden lg:block"
            >
                <Layers className="w-24 h-24" />
            </motion.div>

            <div className="container-custom relative z-10">
                {/* Header with interactive controls */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >

                    <div className="inline-flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-white/80 tracking-widest">
                            ENGINEERING PROCESS
                        </span>
                    </div>

                    <h2 className="font-hirosaki text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="block">The</span>
                        <span className="text-gradient">
                            Engineering Blueprint
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                        A transparent, technically sophisticated process designed for leaders who demand
                        <span className="font-bold text-primary"> precision, scalability, and excellence</span> in software engineering.
                    </p>
                </motion.div>

                {/* Interactive Process Timeline */}
                <div className="relative">
                    {/* Main visualization area */}
                    <div className="relative h-100 md:h-125 lg:h-150 mb-20 mt-32 md:mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center px-4"
                            >
                                {/* Phase visualization */}
                                <div className="lg:w-2/5 flex justify-center mb-8 lg:mb-0">
                                    <div className="relative">
                                        <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl" />
                                        <PhaseVisualization phase={phases[activePhase]} />
                                    </div>
                                </div>

                                {/* Phase details */}
                                <div className="lg:w-3/5 lg:pl-8 xl:pl-16 text-center lg:text-left">
                                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 ${phases[activePhase].bgColor}`}>
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
                                        <span className="text-sm font-medium text-white">
                                            PHASE {phases[activePhase].id}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {phases[activePhase].title}
                                    </h3>

                                    <div className="text-lg md:text-xl text-primary mb-4">
                                        {phases[activePhase].subtitle}
                                    </div>

                                    <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                        {phases[activePhase].description}
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                                        {phases[activePhase].stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-xs md:text-sm text-gray-400 px-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Phase navigation */}
                    <div className="relative">
                        {/* Progress line */}
                        <div className="absolute left-4 right-4 md:left-0 md:right-0 top-1/2 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

                        {/* Phase dots and controls */}
                        <div
                            className="relative flex justify-between items-center"
                        >

                            <button
                                onClick={handlePrev}
                                className="col-start-1 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 z-20 mb-6"
                            >
                                <Rewind className="w-4 h-4 md:w-6 md:h-6 text-white" />
                            </button>

                            <div className="flex space-x-2 md:space-x-4 lg:space-x-32 px-2 md:px-0">
                                {phases.map((phase, index) => (
                                    <motion.button
                                        key={phase.id}
                                        onClick={() => handlePhaseClick(index)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="col-start-[var(--col)] flex flex-col items-center"
                                        style={{ '--col': index + 2 }}
                                    >
                                        <motion.div
                                            animate={index === activePhase ? { scale: [1, 1.2, 1] } : {}}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1 md:mb-2 transition-all duration-300 ${index === activePhase
                                                ? 'bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/50'
                                                : 'bg-white/5 backdrop-blur-sm border border-white/10'
                                                }`}
                                        >
                                            <phase.icon className={`w-3 h-3 md:w-5 md:h-5 ${index === activePhase ? 'text-white' : 'text-gray-400'
                                                }`} />
                                        </motion.div>

                                        <span className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${index === activePhase ? 'text-white' : 'text-gray-500'
                                            }`}>
                                            {phase.id}
                                        </span>

                                        {/* Active indicator */}
                                        {index === activePhase && (
                                            <motion.div
                                                layoutId="activePhase"
                                                className="absolute -bottom-1 md:-bottom-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                                <button
                                    onClick={handleNext}
                                    className={`col-start-${phases.length + 2} w-10 h-10 md:w-14 md:h-14 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 z-20`}
                                >
                                    <FastForward className="w-4 h-4 md:w-6 md:h-6 text-white" />
                                </button>
                        </div>

                        {/* Phase labels - FIXED ALIGNMENT */}
                        <div className="hidden md:flex items-center gap-16 mt-6 md:mt-8 px-1 md:px-24">
                            {phases.map((phase, index) => (
                                <div
                                    key={phase.id}
                                    className={`text-center transition-colors flex flex-col items-center ${index === activePhase ? 'text-white' : 'text-gray-500'
                                        }`}
                                >
                                    <div className="text-xs md:text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                        {phase.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deliverables carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 md:mt-20"
                    >
                        <div className="text-center mb-6 md:mb-8">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-white/80">
                                    PHASE {phases[activePhase].id} DELIVERABLES
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                            {phases[activePhase].deliverables.map((deliverable, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h4 className="text-base md:text-lg font-medium text-white mb-2">{deliverable}</h4>
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2 md:mb-3" />
                                    <div className="flex items-center text-gray-400 group-hover:text-primary transition-colors">
                                        <span className="text-xs md:text-sm">View details</span>
                                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 text-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl" />
                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-12">
                            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4 md:mb-6">
                                <Terminal className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                                Ready to Engineer Excellence?
                            </h3>
                            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                                Our proven engineering process delivers predictable results with
                                technical precision and operational excellence.
                            </p>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                className="group relative inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl md:rounded-2xl overflow-hidden"
                            >
                                <span className="relative text-base md:text-lg">Start Your Engineering Journey</span>
                                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />

                                {isHovered && (
                                    <motion.div
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '100%' }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />
                                )}
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;