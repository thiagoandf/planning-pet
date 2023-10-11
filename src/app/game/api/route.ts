
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

  const gameId = request.nextUrl.searchParams.get('gameId')

  if (gameId === null) {
    return new Response('Not found', {
      status: 404,
    })
  }

  let game 
  try {
    game = await prisma.game.findFirstOrThrow({ where: { game_id: gameId } })
  } catch (error) {
    return new Response('Not found', {
      status: 404,
    })
  }

  return new Response('Hello, Next.js!', {
    status: 200,
  })
}