import {
  getHabits,
  getTodayHabits,
  addHabit,
  updateHabit,
} from "../habits.helper.js";

export async function habitsRoute(fastify) {
  fastify.get("/", async (request, reply) => {
    try {
      const habits = await getHabits();
      return habits;
    } catch (error) {
      reply.code(400).send({
        error: error.message,
      });
    }
  });

  fastify.get("/today", async (request, reply) => {
    try {
      const todayHabits = await getTodayHabits();
      return todayHabits;
    } catch (error) {
      reply.code(400).send({
        error: error.message,
      });
    }
  });

  fastify.post("/:habitId", async (request, reply) => {
    const body = request.body;

    if (body.title === undefined) {
      reply.code(400).send({
        error: "Title is required in the body",
      });
    }

    const newHabit = await addHabit(body.title);
    return newHabit;
  });

  fastify.patch("/:habitId", async (request, reply) => {
    const body = request.body;

    if (body.done === undefined) {
      reply.code(400).send({
        error: "Done is required in the body",
      });
    }

    if (typeof body.done !== "boolean") {
      reply.code(400).send({
        error: "Done value in the body must be a boolean",
      });
    }

    const habitId = Number(request.params.habitId);
    if (!habitId || Number.isNaN(habitId)) {
      reply.code(400).send({
        error: "habitId params must be a number",
      });
    }

    try {
      const updatedHabit = await updateHabit(habitId, body.done);
      return updatedHabit;
    } catch (error) {
      reply.code(400).send({
        error: error.message,
      });
    }
  });
}
