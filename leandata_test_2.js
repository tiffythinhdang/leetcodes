function calculateMostImprovement(students, scores) {
  const studentsMapToScores = {};
  let maxImprovement = 0;

  students.forEach((name, i) => {
    if ( !studentsMapToScores[name] ) studentsMapToScores[name] = [];
    studentsMapToScores[name].push( scores[i] );
  })

  const names = Object.keys(studentsMapToScores);

  names.forEach(name => {
    let scores = studentsMapToScores[name];
    let currMaxImprovement = 0;
    let currLowest = scores[0];

    for(let i = 1; i < scores.length; i++) {
      let currScore = scores[i];

      if (currScore > currLowest) {
        let attempt = currScore - currLowest;
        if (attempt > currMaxImprovement) currMaxImprovement = attempt;
      } else if (currScore < currLowest) {
        currLowest = currScore;
      }
    }

    if (currMaxImprovement > maxImprovement) maxImprovement = currMaxImprovement;
  })

  return maxImprovement;
}


const students = ["Mary", "Steve", "Steve", "Mary", "Steve"]
const scores = [19, 70, 99, 80, 100]
const students2 = []
const scores2 = []

console.log(calculateMostImprovement(students2, scores2))
