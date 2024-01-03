
import { useNewGameState } from "@/app/hooks/game";

const MainMenu = () => {
    const startNewGame = useNewGameState()
  return (
    <div className="bg-gray-200 p-5 rounded-md dark:bg-black">
        <ul role="list" className="divide-y divide-gray-100">
        <li className="relative flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <h1>Continue</h1>
          </div>
        </li>
        <li 
            className="relative flex justify-between gap-x-6 py-5 cursor-pointer"
            onClick={startNewGame}
        >
          <div className="flex min-w-0 gap-x-4">
            <h1>New Game</h1>
          </div>
        </li>
        <li className="relative flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <h1>Load Game</h1>
          </div>
        </li>
    </ul>
    </div>
  );
};

export default MainMenu;
