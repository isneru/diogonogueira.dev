import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const snippetRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        text: z.string(),
        language: z.string(),
        tags: z.array(z.string())
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (input.tags.length > 0) {
        const createdSnippet = await ctx.prisma.snippet.create({
          data: {
            language: input.language,
            text: input.text,
            tags: {
              create: [...input.tags.map(tag => ({ text: tag }))]
            }
          },
          include: { tags: true }
        })
        return createdSnippet
      } else {
        const createdSnippet = await ctx.prisma.snippet.create({
          data: {
            language: input.language,
            text: input.text
          }
        })
        return createdSnippet
      }
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const allSnippets = await ctx.prisma.snippet.findMany({
      orderBy: {
        createdAt: "desc"
      },
      include: { tags: true }
    })

    return allSnippets
  }),

  getOne: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const snippet = await ctx.prisma.snippet.findUnique({
        where: {
          id: input.id
        },
        include: { tags: true }
      })

      return snippet
    })
})
