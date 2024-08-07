export const filterTasktWithAllowedKeys = (task: any, allwedKeys: string[]) => {
  const newTask = {};
  allwedKeys.forEach((key) => {
    if (task.hasOwnProperty(key)) {
      newTask[key] = task[key];
    }
  });
  return newTask;
};
