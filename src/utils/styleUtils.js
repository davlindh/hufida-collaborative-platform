import { cva } from 'class-variance-authority';

export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-palette-primary text-white';
    case 'in progress':
      return 'bg-palette-secondary text-white';
    case 'planning':
      return 'bg-palette-accent text-white';
    default:
      return 'bg-palette-neutral-400 text-white';
  }
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const neuFormStyles = cva(
  "bg-deepGreen-50 border-2 border-deepGreen-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-deepGreen-300 transition-all duration-200",
  {
    variants: {
      state: {
        default: "shadow-inner",
        focus: "shadow-lg",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export const neuButtonStyles = cva(
  "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-deepGreen-300",
  {
    variants: {
      variant: {
        primary: "bg-deepGreen-600 text-white hover:bg-deepGreen-700 active:bg-deepGreen-800",
        secondary: "bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200 active:bg-deepGreen-300",
        outline: "bg-transparent border-2 border-deepGreen-600 text-deepGreen-600 hover:bg-deepGreen-50 active:bg-deepGreen-100",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const neuCardStyles = cva(
  "bg-white rounded-lg transition-all duration-200",
  {
    variants: {
      elevation: {
        low: "shadow-md hover:shadow-lg",
        medium: "shadow-lg hover:shadow-xl",
        high: "shadow-xl hover:shadow-2xl",
      },
    },
    defaultVariants: {
      elevation: "medium",
    },
  }
);

export const responsiveGridStyles = cva(
  "grid gap-6",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      },
    },
    defaultVariants: {
      cols: 3,
    },
  }
);