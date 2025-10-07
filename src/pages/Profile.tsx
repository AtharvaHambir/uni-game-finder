import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Dumbbell, Mail, School, LogOut, Trophy, Calendar } from "lucide-react";
import { toast } from "sonner";

// Mock user data
const mockUser = {
  name: "Alex Chen",
  initials: "AC",
  email: "alex.chen@stanford.edu",
  university: "Stanford University",
  gamesPlayed: 24,
  gamesOrganized: 8,
  favoriteSport: "Basketball",
  memberSince: "September 2024",
};

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/auth");
  };

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
              <h1 className="text-2xl font-bold text-primary-foreground">Profile</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Profile Card */}
          <Card className="shadow-card-hover">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                    {mockUser.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <CardTitle className="text-3xl mb-2">{mockUser.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                      <Mail className="w-4 h-4" />
                      <span>{mockUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                      <School className="w-4 h-4" />
                      <span>{mockUser.university}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {mockUser.memberSince}</span>
                    </div>
                  </div>
                </div>
                <Button variant="destructive" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="shadow-card hover:shadow-card-hover transition-base">
              <CardHeader className="pb-3">
                <CardDescription>Games Played</CardDescription>
                <CardTitle className="text-4xl text-primary">{mockUser.gamesPlayed}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-base">
              <CardHeader className="pb-3">
                <CardDescription>Games Organized</CardDescription>
                <CardTitle className="text-4xl text-accent">{mockUser.gamesOrganized}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-base">
              <CardHeader className="pb-3">
                <CardDescription>Favorite Sport</CardDescription>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  {mockUser.favoriteSport}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest games and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Joined Basketball game</p>
                    <p className="text-sm text-muted-foreground">Recreation Center • 2 days ago</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300 border">
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Organized Soccer game</p>
                    <p className="text-sm text-muted-foreground">North Campus Field • 5 days ago</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300 border">
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Joined Volleyball game</p>
                    <p className="text-sm text-muted-foreground">Beach Court • 1 week ago</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300 border">
                    Completed
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
