import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HexColorPicker } from "react-colorful";

const Session = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teamA, setTeamA] = useState({ name: "Team A", color: "#ff0000", score: 0 });
  const [teamB, setTeamB] = useState({ name: "Team B", color: "#0000ff", score: 0 });
  const [customizationComplete, setCustomizationComplete] = useState(false);

  const handleEndSession = () => {
    navigate("/");
  };

  const handleScoreChange = (team, delta) => {
    if (team === "A") {
      setTeamA((prev) => ({ ...prev, score: prev.score + delta }));
    } else {
      setTeamB((prev) => ({ ...prev, score: prev.score + delta }));
    }
  };

  const handleCustomizationComplete = () => {
    setCustomizationComplete(true);
  };

  if (customizationComplete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Cornhole Game Tracker</h1>
          <p className="text-lg text-muted-foreground">Session ID: {id}</p>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-8">
            <div className="flex flex-col items-center space-y-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
              <h2 className="text-2xl" style={{ color: teamA.color }}>{teamA.name}</h2>
              <p className="text-4xl">{teamA.score}</p>
              <div className="flex space-x-2">
                <Button onClick={() => handleScoreChange("A", 1)} className="px-4 py-2 bg-green-500 text-white rounded-lg">+</Button>
                <Button onClick={() => handleScoreChange("A", -1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">-</Button>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
              <h2 className="text-2xl" style={{ color: teamB.color }}>{teamB.name}</h2>
              <p className="text-4xl">{teamB.score}</p>
              <div className="flex space-x-2">
                <Button onClick={() => handleScoreChange("B", 1)} className="px-4 py-2 bg-green-500 text-white rounded-lg">+</Button>
                <Button onClick={() => handleScoreChange("B", -1)} className="px-4 py-2 bg-red-500 text-white rounded-lg">-</Button>
              </div>
            </div>
          </div>
        </main>
        <footer className="text-center mt-8">
          <Button onClick={handleEndSession} className="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg">
            End Session
          </Button>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Cornhole Game Tracker</h1>
        <p className="text-lg text-muted-foreground">Session ID: {id}</p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="flex space-x-8">
          <div className="flex flex-col items-center space-y-4 p-4 border border-gray-300 rounded-lg bg-gray-100">
            <Label htmlFor="teamAName">Team A Name</Label>
            <Input
              id="teamAName"
              value={teamA.name}
              onChange={(e) => setTeamA({ ...teamA, name: e.target.value })}
            />
            <Label>Team A Color</Label>
            <HexColorPicker color={teamA.color} onChange={(color) => setTeamA({ ...teamA, color })} />
          </div>
          <div className="flex flex-col items-center space-y-4 p-4 border border-gray-300 rounded-lg bg-gray-100">
            <Label htmlFor="teamBName">Team B Name</Label>
            <Input
              id="teamBName"
              value={teamB.name}
              onChange={(e) => setTeamB({ ...teamB, name: e.target.value })}
            />
            <Label>Team B Color</Label>
            <HexColorPicker color={teamB.color} onChange={(color) => setTeamB({ ...teamB, color })} />
          </div>
        </div>
        <Button onClick={handleCustomizationComplete} className="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg">
          Start Game
        </Button>
      </main>
      <footer className="text-center mt-8">
        <Button onClick={handleEndSession} className="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg">
          End Session
        </Button>
      </footer>
    </div>
  );
};

export default Session;