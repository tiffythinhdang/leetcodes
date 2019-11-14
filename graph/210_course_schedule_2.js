const buildGraph = (prerequisites) => {
  let graph = {}
  prerequisites.forEach(pre => {
    let [course, prereq] = pre.map(String);
    if (!graph[course]) graph[course] = [];
    if (!graph[prereq]) graph[prereq] = [];
    graph[course].push(prereq);
  })
  return graph;
}

const buildInverseGraph = (prerequisites) => {
  let graph = {}
  prerequisites.forEach(pre => {
    let [course, prereq] = pre.map(String);
    if (!graph[course]) graph[course] = [];
    if (!graph[prereq]) graph[prereq] = [];
    graph[prereq].push(course);
  })
  return graph;
}


const findOrder =  (numCourses, prerequisites) => {
  if (prerequisites.length === 0) {
    let order = [];
    for (let i = 0; i < numCourses; i++) {
      order.push(i);
    }
    return order;
  }

  const courseToPrereq = buildGraph(prerequisites);
  const prereqToCourse = buildInverseGraph(prerequisites);
  const outDegree = {};

  let queue = [];

  for (let i = 0; i < numCourses; i++) {
    let degree = courseToPrereq[i] ? courseToPrereq[i].length : 0;
    if (degree > 0) {
      outDegree[i] = courseToPrereq[i].length;
    } else {
      queue.push(String(i))
    }
  }

  let order = [];

  while (queue.length > 0) {
    let course = queue.shift();
    order.push(course);

    let coursesToDecrement = prereqToCourse[course];
    if (!coursesToDecrement || !coursesToDecrement.length === 0) continue;
    coursesToDecrement.forEach(course => {
      outDegree[course]--;
      if (outDegree[course] === 0) {
        queue.push(course);
        delete outDegree.course
      }
    })
  }

  return order.length === numCourses ? order : [];
};

const arr = [[1, 0], [2, 0], [3, 1], [3, 2]];
console.log(buildGraph(arr))
console.log(buildInverseGraph(arr))
console.log(findOrder(4, arr))