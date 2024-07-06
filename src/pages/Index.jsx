import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  const navigate = useNavigate();

  const createSession = () => {
    const sessionId = uuidv4();
    navigate(`/session/${sessionId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Cornhole Game Tracker</h1>
        <p className="text-lg text-muted-foreground">Track your Cornhole game effortlessly</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Button onClick={createSession} className="px-8 py-4 text-xl">
          Create a Session
        </Button>
      </main>
      <footer className="text-center mt-8">
        <p className="text-muted-foreground">Cornhole Game Tracker © 2023</p>
      </footer>
    </div>
  );
};

export default Index;