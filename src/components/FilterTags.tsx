interface FilterTagsProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onOptionsChange: (options: string[]) => void;
  className?: string;
}

export function FilterTags({ 
  title, 
  options, 
  selectedOptions, 
  onOptionsChange,
  className = "" 
}: FilterTagsProps) {
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onOptionsChange(selectedOptions.filter(t => t !== option));
    } else {
      onOptionsChange([...selectedOptions, option]);
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-lg font-semibold mb-2 text-coffee-dark dark:text-accent-400">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleOption(option)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
              ${selectedOptions.includes(option)
                ? 'bg-brown-600 dark:bg-accent-500 text-white shadow-md transform scale-105'
                : 'text-coffee-dark dark:text-gray-200 border border-brown-600 dark:border-accent-400 hover:bg-brown-600 dark:hover:bg-accent-500 hover:text-white hover:shadow'
              }
              hover:scale-105
            `}
          >
            {option}
            {selectedOptions.includes(option) && (
              <span className="ml-2 inline-block" aria-hidden="true">×</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 