
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, UserCheck } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("signup") === "true" ? "signup" : "signin";
  
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to authentication services
    console.log("Form submitted:", { mode, email, password, name });
    
    // For demo purposes, we'll just show a success message
    alert(`${mode === "signup" ? "Account created" : "Signed in"} successfully!`);
  };
  
  return (
    <div className="container py-16 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {mode === "signup" ? "Create an Account" : "Welcome Back"}
        </h1>
        <p className="text-muted-foreground">
          {mode === "signup" 
            ? "Join the blockchain-secured streaming platform" 
            : "Sign in to access your content"}
        </p>
      </div>
      
      <div className="rounded-lg border border-border bg-card/30 p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full mt-6">
            {mode === "signup" ? "Create Account" : "Sign In"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {mode === "signup" 
              ? "Already have an account? " 
              : "Don't have an account? "}
            <button
              onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
              className="text-primary hover:underline font-medium"
            >
              {mode === "signup" ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <h4 className="text-sm font-medium">Secure Authentication</h4>
                <p className="text-xs text-muted-foreground">
                  Standard login plus optional crypto wallet integration
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-primary" />
              <div>
                <h4 className="text-sm font-medium">Creator & Viewer Access</h4>
                <p className="text-xs text-muted-foreground">
                  One account for both consuming and creating content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
