const { log } = require("console");
const { queryObjects } = require("v8");

// const tinderUser = new Objects()
const tinderUser = new Object();
exports.tinderUser = tinderUser;

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isloggedIn = false;

// console.log(tinderUser);
const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Muhammad",
      lastname: "Behjat",
    },
  },
};

// console.log(regularUser.fullname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 =  { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    } ,
    {
        id: 1,
        email: "b@gmail.com"
    }
];

users[1].email
// console.log(tinderUser);

// console.log(Objects.values(tinderUser));
// console.log(Objects.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring of objects in js 

const course = {
  coursename: "js in Hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor:);
console.log(instructor);

// JSON Concept (API's)

// {
//   "name": "behjat",
//   "courrsename": "js in hindi",
//   "price": "free"
// }

// Another method of API's

[
  {},
  {},
  {}
]