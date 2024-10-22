let AvailablePeriods = ["English", "Maths", "Science", "Social", "Tamil"];

let class1secA = [{ name: "English", teacher: "Vignesh" }, { name: "Maths", teacher: "Kabeer" }, { name: "Science", teacher: "Chandru" }, { name: "Social", teacher: "Astick" }, { name: "Tamil", teacher: "Ragul" }];
let class1secB = [{ name: "English", teacher: "Akshay" }, { name: "Maths", teacher: "Kabeer" }, { name: "Science", teacher: "Prakash" }, { name: "Social", teacher: "Keerthi" }, { name: "Tamil", teacher: "Bushra" }];
let class1secC = [{ name: "English", teacher: "Vignesh" }, { name: "Maths", teacher: "Rohan" }, { name: "Science", teacher: "Chandru" }, { name: "Social", teacher: "Mathavan" }, { name: "Tamil", teacher: "Ragul" }];


var class1secATimeTableMonday = {};
var class1secBTimeTableMonday = {};
var class1secCTimeTableMonday = {};
var class1secATimeTableTuesday = {};
var class1secBTimeTableTuesday = {};
var class1secCTimeTableTuesday = {};
var class1secATimeTableWednesday = {};
var class1secBTimeTableWednesday = {};
var class1secCTimeTableWednesday = {};
var class1secATimeTableThursday = {};
var class1secBTimeTableThursday = {};
var class1secCTimeTableThursday = {};
var class1secATimeTableFriday = {};
var class1secBTimeTableFriday = {};
var class1secCTimeTableFriday = {};
let newTimeTable = [];

let AllSubjectMonday = [];
let AllSubjectTuesday = [];
let AllSubjectWednesday = [];
let AllSubjectThursday = [];
let AllSubjectFriday = [];

/**
 * 
 * @param {Array} arr 
 * @param {Number} i 
 */
function GenerateTimeTable(arr, i, y, allLength, clsSec, cls, day) {
    if (i >= 8) {
        newTimeTable = [...arr];


        if (day == "Monday" && checkCondition2(newTimeTable, day) && AllSubjectMonday.length <= allLength) {
            AllSubjectMonday = [...AllSubjectMonday, newTimeTable];
            cls.timeTable = newTimeTable;
        }
        if (day == "Tuesday" && checkCondition2(newTimeTable, day) && AllSubjectTuesday.length <= allLength) {
            AllSubjectTuesday = [...AllSubjectTuesday, newTimeTable];
            cls.timeTable = newTimeTable;
        }
        if (day == "Wednesday" && checkCondition2(newTimeTable, day) && AllSubjectWednesday.length <= allLength) {
            AllSubjectWednesday = [...AllSubjectWednesday, newTimeTable];
            cls.timeTable = newTimeTable;
        }
        if (day == "Thursday" && checkCondition2(newTimeTable, day) && AllSubjectThursday.length <= allLength) {
            AllSubjectThursday = [...AllSubjectThursday, newTimeTable];
            cls.timeTable = newTimeTable;
        }
        if (day == "Friday" && checkCondition2(newTimeTable, day) && AllSubjectFriday.length <= allLength) {
            AllSubjectFriday = [...AllSubjectFriday, newTimeTable];
            cls.timeTable = newTimeTable;
        }





    }
    let overAll = true;
    for (let k = i; k < 8; k++) {
        for (let j = 0; j < clsSec.length; j++) {
            let isAvailable = checkCondition(k, clsSec[j]["name"], arr, y, clsSec[j]["teacher"], clsSec, day);
            if (isAvailable) {
                arr[k]["period"] = k + 1;
                arr[k]["subject"] = clsSec[j]["name"];
                arr[k]["teacher"] = clsSec[j]["teacher"];
                // if(k==6)
                // console.log({period:k+1,teacher:clsSec[j]["teacher"]})
                GenerateTimeTable(arr, k + 1, y, allLength, clsSec, cls, day);
            }
        }
    }
}
/**
 * 
 * @param {Number} i 
 * @param {String} subject 
 * @param {Array} arr 
 * @param {Number} y
 * @param {String} teacher
 * @param {Array} clsSec
 * @returns 
 */
