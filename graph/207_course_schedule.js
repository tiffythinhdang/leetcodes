// https://leetcode.com/problems/course-schedule/

const buildGraph = (list) => {
  let graph = {};

  list.forEach(prereq => {
    let [course, pre] = prereq;
    if (!graph[course]) graph[course] = [];
    graph[course].push(pre);

    // if (!graph[pre]) graph[pre] = [];
  })

  return graph;
}

var canFinish = function (numCourses, prerequisites) {
  let prereq = buildGraph(prerequisites);

  for (course in prereq) {
    if (hasCycle(course, prereq, prev = new Set())) return false;
  }

  return true;
};

const hasCycle = (course, prereq, prev = new Set()) => {
  if (typeof course === 'undefined') return false;
  if (prev.has(String(course)) || prev.has(course)) return true;
  prev.add(course);

  let prevCourses = prereq[course];
  if (!prevCourses) return false;

  for (let i = 0; i < prevCourses.length; i++) {
    let currCourse = prevCourses[i];
    if (prev.has(currCourse)) continue;
    if (hasCycle(currCourse, prereq, prev)) return true;
  }
  return false;
}
