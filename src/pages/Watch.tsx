
import { useParams } from "react-router-dom";
import { Shield, Heart, Share2, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  
  // Mock data for the video content
  // In a real application, this would be fetched from an API based on the video ID
  const videoContent = {
    id,
    title: "The Future of Digital Rights Management with Blockchain",
    creator: "Blockchain Innovations",
    description: "This documentary explores how blockchain technology is revolutionizing the way we manage and protect digital content. From NFTs to smart contracts, we dive deep into the technology that's changing the content industry.",
    views: 18439,
    likes: 1248,
    comments: [
      { id: "c1", user: "CryptoFan", text: "Amazing content! I learned so much about how blockchain can secure digital content.", time: "2 days ago" },
      { id: "c2", user: "BlockchainDev", text: "The section on smart contracts was particularly insightful. Would love to see more deep dives into the technical aspects.", time: "1 day ago" },
      { id: "c3", user: "Web3Explorer", text: "This is exactly the kind of content that should be on a platform like this. Secure, informative, and well-produced.", time: "12 hours ago" },
    ],
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1800&auto=format&fit=crop",
    accessType: "subscription" as const
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would usually send the comment to a database
    alert(`Comment submitted: ${comment}`);
    setComment("");
  };
  
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Video player area */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-6">
            <img 
              src={videoContent.thumbnail} 
              alt={videoContent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                </svg>
              </Button>
            </div>
            <div className="absolute top-4 right-4">
              <div className="blockchain-badge">
                <Shield className="h-3 w-3" />
                <span>Blockchain Secured</span>
              </div>
            </div>
          </div>
          
          {/* Video info */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{videoContent.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>{videoContent.creator}</span>
              <span>•</span>
              <span>{videoContent.views.toLocaleString()} views</span>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                {videoContent.likes.toLocaleString()}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Join Creator Community
              </Button>
            </div>
            
            {/* Description */}
            <div className="bg-card/30 rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">{videoContent.description}</p>
            </div>
          </div>
          
          {/* Comments section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Comments</h2>
            
            <form onSubmit={handleCommentSubmit} className="flex gap-4 mb-6">
              <Input
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button type="submit" variant="outline">Post</Button>
            </form>
            
            <div className="space-y-4">
              {videoContent.comments.map(comment => (
                <div key={comment.id} className="p-4 rounded-lg bg-card/30 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-medium">{comment.user.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{comment.user}</p>
                      <p className="text-xs text-muted-foreground">{comment.time}</p>
                    </div>
                  </div>
                  <p className="text-sm">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div>
          <div className="sticky top-20">
            <h2 className="text-xl font-medium mb-4">Related Content</h2>
            
            <Tabs defaultValue="recommended">
              <TabsList className="mb-4">
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="creator">From Creator</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recommended" className="space-y-4">
                {/* Mock related content */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-32 h-20 bg-muted rounded-md overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1643153520658-${i}b2146dad40?q=80&w=400&auto=format&fit=crop`}
                        alt="Related video"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium line-clamp-2">Blockchain Security Best Practices</h3>
                      <p className="text-xs text-muted-foreground mt-1">Crypto Academy</p>
                      <p className="text-xs text-muted-foreground mt-1">8.2K views</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="creator" className="space-y-4">
                {/* Mock creator content */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-32 h-20 bg-muted rounded-md overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1641259041535-${i}e6021e2435e?q=80&w=400&auto=format&fit=crop`}
                        alt="Creator video"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium line-clamp-2">Web3 Revolution Explained</h3>
                      <p className="text-xs text-muted-foreground mt-1">Blockchain Innovations</p>
                      <p className="text-xs text-muted-foreground mt-1">12.4K views</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 p-4 rounded-lg bg-card/30 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Creator Chat</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Join the conversation with the creator and other viewers about this content.
              </p>
              <Button className="w-full" variant="outline">
                Enter Chat Room
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