function checkCondition(i, subject, arr, y, teacher, clsSec, day) {

    // checking for teacher subject conflict
    if (day == "Monday") {
        for (let o = 0; o < AllSubjectMonday.length; o++) {

            if (AllSubjectMonday[o][i]["teacher"] == teacher) {
                return false;
            }
        }
    }
    if (day == "Tuesday") {
        for (let o = 0; o < AllSubjectTuesday.length; o++) {

            if (AllSubjectTuesday[o][i]["teacher"] == teacher) {
                return false;
            }
        }
    }
    if (day == "Wednesday") {
        for (let o = 0; o < AllSubjectWednesday.length; o++) {

            if (AllSubjectWednesday[o][i]["teacher"] == teacher) {
                return false;
            }
        }
    }
    if (day == "Thursday") {
        for (let o = 0; o < AllSubjectThursday.length; o++) {

            if (AllSubjectThursday[o][i]["teacher"] == teacher) {
                return false;
            }
        }
    }
    if (day == "Friday") {
        for (let o = 0; o < AllSubjectFriday.length; o++) {

            if (AllSubjectFriday[o][i]["teacher"] == teacher) {
                return false;
            }
        }
    }

    if (arr.find((e) => e["subject"] == subject)) {
        let count = 0;
        for (let q = 0; q < arr.length; q++) {
            if (subject == arr[q]["subject"]) {
                count++;
            }
        }
        let isAvailable = clsSec.every((e) => arr.find((p) => p["subject"] == e["name"]));
        if (!isAvailable) {
            return false;
        }
        if (count >= 2) {
            // isAvailable = false;
            return false;
        }
        if (arr[i - 1]?.subject == subject || arr[i + 1]?.subject == subject || arr[i - 2]?.subject == subject || arr[i + 2]?.subject == subject) {
            // isAvailable = false;
            return false;
        }
        if (arr[i - 1]?.teacher == teacher || arr[i + 1]?.teacher == teacher || arr[i - 2]?.teacher == teacher || arr[i + 2]?.teacher == teacher) {
            // isAvailable = false;
            return false;
        }


    }

    return true;
}

/**
 * 
 * @param {Number} i 
 * @param {String} subject 
 * @param {Array} arr 
 * @returns 
 */
function checkCondition2(newArr, day) {

    let teacherCount = {};
    if (day == "Monday") {
        for (let o = 0; o < AllSubjectMonday.length; o++) {

            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j]["subject"] == undefined || newArr[j]["teacher"] == undefined || newArr[j]["subject"] == '' || newArr[j]["teacher"] == '') {
                    return false;
                }
                if (AllSubjectMonday[o][j]["teacher"] == newArr[j]["teacher"]) {
                    return false;
                }
            }

        }
    }
    if (day == "Tuesday") {
        for (let o = 0; o < AllSubjectTuesday.length; o++) {

            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j]["subject"] == undefined || newArr[j]["teacher"] == undefined || newArr[j]["subject"] == '' || newArr[j]["teacher"] == '') {
                    return false;
                }
                if (AllSubjectTuesday[o][j]["teacher"] == newArr[j]["teacher"]) {
                    return false;
                }
            }

        }
    }
    if (day == "Wednesday") {
        for (let o = 0; o < AllSubjectWednesday.length; o++) {

            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j]["subject"] == undefined || newArr[j]["teacher"] == undefined || newArr[j]["subject"] == '' || newArr[j]["teacher"] == '') {
                    return false;
                }
                if (AllSubjectWednesday[o][j]["teacher"] == newArr[j]["teacher"]) {
                    return false;
                }
            }

        }
    }
    if (day == "Thursday") {
        for (let o = 0; o < AllSubjectThursday.length; o++) {

            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j]["subject"] == undefined || newArr[j]["teacher"] == undefined || newArr[j]["subject"] == '' || newArr[j]["teacher"] == '') {
                    return false;
                }
                if (AllSubjectThursday[o][j]["teacher"] == newArr[j]["teacher"]) {
                    return false;
                }
            }

        }
    }
    if (day == "Friday") {
        for (let o = 0; o < AllSubjectFriday.length; o++) {

            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j]["subject"] == undefined || newArr[j]["teacher"] == undefined || newArr[j]["subject"] == '' || newArr[j]["teacher"] == '') {
                    return false;
                }
                if (AllSubjectFriday[o][j]["teacher"] == newArr[j]["teacher"]) {
                    return false;
                }
            }

        }
    }
    return true;
}







