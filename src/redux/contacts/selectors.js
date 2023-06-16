import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.task.isLoading;

export const selectAllTasks = state => state.task.items;

export const selectValueFilter = state => state.filter.value;


export const selectFilteredContacts = createSelector(
    [selectAllTasks,  selectValueFilter],
    (task, value) => {
      const filterToLowerCase = value.toLowerCase();
      return task.filter(contact =>
       contact.name.toLowerCase().includes(filterToLowerCase)
      
    );
  }
);
