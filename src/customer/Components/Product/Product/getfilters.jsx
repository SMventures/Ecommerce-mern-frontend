import filter from './FilterData'

export const getFilters = (sectionId) => {
    if (sectionId === 'clothing') {
      // For clothing section, return all filters
      return filter;
    } else {
      // For other sections (e.g., product page), return all filters except size and color
      return filter.filter(filter => filter.id !== 'size' && filter.id !== 'color');
    }
  };
  