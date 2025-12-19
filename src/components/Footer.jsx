import { Code2, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Junk To Code" className='h-12 w-12' />
              <div>
                <span className="font-hirosaki text-2xl font-bold">JunkToCode <span className='text-primary font-3xl font-bold'>.</span></span>
                <span className="block text-sm text-gray-400 font-medium">Studio</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A founder-led tech studio specializing in premium software development for startups, enterprises, and technical decision-makers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/5 transition-colors hover-lift">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/5 transition-colors hover-lift">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/5 transition-colors hover-lift">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Full-Stack Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">AI/ML Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#process" className="text-gray-400 hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} JunkToCode Studio. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gray-75 transition-colors hover-lift"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;