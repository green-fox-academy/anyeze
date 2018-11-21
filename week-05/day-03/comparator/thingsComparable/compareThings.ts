interface Comparable {
  compareTo(other: Comparable): number;

}

class Thing implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string, completed: boolean) {
    this.name = name;
    this.completed = completed;
  }

  public getName(): string {
    return this.name;
  }
  compareTo(other: Thing): number {
    if (this.completed === other.completed) {
      return 0;
    } else if (this.completed > other.completed) {
      return -1;
    } else {
      return 1;
    }
  };
}

let listOfThings: Thing[] = initializeThing();

function initializeThing(): Thing[] {
  return [
    new Thing('Get milk', true),
    new Thing('Remove the obstacles', false),
    new Thing('Stand up', true),
    new Thing('Eat lunch', false)
  ];
}
listOfThings.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
});
console.log(listOfThings);
export { Thing };
