// Basic Types
let x: number = 5
let y: number = 10
let company: string = 'Samsung'
let isPublished: boolean = true

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, "Sam", true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Sam'],
    [2, 'John'],
]

// Union
let pid: string | number
pid = '22'
pid = 22

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function add(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void{
    console.log(message)
}

// Interfaces
interface UserInterface{
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

type Point = number | string
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add1: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
    getId(): number
    getName(): string
}

// Classes
class Person implements PersonInterface{
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    getId(): number {
        return this.id
    }
    getName(): string {
        return this.name
    }
    register(): string {
        return `${this.name} is now registered`
    }
}

// subclass
class Employee extends Person{
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
    register(): string {
        return `${this.name} is now registered as ${this.position}`
    }
}

const john = new Person(1, 'John Doe')
const sam = new Employee(2, 'Sam Smith', 'Developer')
console.log(sam.register())

// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["a", "b"])