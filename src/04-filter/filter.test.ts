test("should take old men older than 90", () => {
    const ages = [11, 53, 33, 28, 30, 92, 95, 77, 24];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(92);
    expect(oldAges[1]).toBe(95);

    expect(ages.length).toBe(9);
    expect(ages[2]).toBe(33);
    expect(ages.at(-2)).toBe(77);
    expect(ages[5]).toBe(92);
});

test("should take courses cheaper than $160", () => {
    const courses = [
        {title: "html/css", price: 110},
        {title: "js", price: 150},
        {title: "react", price: 180},
    ];

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("html/css");
    expect(cheapCourses[1].title).toBe("js");

    expect(courses.length).toBe(3);
    expect(courses[2].price).toBe(180);
});


test("take only completed tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "water", isDone: true},
        {id: 3, title: "milk", isDone: false},
        {id: 4, title: "chicken", isDone: true},
    ];

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);

    expect(tasks.length).toBe(4);
    expect(tasks[2].title).toBe("milk");
});

test("take only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "water", isDone: true},
        {id: 3, title: "milk", isDone: false},
        {id: 4, title: "chicken", isDone: true},
    ];

    const uncompletedTasks = tasks.filter(task => !task.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);

    expect(tasks.length).toBe(4);
    expect(tasks[2].title).toBe("milk");
});