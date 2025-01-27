import React from 'react';

const ComingSoon = ({ title }: { title?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark dark:text-accent-400 mb-4 text-center">
        {title || "Coming Soon"}
      </h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto">
        {`We're working hard to bring you something amazing. Stay tuned!`}
      </p>
    </div>
  );
};

export default ComingSoon; 