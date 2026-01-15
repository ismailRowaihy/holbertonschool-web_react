interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher1: Teacher = {
    firstName: 'some',
    fullTimeEmployee: false,
    lastName: 'dude',
    location: 'here',
    contract: false,
};

console.log(teacher1);