// GenerateTimeTable([
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },

// ], 0, 1, AllSubjectTuesday.length, class1secA, class1secATimeTableTuesday,"Tuesday");
// swap(class1secA)
// GenerateTimeTable([
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },

// ], 0, 1, AllSubjectTuesday.length, class1secB, class1secBTimeTableTuesday,"Tuesday");
// swap(class1secB)
// GenerateTimeTable([
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },
//     { period: "", subject: "", teacher: "" },

// ], 0, 1, AllSubjectTuesday.length, class1secC, class1secCTimeTableTuesday,"Tuesday");
// swap(class1secC)

// let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weekDays = ["Monday"];

// for (let w of weekDays) {

// let c1s1;
// let c2s2;
// let c3s3;
// let allSub;
// if(w=="Monday")
// {
// c1s1=class1secATimeTableMonday
// c2s2=class1secBTimeTableMonday
// c3s3=class1secCTimeTableMonday
// allSub=AllSubjectMonday
// }
// // if(w=="Tuesday")
// // {
// // c1s1=class1secATimeTableTuesday
// // c2s2=class1secBTimeTableTuesday
// // c3s3=class1secCTimeTableTuesday
// // allSub=AllSubjectTuesday
// // }
// // if(w=="Wednesday")
// // {
// // c1s1=class1secATimeTableWednesday
// // c2s2=class1secBTimeTableWednesday
// // c3s3=class1secCTimeTableWednesday
// // allSub=AllSubjectWednesday
// // }
// // if(w=="Thursday")
// // {
// // c1s1=class1secATimeTableThursday
// // c2s2=class1secBTimeTableThursday
// // c3s3=class1secCTimeTableThursday
// // allSub=AllSubjectThursday
// // }
// // if(w=="Friday")
// // {
// // c1s1=class1secATimeTableFriday
// // c2s2=class1secBTimeTableFriday
// // c3s3=class1secCTimeTableFriday
// // allSub=AllSubjectFriday
// // }
//     GenerateTimeTable([
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },

//     ], 0, 1, allSub.length, class1secA, c1s1, w);
//     swap(class1secA);
//     GenerateTimeTable([
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },

//     ], 0, 1, allSub.length, class1secB, c2s2, w);
//     swap(class1secB);
//     GenerateTimeTable([
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },
//         { period: "", subject: "", teacher: "" },

//     ], 0, 1, allSub.length, class1secC, c3s3, w);
//     swap(class1secC);
// }

// class1 sec1 monday to friday

