import "./style.css";
import { TodayHabits } from "./ui/TodayHabits";
import { HabitHistoryDialog } from "./ui/HabitHistoryDialog";
import { AddHabitDialog } from "./ui/AddHabitDialog";

TodayHabits.getInstance().init();
AddHabitDialog.getInstance().init();
HabitHistoryDialog.getInstance().init();
