const updateTasks = require("../katas/update-tasks");
/* updateTasks(
    { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] },
    "read books",
    "tidy room"
  );
  //should return 
  {
    name: 'Anat',
    tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
  }
   */

describe("update tasks tests", () => {
  test("return new person object", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    //
    const updated = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"],
    };
    //
    const result = updateTasks(person, "read books", "tidy room");
    //
    expect(result).toEqual(updated);
  });

  test("input object not mutated", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    //
    updateTasks(person, "read books", "tidy room");
    //
    expect(person).toEqual({
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery"],
    });
  });

  test("return new object", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    //
    const result = updateTasks(person);
    console.log(person, result);
    //
    expect(person).not.toBe(result);
  });

  test("input array not mutated", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    //
    updateTasks(person, "read books", "tidy room");
    //
    expect(person.tasks).toEqual(["feed Schnitzel", "Go to pottery"]);
  });
});
