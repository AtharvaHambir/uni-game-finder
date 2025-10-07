import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  User,
  Calendar,
  Dumbbell,
} from "lucide-react";
import { toast } from "sonner";

// Mock data - would come from database
const mockGame = {
  id: 1,
  sport: "Basketball",
  location: "Recreation Center Court 3",
  date: "2025-10-08",
  time: "6:00 PM",
  currentPlayers: 6,
  maxPlayers: 10,
  skillLevel: "All Levels",
  organizer: {
    name: "Alex Chen",
    initials: "AC",
  },
  description:
    "Looking for players for a casual pickup game. All skill levels welcome! Bring your own water. We'll play until sunset or until everyone's tired.",
  players: [
    { id: 1, name: "Alex Chen", initials: "AC" },
    { id: 2, name: "Maria Garcia", initials: "MG" },
    { id: 3, name: "Jordan Lee", initials: "JL" },
    { id: 4, name: "Sam Wilson", initials: "SW" },
    { id: 5, name: "Taylor Brown", initials: "TB" },
    { id: 6, name: "Casey Martinez", initials: "CM" },
  ],
};

const GameDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleJoinGame = () => {
    toast.success("You've joined the game!");
  };

  const handleLeaveGame = () => {
    toast.info("You've left the game");
  };

  const spotsRemaining = mockGame.maxPlayers - mockGame.currentPlayers;
  const isFull = spotsRemaining === 0;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="gradient-primary shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground">Game Details</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Game Card */}
          <Card className="shadow-card-hover">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-300 border text-lg py-1 px-3">
                      {mockGame.sport}
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      {mockGame.skillLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl">{mockGame.sport} Game</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Organized by {mockGame.organizer.name}
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  <Button onClick={handleJoinGame} disabled={isFull} size="lg">
                    {isFull ? "Game Full" : "Join Game"}
                  </Button>
                  <Button variant="outline" onClick={handleLeaveGame} size="sm">
                    Leave Game
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Game Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{mockGame.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">
                        {new Date(mockGame.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{mockGame.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Players</p>
                      <p className="font-medium">
                        {mockGame.currentPlayers}/{mockGame.maxPlayers} joined
                      </p>
                      <p className="text-sm text-accent">
                        {isFull ? "Game is full" : `${spotsRemaining} spots remaining`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="gradient-primary h-3 rounded-full transition-all"
                    style={{
                      width: `${(mockGame.currentPlayers / mockGame.maxPlayers) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              {mockGame.description && (
                <div>
                  <h3 className="font-semibold mb-2">About this game</h3>
                  <p className="text-muted-foreground leading-relaxed">{mockGame.description}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Players List */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Players ({mockGame.players.length})</CardTitle>
              <CardDescription>Students joining this game</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mockGame.players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-base"
                  >
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {player.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      {player.id === 1 && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          Organizer
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
