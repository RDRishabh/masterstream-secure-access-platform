
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/40 backdrop-blur-lg bg-background/80 fixed top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-platform-purple to-platform-teal flex items-center justify-center">
              <span className="font-bold text-white">MS</span>
            </div>
            <span className="font-heading font-bold text-lg hidden sm:inline-block">MasterStream</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/" className="nav-link nav-link-active">Home</Link>
            <Link to="/browse" className="nav-link">Browse</Link>
            <Link to="/create" className="nav-link">Create</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link to="/auth">Sign In</Link>
          </Button>
          
          <Button asChild>
            <Link to="/auth?signup=true">Get Started</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            <Link to="/" className="nav-link nav-link-active" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/browse" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Browse</Link>
            <Link to="/create" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Create</Link>
            <Link to="/auth" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
