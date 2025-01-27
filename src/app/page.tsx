import Link from "next/link";
import { features } from "@/constants/features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900 to-brown-50 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-dark dark:text-white mb-6">
            Discover the Perfect <span className="text-brown-600 dark:text-accent-400">Coffee</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your journey to becoming a coffee connoisseur starts here. Explore recipes, brewing techniques, and coffee culture.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/recipes" 
              className="px-6 py-3 bg-brown-600 dark:bg-accent-500 text-white rounded-lg 
                       hover:bg-brown-700 dark:hover:bg-accent-600 
                       transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Recipes
            </Link>
            <Link 
              href="/blogs" 
              className="px-6 py-3 border-2 border-brown-600 dark:border-accent-400 
                       text-brown-600 dark:text-accent-400 rounded-lg 
                       hover:bg-brown-600 dark:hover:bg-accent-500 hover:text-white 
                       transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-coffee-dark dark:text-white mb-12">
            Why Choose Beanlyst?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-brown-600 dark:text-accent-400 mb-6 flex justify-center items-center h-12"
                     dangerouslySetInnerHTML={{ __html: feature.icon }}>
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark dark:text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-coffee-dark dark:bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Coffee Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of coffee enthusiasts and discover the art of brewing the perfect cup.
          </p>
          <Link 
            href="/recipes" 
            className="inline-block px-8 py-4 bg-white dark:bg-accent-500 text-coffee-dark dark:text-white 
                     rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-accent-600 
                     transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

