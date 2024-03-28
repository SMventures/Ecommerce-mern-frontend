
// import { filters  } from './FilterData';
// import {singleFilter} from './FilterData';
// import {sortOptions} from './FilterData';
// export const getFilters = (sectionId, categoryId) => {
//   if (sectionId === 'Clothing' && (categoryId === 'Men' || categoryId === 'Women')) {
//     // For clothing section and categories men and women, return all filters
//     console.log("category is clothing")
//     return filters;
//   } else {
//     console.log("category is not clothing")
//     console.log(sectionId, categoryId)
//     // For other sections or categories, return filters without size and color
//     // const selectedOne = filters.filter(filter => filter.id !== 'size' && filter.id !== 'color');
//     // console.log("this is the selected data", selectedOne);
    
//     return selectedOne;
//   }
// };

import { filters, singleFilter, sortOptions } from './FilterData';

export const getFilters = async (sectionId, categoryId) => {
  if (sectionId === 'Clothing' && (categoryId === 'Men' || categoryId === 'Women')) {
    // For clothing section and categories men and women, return all filters
    console.log("category is clothing")
    return {
      filters: filters,
      sortOptions: sortOptions,
      singleFilter: singleFilter
    };
  } else {
    console.log("category is not clothing")
    console.log("when category is not clothing this is the id :", sectionId, categoryId)
    // For other sections or categories, return filters without size and color
    // const selectedFilters = filters.filter(filter => filter.id !== 'size' && filter.id !== 'color');
    // console.log("this is the selected data", selectedFilters);
    
    return {
      // filters: selectedFilters,
      filters: [],
      sortOptions: sortOptions,
      singleFilter: singleFilter
    };
  }
};



// import { filtersData } from './FilterData';

// export const getFilters = (sectionId, categoryId) => {
//   if (sectionId === 'clothing' && (categoryId === 'Men' || categoryId === 'Women')) {
//     // For clothing section and categories men and women, return all filters
//     console.log("Category is clothing");
//     return filtersData.filters;
//   } else {
//     console.log("Category is not clothing");
//     console.log(sectionId, categoryId);
//     // For other sections or categories, return filters without size and color
//     return filtersData.filters.filter(filter => filter.id !== 'size' && filter.id !== 'color');
//   }
// };
