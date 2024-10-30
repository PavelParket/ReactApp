const StudentAPI = {
   students: [
      { id: 1, name: "Ben Blocker", group: "It-1" },
      { id: 2, name: "Dave Defender", group: "It-1" },
      { id: 3, name: "Sam Sweeper", group: "Tm-4" },
      { id: 4, name: "Matt Midfielder", group: "A-3" },
      { id: 5, name: "William Winger", group: "Dve-2" },
      { id: 6, name: "Fillipe Forward", group: "Dve-5" },
   ],
   all: function () {
      return this.students;
   },
   get: function (id) {
      const isStudent = (p) => p.id === id;
      return this.students.find(isStudent);
   },
   delete: function (id) {
      const isNotDelStudent = (p) => p.id !== id;
      this.students = this.students.filter(isNotDelStudent);
      return true;
   },
   add: function (student) {
      this.students = [...this.students, student];
      return student;
   },
   update: function (student) {
      this.get();
      this.students.shift(student);
      return student;
   },
};

export default StudentAPI;
