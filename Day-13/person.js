export const Person = {
    _id: "1",
    name: "Denis",
    phone: "947128000",
    hobbies: ["Programming", "Reading", "Workout", "Trading"],
    getId: function () {
        return this._id
    },
    getName: function () {
        return this.name
    },
    getHobbies: function () {
        return this.hobbies
    }
}
