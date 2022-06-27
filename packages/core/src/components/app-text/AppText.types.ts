export type AppTextProps = {
  size?: Size;
  variant?: TextVariant;
  children: string | undefined;
  color?: string;

  /**
   * Override properties: if set will override the variant properties
   */
  family?: string;
  weight?: number;
  fontStyle?: string;
};

export type Size = 's' | 'm';
export type TextVariant = 'p3' | 'p2' | 'p1' | 'h3' | 'h2' | 'h1' | 'hero';
