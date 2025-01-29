import { FilterTags } from '@/components/FilterTags';

const AVAILABLE_TAGS = [
  'brewing',
  'technique',
  'pour-over',
  'roasting',
  'coffee-beans',
  'education'
];

interface TagFilterProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export default function TagFilter({ selectedTags, onTagsChange }: TagFilterProps) {
  return (
    <FilterTags
      title="Filter by Tags"
      options={AVAILABLE_TAGS}
      selectedOptions={selectedTags}
      onOptionsChange={onTagsChange}
    />
  );
} 