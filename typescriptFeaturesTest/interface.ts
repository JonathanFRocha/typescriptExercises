interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `color: ${this.color}, carbonated: ${this.carbonated}, sugar: ${this.sugar}`;
  },
};

const oldCivid = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}, year: ${this.year}, broken? ${this.broken}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivid);
printSummary(drink1);
