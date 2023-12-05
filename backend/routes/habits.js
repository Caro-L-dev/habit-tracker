import { getHabits } from "../habits.helper.js";

export async function habitsRoute(fastify) {
  fastify.get("/", async () => {
    const habits = await getHabits();
    return habits;
  });
}
