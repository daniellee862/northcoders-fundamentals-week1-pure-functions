const updateTasks = (person, ...tasks) => {
  //NEW PERSON OBJECT
  const name = person.name;
  const newtasks = [...person.tasks];
  const newPerson = { name: name, tasks: newtasks };
  //ITERATE TASK ARRAY CHECKING IF NEW PERSONS TASKS DOESNT INCLUDE ELEMENT
  //IF NOT, PUSH ELEMENT
  //ELEMENTS ARE STRINGS NOT VARIBALES SO SHOULD BE DIFFERENT FROM INPUT
  tasks.forEach((element) => {
    if (!newPerson.tasks.includes(element)) {
      newPerson.tasks.push(element);
    }
  });
  //RETURN NEW PERSON OBJECT
  return newPerson;
};

module.exports = updateTasks;
