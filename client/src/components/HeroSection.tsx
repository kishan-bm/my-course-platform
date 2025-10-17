import Link from 'next/link';
import Image from 'next/image';

// **NOTE:** Ensure your image is saved in 'public/images/Hero.png'
// It should be a large, high-resolution image with the dark, professional coding scene.

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Professional tech education platform"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-800/60"></div>

      {/* Content Container */}
      <div className="relative z-10 text-white container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 10,000+ Students
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Master In-Demand
            <span className="block text-blue-400">Tech Skills</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Join our expert-led courses, live training sessions, and guaranteed placement program. 
            Transform your career with industry-relevant skills and land your dream tech job.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              <span>100% Job Guarantee</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <span>Live Mentorship</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              <span>Industry Experts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Courses
            </Link>
            <Link
              href="/live-training"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Live Training
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">10K+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400">95%</div>
              <div className="text-gray-400">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">100+</div>
              <div className="text-gray-400">Partner Companies</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}