// function main(object) {
//   // [[java, 10], []]
//   const array = Object.entries(object);
//   const arrayFilter = array.filter(x => x[1] >= 60);
//   const arraySort = arrayFilter.sort((a, b) => b[1] - a[1]);
//   const newArray = arraySort.map(element => element[0]);

//   console.log(newArray);
// }

// const object = { Java: 10, Ruby: 80, Python: 65, Javascript: 75 };
// main(object);

// function solution(mot) {
//   let array = [...mot];
//   array.length % 2 !== 0 ? (array = [...array, "_"]) : null;

//   let newArray = [];
//   array.map(
//     (elt, index) =>
//       index % 2 === 0
//         ? newArray.push(array.slice(index, index + 2).join(""))
//         : null
//   );

//   return newArray;
// }

// solution("abcde");
// solution("ijkl");

function solve(string) {
  const array = [...string].filter(
    element => element !== "(" && element !== ")"
  );

  const toto = array.reduceRight((a, e, i, tab) => {
    const newArray = [...tab];
    if (/\d/.test(e))
      a[i] = newArray
        .splice(i + 1)
        .join("")
        .repeat(Number(e));
    return a;
  }, []);

  return toto[0].replace(/\d[a-z]{1}/g, toto[2]);
}

console.log(solve("2(a3(b))")); // "ababab" -- "ab" repeats 3 times
