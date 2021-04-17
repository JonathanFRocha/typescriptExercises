class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log(this.color);
  }
  private honk(): void {
    console.log("beeep");
  }
}

class Car extends Vehicle {
  protected drive(): void {
    console.log("vrrooooom");
  }
}
