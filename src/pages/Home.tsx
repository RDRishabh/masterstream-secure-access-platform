
import FeaturedContent from "@/components/FeaturedContent";
import ContentRow from "@/components/ContentRow";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Lock, Users } from "lucide-react";

const Home = () => {
  // Mock data for featured content
  const featuredContent = {
    id: "featured-1",
    title: "Decentralized Future",
    description: "An exclusive documentary exploring how blockchain technology is revolutionizing digital content ownership and distribution.",
    creator: "Blockchain Studios",
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1800&auto=format&fit=crop",
    accessType: "free" as const
  };
  
  // Mock data for content rows
  const trendingContent = [
    {
      id: "content-1",
      title: "The Ethereum Revolution",
      creator: "Web3 Creators",
      thumbnail: "https://images.unsplash.com/photo-1639322537231-2ed124c333d9?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const
    },
    {
      id: "content-2",
      title: "NFT Masterclass",
      creator: "Digital Artists Guild",
      thumbnail: "https://images.unsplash.com/photo-1608481337062-92a5273f9307?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const
    },
    {
      id: "content-3",
      title: "Blockchain Security",
      creator: "Crypto Defenders",
      thumbnail: "https://images.unsplash.com/photo-1639322537174-9d0b7f3595dc?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const
    },
    {
      id: "content-4",
      title: "DeFi Fundamentals",
      creator: "Finance DAO",
      thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const
    },
    {
      id: "content-5",
      title: "Metaverse Pioneers",
      creator: "Virtual Reality Labs",
      thumbnail: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=800&auto=format&fit=crop",
      accessType: "nft" as const
    },
    {
      id: "content-6",
      title: "Smart Contract Development",
      creator: "Code Guild",
      thumbnail: "https://images.unsplash.com/photo-1565373679107-224d65a7b7f0?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const
    }
  ];
  
  const popularContent = [
    {
      id: "content-7",
      title: "Web3 Documentary",
      creator: "Decentralized Films",
      thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const
    },
    {
      id: "content-8",
      title: "Crypto Art Revolution",
      creator: "Digital Creators Collective",
      thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      accessType: "nft" as const
    },
    {
      id: "content-9",
      title: "DAO Governance",
      creator: "Governance Labs",
      thumbnail: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const
    },
    {
      id: "content-10",
      title: "Zero Knowledge Proofs",
      creator: "Privacy Tech",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const
    },
    {
      id: "content-11",
      title: "Layer 2 Scaling",
      creator: "Blockchain Academy",
      thumbnail: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const
    },
    {
      id: "content-12",
      title: "Tokenomics Explained",
      creator: "Crypto Economics",
      thumbnail: "https://images.unsplash.com/photo-1607918921591-0044e456a67a?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const
    }
  ];
  
  return (
    <div>
      <FeaturedContent {...featuredContent} />
      
      <div className="container py-12 space-y-6">
        <ContentRow title="Trending Now" items={trendingContent} />
        <ContentRow title="Popular on KAVACH" items={popularContent} />
        
        {/* Features section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blockchain-Secured Streaming Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              KAVACH combines the power of blockchain with premium streaming experiences, 
              giving creators control and viewers unprecedented access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-border/60 bg-card/30 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Secure DRM</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain-backed Digital Rights Management protects content from piracy and unauthorized access.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-border/60 bg-card/30 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Creator Control</h3>
              <p className="text-sm text-muted-foreground">
                Full control over pricing, distribution, and revenue tracking on a transparent platform.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-border/60 bg-card/30 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Multiple Access Models</h3>
              <p className="text-sm text-muted-foreground">
                Choose between pay-per-view, subscription, or NFT-based access for maximum flexibility.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-border/60 bg-card/30 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Community Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Connect with your audience through interactive features and direct communication.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16">
          <div className="rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2000&auto=format&fit=crop" 
              alt="Creator tools" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-background/10 flex items-center">
              <div className="container">
                <div className="max-w-lg space-y-5">
                  <h2 className="text-3xl font-bold">Ready to start creating?</h2>
                  <p className="text-muted-foreground">
                    Join thousands of creators who are already earning with secure, 
                    blockchain-protected content distribution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link to="/create">Get Started</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
