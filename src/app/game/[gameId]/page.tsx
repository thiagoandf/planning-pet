export default function GamePage({ params }: { params: { gameId: string } }) {
  console.log(params.gameId)


  return (
    <div>Game: {params.gameId}</div>
  )
}