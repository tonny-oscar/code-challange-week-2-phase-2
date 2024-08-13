import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [data, setData] = useState([]);
  const [myBots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //delete request
  const dischargeBot = (id) => {
    releaseBot(id);
    console.log("remove from db");
  };

  // enlist bot
  const enlistBot = (bot) => {
    const findBot = myBots.find((b) => b.id === bot.id);
    if (findBot === undefined) {
      setBots([...myBots, bot]);
    }
  };

  const releaseBot = (id) => {
    // filter
    console.log("release from army");
  };

  return (
    <main>
      <h1>My bot army</h1>
      <BotArmy myBots={myBots} releaseBot={releaseBot} />
      <h1>Bot collection</h1>
      <BotCollection
        data={data}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </main>
  );
}

export default App.jsx;
