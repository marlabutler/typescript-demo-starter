interface Animal {
    name: string;
    numberOfLegs: number;
}

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}
// One rule of interfaces is that you can't instantiate them.
// Interfaces aren't used to create objects. They are used to shape them
// "One of TypeScript’s core principles is that type-checking focuses on the shape that values have."
// Had to comment out Animal in classes.ts file to resolve red squiggly 