function generateTT(clsSection) {
    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let allSub;
    let cxsc;
    let clsSec;
    if (clsSection == 11) {
        clsSec = class1secA;
    }
    if (clsSection == 12) {
        clsSec = class1secB;
    }
    if (clsSection == 13) {
        clsSec = class1secC;
    }
    for (let w = 0; w < weekDays.length; w++) {
        if (weekDays[w] == "Monday") {
            allSub = AllSubjectMonday;
            if (clsSection == 11) {
                cxsc = class1secATimeTableMonday;
            }
            if (clsSection == 12) {
                cxsc = class1secBTimeTableMonday;
            }
            if (clsSection == 13) {
                cxsc = class1secCTimeTableMonday;
            }
        }
        if (weekDays[w] == "Tuesday") {
            allSub = AllSubjectTuesday;
            if (clsSection == 11) {
                cxsc = class1secATimeTableTuesday;
            }
            if (clsSection == 12) {
                cxsc = class1secBTimeTableTuesday;
            }
            if (clsSection == 13) {
                cxsc = class1secCTimeTableTuesday;
            }
        }
        if (weekDays[w] == "Wednesday") {
            allSub = AllSubjectWednesday;
            if (clsSection  == 11) {
                cxsc = class1secATimeTableWednesday;
            }
            if (clsSection  == 12) {
                cxsc = class1secBTimeTableWednesday;
            }
            if (clsSection  == 13) {
                cxsc = class1secCTimeTableWednesday;
            }
        }
        if (weekDays[w] == "Thursday") {
            allSub = AllSubjectThursday;
            if (clsSection  == 11) {
                cxsc = class1secATimeTableThursday;
            }
            if (clsSection  == 12) {
                cxsc = class1secBTimeTableThursday;
            }
            if (clsSection  == 13) {
                cxsc = class1secCTimeTableThursday;
            }
        }
        if (weekDays[w] == "Friday") {
            allSub = AllSubjectFriday;
            if (clsSection  == 11) {
                cxsc = class1secATimeTableFriday;
            }
            if (clsSection  == 12) {
                cxsc = class1secBTimeTableFriday;
            }
            if (clsSection  == 13) {
                cxsc = class1secCTimeTableFriday;
            }
        }
        GenerateTimeTable([
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },
            { period: "", subject: "", teacher: "" },

        ], 0, 1, allSub.length, clsSec, cxsc, weekDays[w]);
        swap(clsSec);
    }
}
generateTT(11)
generateTT(12)
generateTT(13)

console.log("class 1 monday")
console.table(class1secATimeTableMonday?.timeTable)
console.log("class 2 monday")
console.table(class1secBTimeTableMonday?.timeTable)
console.log("class 3 monday")
console.table(class1secCTimeTableMonday?.timeTable)


console.log("class 1 tuesday")
console.table(class1secATimeTableTuesday?.timeTable)
console.log("class 2 tuesday")
console.table(class1secBTimeTableTuesday?.timeTable)
console.log("class 3 tuesday")
console.table(class1secCTimeTableTuesday?.timeTable)


console.log("class 1 wednesday")
console.table(class1secATimeTableWednesday?.timeTable)
console.log("class 2 wednesday")
console.table(class1secBTimeTableWednesday?.timeTable)
console.log("class 3 wednesday")
console.table(class1secCTimeTableWednesday?.timeTable)

console.log("class 1 Thursday")
console.table(class1secATimeTableThursday?.timeTable)
console.log("class 2 Thursday")
console.table(class1secBTimeTableThursday?.timeTable)
console.log("class 3 Thursday")
console.table(class1secCTimeTableThursday?.timeTable)

console.log("class 1 Friday")
console.table(class1secATimeTableFriday?.timeTable)
console.log("class 2 Friday")
console.table(class1secBTimeTableFriday?.timeTable)
console.log("class 3 Friday")
console.table(class1secCTimeTableFriday?.timeTable)
// console.log({ class1secATimeTableTuesday: class1secATimeTableTuesday?.timeTable });
// console.log({ class1secBTimeTableTuesday: class1secBTimeTableTuesday?.timeTable });
// console.log({ class1secCTimeTableTuesday: class1secCTimeTableTuesday?.timeTable });

// console.log({ class1secATimeTableWednesday: class1secATimeTableWednesday?.timeTable });
// console.log({ class1secBTimeTableWednesday: class1secBTimeTableWednesday?.timeTable });
// console.log({ class1secCTimeTableWednesday: class1secCTimeTableWednesday?.timeTable });

// console.log({ class1secATimeTableThursday: class1secATimeTableThursday?.timeTable });
// console.log({ class1secBTimeTableThursday: class1secBTimeTableThursday?.timeTable });
// console.log({ class1secCTimeTableThursday: class1secCTimeTableThursday?.timeTable });

// console.log({ class1secATimeTableFriday: class1secATimeTableFriday?.timeTable });
// console.log({ class1secBTimeTableFriday: class1secBTimeTableFriday?.timeTable });
// console.log({ class1secCTimeTableFriday: class1secCTimeTableFriday?.timeTable });

function swap(arr) {
    let temp = arr[0];
    arr.shift();
    arr.push(temp);
}







