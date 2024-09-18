import { cva } from 'class-variance-authority';

export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-deepGreen-500 text-white';
    case 'in progress':
      return 'bg-deepGreen-400 text-white';
    case 'planning':
      return 'bg-deepGreen-300 text-deepGreen-800';
    default:
      return 'bg-deepGreen-200 text-deepGreen-800';
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
  "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deepGreen-300 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-deepGreen-600 to-deepGreen-700 text-white hover:from-deepGreen-700 hover:to-deepGreen-800 active:from-deepGreen-800 active:to-deepGreen-900",
        secondary: "bg-gradient-to-r from-deepGreen-100 to-deepGreen-200 text-deepGreen-800 hover:from-deepGreen-200 hover:to-deepGreen-300 active:from-deepGreen-300 active:to-deepGreen-400",
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
  "bg-white rounded-lg transition-all duration-300 transform hover:scale-102",
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

export const neuTooltipStyles = cva(
  "px-3 py-2 text-sm font-medium text-white bg-deepGreen-800 rounded-md shadow-lg",
  {
    variants: {
      position: {
        top: "mb-2",
        bottom: "mt-2",
        left: "mr-2",
        right: "ml-2",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);

export const neuInputStyles = cva(
  "w-full px-4 py-2 bg-deepGreen-50 border-2 border-deepGreen-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepGreen-300 transition-all duration-200",
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

export const neuTextareaStyles = cva(
  "w-full px-4 py-2 bg-deepGreen-50 border-2 border-deepGreen-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepGreen-300 transition-all duration-200 resize-none",
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

export const neuSliderStyles = cva(
  "w-full h-2 bg-deepGreen-200 rounded-full appearance-none cursor-pointer",
  {
    variants: {
      state: {
        default: "",
        hover: "bg-deepGreen-300",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);
