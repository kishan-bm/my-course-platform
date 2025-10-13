import Link from 'next/link';
import Image from 'next/image';

// **NOTE:** Ensure your image is saved in 'public/images/Hero.png'
// It should be a large, high-resolution image with the dark, professional coding scene.

export default function HeroSection() {
  return (
    <section className="relative">
      
      {/* 1. Background Image Container */}
      {/* The image is now a separate, absolutely positioned element that covers the entire section. */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg" // Use your actual dark hero image file here
          alt="Person learning to code"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 2. Dark Gradient Overlay */}
      {/* This creates the dark, seamless area on the left side where the text is. */}
      {/* The gradient fades from a dark color (gray-900) to transparent. */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

      {/* 3. Text Content Container (Relative to sit on top) */}
      {/* Set a fixed height (h-[500px]) for the hero block for consistency */}
      <div className="relative z-10 text-white container mx-auto flex h-[500px] items-center p-8 md:p-12">
        
        {/* We use max-w-xl to constrain the text column to the left side, matching the original design. */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Start Your Tech Career With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We offer expert-led courses and live mentorship to provide you with the skills demanded by the industry.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/courses"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore AI Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}