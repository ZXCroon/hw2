/* Exercise 1 */
function sum() {
  var result = 0;
  for (var i = 0; i < arguments.length; ++i) {
    var temp = parseFloat(arguments[i]);
    if (isNaN(temp)) continue;
    if (temp == 0) temp = parseInt(arguments[i]);
    result = plus(result, temp);
  }
  return result;
}

function plus(value1, value2) {
  var l1 = value1.toString().split('.');
  var l2 = value2.toString().split('.');
  var r1 = (l1.length > 1? l1[1].length : 0);
  var r2 = (l2.length > 1? l2[1].length : 0);
  var M = Math.pow(10, Math.max(r1, r2));
  return M == 0? (value1 + value2) : ((value1 * M + value2 * M) / M);
}

/* test
alert(sum('0.1', false, 0.2, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', '0x1'));
*/

// -------------------------------

/* Exercise 2 */
function mySort(studentList) {
  studentList.sort(function(student1, student2) {
    if (student1.age != student2.age)
      return student1.age - student2.age;
    if (student1.score != student2.score)
      return student2.score - student1.score;
    if (student1.name < student2.name)
      return -1;
    if (student1.name > student2.name)
      return 1;
    return 0;
  });
}

/* test
var studentList = [
  {
    name: 'Mary',
    age: 20,
    score: 80
  },
  {
    name: 'Cindy',
    age: 21,
    score: 90
  }
];
mySort(studentList);
for (var i = 0; i < studentList.length; ++i)
  alert(studentList[i].name);
*/

// -------------------------------

/* Bonus */
function Student(name, age, hometown) {
  this.name = name;
  this.age = age;
  this. hometown = hometown;
}

// "students" is array of "Student"
function TeacherAssistant(students) {
  this.students = students;
  this.search = function(item) {
    var res = new Array();
    for (var i = 0; i < this.students.length; ++i)
      if (this.students[i].name === item || this.students[i].age === item)
        res.push(this.students[i]);
    return res;
  };
  this.first = function(item) {
    for (var i = 0; i < this.students.length; ++i)
      if (this.students[i].name === item || this.students[i].age === item)
        return(this.students[i]);
    return null;
  }
  this.diff = function(another) {
    var res = new Array();
    for (var i = 0; i < another.length; ++i) {
      var have = false;
      for (var j = 0; j < this.students.length; ++j)
        if (this.students[j].name == another[i].name) {
          have = true;
          break;
        }
      if (!have)
        res.push(another[i]);
    }
    return res;
  }
  this.merge = function(another) {
    var newlyAdded = this.diff(another);
    for (var i = 0; i < newlyAdded.length; ++i)
      this.students.push(newlyAdded[i]);
    return newlyAdded.length;
  }
}