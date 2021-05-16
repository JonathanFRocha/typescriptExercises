import { User } from "../models/user";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    const name = input.value;
    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  bintEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
    <div>
      <h1>User Form<h1/>
      <h3>User name: ${this.model.get("name")}</h3>
      <h3>User age: ${this.model.get("age")}</h3>
      <input/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set random Age</button>
    </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bintEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
