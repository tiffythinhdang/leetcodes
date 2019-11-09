function changeDateFormat(dates) {
  // Write the code that goes here
  let regex1 = /\d{4}\/\d{2}\/\d{2}/;
  let regex2 = /\d{2}-\d{2}-\d{4}/;
  let regex3 = /\d{2}\/\d{2}\/\d{4}/;

  let res1 = [];
  let res2 = [];
  let res3 = [];

  dates.forEach(date => {
    if ( date.match(regex1) ) {
      res1.push(date.match(regex1)[0]);
    } else if (date.match(regex2) ) {
      res2.push(date.match(regex2)[0]);
    } else if (date.match(regex3) ) {
      res3.push(date.match(regex3)[0]);
    }
  })

  res1 = res1.map(ele => {
    return ele.split("/").join("");
  })

  res3 = res3.map(ele => {
    let converted = [];
    let arr = ele.split("/");

    converted.push(arr.pop());
    converted.push(arr.shift());
    converted.push(arr.pop());

    return converted.join("");
  })

  res2 = res2.map(ele => {
    return ele.split("-").reverse().join("");
  })

  return res1.concat(res2).concat(res3);
}

// console.log(changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]));

var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}