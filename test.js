class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
}

const harry = new Employee('Harry Burns', 90000)
const sally = new Employee('Sally Albright', 100000)
harry.raiseSalary(10)
sally.raiseSalary(10)

console.log({ harry, sally })
console.log(typeof Employee)
console.log(harry.raiseSalary === sally.raiseSalary)


let makeCounter = (start) => {
    let current = start - 1;
    console.log(`current value: ${current}`);
    const updater = () => {
        current++;
        return current;
    };
    return updater;
};



function sumAll2(...args) {
    console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        console.log(`-->> ${args[i]}`);
    }
}

function sumAll() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    return sum;
}

class Account {
    constructor(balance) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount
    }
}

let fredsAccount = new Account(1000)
fredsAccount.deposit(500)
fredsAccount.withdraw(200)
console.log(fredsAccount.balance)
  // Should print 1300



