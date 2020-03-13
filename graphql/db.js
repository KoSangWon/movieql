export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name: "KoSang",
        age: 24,
        gender: "male"
    },
    {
        id: "2",
        name: "Sangwon",
        age: 25,
        gender: "male"
    },
    {
        id: "3",
        name: "Suzy",
        age: 25,
        gender: "female"
    }
]


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}