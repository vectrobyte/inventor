export type FormControl<T> = {
  label: string;
  value: T | undefined;
  placeholder?: string;
  onChange(val: T): void;
};
