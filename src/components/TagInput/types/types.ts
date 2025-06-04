export interface TagInputProps {
  initialTags?: string[];
  maxTags?: number;
  separator?: string;
  placeholder?: string;
  allowDuplicates?: boolean;
  onChange?: (tags: string[]) => void;
  className?: string;
  disabled?: boolean;
  tagClassName?: string;
  inputClassName?: string;
}
