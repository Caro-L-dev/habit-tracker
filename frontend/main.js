import "./style.css";
import { TodayHabits } from "./ui/TodayHabits";
import { AddHabitDialog } from "./ui/AddHabitDialog";

const todayHabits = TodayHabits.getInstance();
todayHabits.init();

const addHabitDialog = AddHabitDialog.getInstance();
addHabitDialog.init();
