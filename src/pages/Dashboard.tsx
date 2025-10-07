import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Dumbbell,
  MapPin,
  Clock,
  Users,
  Search,
  Plus,
  Filter,
  User,
} from "lucide-react";

// Mock data for games
const mockGames = [
  {
    id: 1,
    sport: "Basketball",
    location: "Recreation Center Court 3",
    time: "Today, 6:00 PM",
    currentPlayers: 6,
    maxPlayers: 10,
    skillLevel: "All Levels",
    organizer: "Alex Chen",
  },
  {
    id: 2,
    sport: "Soccer",
    location: "North Campus Field",
    time: "Tomorrow, 4:30 PM",
    currentPlayers: 14,
    maxPlayers: 20,
    skillLevel: "Intermediate",
    organizer: "Maria Garcia",
  },
  {
    id: 3,
    sport: "Volleyball",
    location: "Beach Court",
    time: "Today, 7:30 PM",
    currentPlayers: 8,
    maxPlayers: 12,
    skillLevel: "Beginner",
    organizer: "Jordan Lee",
  },
  {
    id: 4,
    sport: "Tennis",
    location: "East Tennis Courts",
    time: "Tomorrow, 2:00 PM",
    currentPlayers: 2,
    maxPlayers: 4,
    skillLevel: "Advanced",
    organizer: "Sam Wilson",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = mockGames.filter(
    (game) =>
      game.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSportColor = (sport: string) => {
    const colors: Record<string, string> = {
      Basketball: "bg-orange-100 text-orange-700 border-orange-300",
      Soccer: "bg-green-100 text-green-700 border-green-300",
      Volleyball: "bg-blue-100 text-blue-700 border-blue-300",
      Tennis: "bg-purple-100 text-purple-700 border-purple-300",
    };
    return colors[sport] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="gradient-primary shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground">Pickup Play</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="hero"
                size="sm"
                onClick={() => navigate("/create-game")}
                className="bg-background text-primary hover:bg-background/90"
              >
                <Plus className="w-4 h-4" />
                Create Game
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/profile")}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by sport or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Available Games</h2>
            {filteredGames.length === 0 ? (
              <Card className="shadow-card">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No games found. Create one to get started!</p>
                  <Button
                    variant="default"
                    onClick={() => navigate("/create-game")}
                    className="mt-4"
                  >
                    Create Game
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <Card
                    key={game.id}
                    className="shadow-card hover:shadow-card-hover transition-base cursor-pointer group"
                    onClick={() => navigate(`/game/${game.id}`)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={`${getSportColor(game.sport)} border`}>
                          {game.sport}
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent">
                          {game.skillLevel}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-base">
                        {game.sport} Game
                      </CardTitle>
                      <CardDescription>Organized by {game.organizer}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{game.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">{game.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">
                          {game.currentPlayers}/{game.maxPlayers} players
                        </span>
                      </div>
                      <div className="pt-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="gradient-primary h-2 rounded-full transition-all"
                            style={{
                              width: `${(game.currentPlayers / game.maxPlayers) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
