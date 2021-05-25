class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log(this.color);
  }
  private honk(): void {
    console.log("beeep");
  }
}
