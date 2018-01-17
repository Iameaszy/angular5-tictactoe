interface Person {
  name: string;
  type: "X" | "O";
}

export class Computer implements Player {
  constructor(
    public type: "X" | "O",
    public name: string,
    public win: boolean = false
  ) {}
}

export class Player implements Person {
  constructor(
    public name: string,
    public type: "X" | "O",
    public win: boolean = false
  ) {}
}

export class Empty {
  type: " ";
  constructor() {
    this.type = " ";
  }
}
