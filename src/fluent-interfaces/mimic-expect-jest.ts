export class Expect<T> {
    constructor(private actual: T) {}

    toBe(expected: T): this {
        if (this.actual !== expected) {
            throw new Error(`Expected ${this.actual} to be ${expected}`)
        }

        return this
    }

    not: NotExpect<T> = new NotExpect(this.actual)
}

export class NotExpect<T> {
    constructor(private actual: T) {}

    toBe(expected: T): this {
        if (this.actual === expected) {
            throw new Error(`Expected ${expected} not to be ${this.actual}`)
        }
        return this
    }

    // other assertion methods...
}

export function expect<T>(actual: T): Expect<T> {
    return new Expect<T>(actual)
}
