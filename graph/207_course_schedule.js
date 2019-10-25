// https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  possCourses = {};

  // Construct the graph map
  prerequisites.forEach(prereq => {
    let currCourse = prereq[0];
    if (!possCourses[currCourse]) possCourses[currCourse] = [];
    possCourses[currCourse].push(prereq[1]);
  })

  // check each node in graph to see if there is a cycle through the  neighbor of that node
  for (course in possCourses) {
    if (hasCycle(course, possCourses, prev = new Set())) return false;
  }

  return true;
};

const hasCycle = (course, possCourses, prev = new Set()) => {
  // check for sanity
  if (typeof course === 'undefined') return false;
  if (prev.has(String(course)) || prev.has(course)) return true;
  prev.add(course);

  //get the presequite nodes
  let prevCourses = possCourses[course];
  if (!prevCourses) return false;

  for (let i = 0; i < prevCourses.length; i++) {
    let currCourse = prevCourses[i];
    // if node already visted with no cycle, bypass that node
    if (prev.has(currCourse)) continue;

    if (hasCycle(currCourse, possCourses, prev)) return true;
  }
  return false;
}
