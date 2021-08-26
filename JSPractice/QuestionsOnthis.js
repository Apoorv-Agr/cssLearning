/* const user = {
    email: "my@email.com",
    updateEmail: email => {
        // this.email = email
        console.log(this.email);
    }
}

user.updateEmail()
// console.log(user.email); */

const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])