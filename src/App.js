import { useEffect, useState } from 'react'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame } from './components/start'
import Game from './components/Game'
import BullsEye from './components/Bullseye'
import Header from './components/Header'

export default function App() {
  const [game, setGame] = useState(0)
  const [score, setScore] = useState(game?.total || 0)
  const [round, setRound] = useState(0)

  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  useEffect(() => {
    // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(round))
    setScore(0)
  }, [round])

  const btns = game ? game.buttons : []
  const perfectScore = btns.reduce(
    (acc, { point }) => (point > 0 ? acc + point : acc),
    0
  )
  return (
    <div>
      <Header maxPoints={perfectScore} score={score} />
      {score === perfectScore && ( // brukere kan gå til neste runde hvis de har oppnådd maksimalt antall av oppnåelige poeng
        <Game updateRound={() => setRound(round + 1)} />
      )}
      <div className="grid grid-cols-4 gap-6">
        {(btns || []).map(({ color, point }) => (
          <BullsEye
            score={score}
            isDisabled={score === perfectScore} // hindre brukere i å samhandle med brukergrensesnittet hvis de allerede har oppnådd det maksimale antallet
            eyeColor={color}
            changeScore={() => {
              setScore(score + point)
            }}
          />
        ))}
      </div>
    </div>
  )
}