
import Player from "./components/Player"

function App() {
  

  return (
    <main>
        <div id="game-container">
            <ol>
                  <Player name="Player 1"  symbol="X"></Player>
                  <Player name="Player 2"  symbol="O"></Player>
            </ol>
            GAME BORD
        </div>
    </main>
  )
}

export default App
