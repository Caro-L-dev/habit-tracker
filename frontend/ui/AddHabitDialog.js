import { createHabit } from "../api/habits-api";
import { TodayHabits } from "./TodayHabits";

export class AddHabitDialog {
  static instance;
  constructor() {
    if (AddHabitDialog.instance) {
      throw new Error("Use AddHabitDialog.getInstance() instead.");
    }
  }

  static getInstance() {
    if (!AddHabitDialog.instance) {
      AddHabitDialog.instance = new AddHabitDialog();
    }
    return AddHabitDialog.instance;
  }

  _openModal = false;

  init() {
    this.btnAddNewHabit = document.getElementById("add-new-habit");
    this.dialog = document.getElementById("add-habit-dialog");
    this.form = document.getElementById("add-habit-form");

    this.btnAddNewHabit.addEventListener("click", () => {
      this.openModal = true;
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit(event);
    });
  }

  async handleSubmit(event) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title");
    console.log({ title });

    try {
      await createHabit(title);
      TodayHabits.getInstance().refresh();
      this.openModal = false;
    } catch {
      alert("Failed to create habit");
    }
  }

  get openModal() {
    return this._openModal;
  }

  set openModal(newOpen) {
    this._openModal = newOpen;
    if (newOpen) {
      this.dialog.setAttribute("open", "");
    } else {
      this.dialog.removeAttribute("open");
    }
  }
}
