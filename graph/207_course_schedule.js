// https://leetcode.com/problems/course-schedule/

const buildGraph = (list) => {
  let graph = {};

  list.forEach(prereq => {
    let [course, pre] = prereq.map(String);
    if (!graph[course]) graph[course] = [];
    graph[course].push(pre);
  })

  return graph;
}

const canFinish = (numCourses, prerequisites) => {
  let prereq = buildGraph(prerequisites);
  let noCycleNodes = new Set();

  for (let course in prereq) {
    if (hasCycle(course, prereq, noCycleNodes)) return false;
  }

  return true;
};

const hasCycle = (course, prereq, noCycleNodes, prev = new Set()) => {
  if (typeof course === 'undefined') return false;
  if (noCycleNodes.has(course)) return false;

  if (prev.has(course)) return true;
  prev.add(course);

  let prevCourses = prereq[course];
  if (!prevCourses) return false;

  for (let i = 0; i < prevCourses.length; i++) {
    let currCourse = prevCourses[i];
    if (hasCycle(currCourse, prereq, noCycleNodes, prev)) return true;
    prev.delete(currCourse);
    noCycleNodes.add(String(currCourse));
  }

  noCycleNodes.add(String(course));
  prev.delete(course);
  return false;
}
