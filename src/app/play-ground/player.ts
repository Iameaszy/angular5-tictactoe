interface Player {
  name: string;
  type: 'X' | 'O';
}



export class Computer implements Player {
  constructor(public type: 'X' | 'O', public name: string) {
  }
}

export class Person implements Player {
  constructor(public name: string, public type: 'X' | 'O') { }
}
