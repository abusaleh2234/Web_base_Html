const student = {name: "Jamal", roll: 20, score: 5, id: 23345}

for (const key in student) {

    // console.log(student[key]);
}

const Keys = Object.keys(student)

for (const key of Keys) {
    console.log(student[key])
};
    