class Person {
    private firstName!: string
    private lastName!: string
    private age!: number

    setFirstName(firstName: string): Person {
        this.firstName = firstName
        return this
    }

    setLastName(lastName: string): Person {
        this.lastName = lastName
        return this
    }

    setAge(age: number): Person {
        this.age = age
        return this
    }

    getInfo(): string {
        return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
    }
}

const person = new Person().setFirstName('John').setLastName('Doe').setAge(30)

console.log(person.getInfo()) // Name: John Doe, Age: 30
