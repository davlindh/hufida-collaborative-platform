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