import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const snippetRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ text: z.string(), language: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const createdSnippet = await ctx.prisma.snippet.create({
        data: { language: input.language, text: input.text }
      })

      return createdSnippet
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const allSnippets = await ctx.prisma.snippet.findMany()

    return allSnippets
  }),

  getOne: publicProcedure.input(z.object({ id: z.string().cuid() })).query(async ({ ctx, input }) => {
    const snippet = await ctx.prisma.snippet.findUnique({
      where: {
        id: input.id
      }
    })

    return snippet
  })
})
