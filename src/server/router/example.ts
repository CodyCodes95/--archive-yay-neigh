import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  }).mutation("submitForm", {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      postCode: z.string(),
      instagramName: z.string(),
      carMake: z.string(),
      carModel: z.string(),
      suspension: z.string(),
      exteriorMods: z.string(),
      interiorMods: z.string(),
      engineMods: z.string(),
      wheels: z.string(),
      linkToPhotos: z.string(),
      photogUsername: z.string(),
    }), async resolve({ input }) {
      const submitForm = await prisma.submission.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          postCode: input.postCode,
          instagramName: input.instagramName,
          carMake: input.carMake,
          carModel: input.carModel,
          suspension: input.suspension,
          exteriorMods: input.exteriorMods,
          interiorMods: input.interiorMods,
          engineMods: input.engineMods,
          wheels: input.wheels,
          linkToPhotos: input.linkToPhotos,
          photogUsername: input.photogUsername,
        },
      })
      return submitForm;
    }
  });
