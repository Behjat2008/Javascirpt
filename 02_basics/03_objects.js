// singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Behjat",
    age: 18,
    [mySym]: "mykey1",
    location: "Karachi",
    email: "behjat@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "S"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "behjat@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "behjat@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());