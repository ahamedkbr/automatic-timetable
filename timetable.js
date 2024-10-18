
function calculateTeachersRequired(classes, sections, teachingLoadHours, subjects, periodLength) {
  let subjectTeacherHashMap = {};
  for (let subject in subjects) {
    let periodsPerWeek = subjects[subject];
    let totalTeachingHours = classes * sections * periodsPerWeek * periodLength;

    let numberOfTeachers = Math.ceil(totalTeachingHours / teachingLoadHours);
    subjectTeacherHashMap[subject] = numberOfTeachers;
  }

  console.log(subjectTeacherHashMap);

  console.log("Subject-wise Teacher Requirements (in hours):");
  for (let subject in subjectTeacherHashMap) {
    console.log(`${subject}: ${subjectTeacherHashMap[subject]} needed`);
  }

}

let classes = 5;
let sections = 2;
let teachingLoadHours = 20;
let periodLength = 1;

let subjects = {
  "Math": 5,
  "English": 4,
  "Science": 4,
  "Social Studies": 3,
};

calculateTeachersRequired(classes, sections, teachingLoadHours, subjects, periodLength);

