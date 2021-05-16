import { User } from "./models/user";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Name", age: 20 });

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
