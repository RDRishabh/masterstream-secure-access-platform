
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentCard from "@/components/ContentCard";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for content
  const allContent = [
    {
      id: "content-1",
      title: "The Ethereum Revolution",
      creator: "Web3 Creators",
      thumbnail: "https://images.unsplash.com/photo-1639322537231-2ed124c333d9?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const,
      category: "documentaries"
    },
    {
      id: "content-2",
      title: "NFT Masterclass",
      creator: "Digital Artists Guild",
      thumbnail: "https://images.unsplash.com/photo-1608481337062-92a5273f9307?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const,
      category: "tutorials"
    },
    {
      id: "content-3",
      title: "Blockchain Security",
      creator: "Crypto Defenders",
      thumbnail: "https://images.unsplash.com/photo-1639322537174-9d0b7f3595dc?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const,
      category: "tutorials"
    },
    {
      id: "content-4",
      title: "DeFi Fundamentals",
      creator: "Finance DAO",
      thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const,
      category: "courses"
    },
    {
      id: "content-5",
      title: "Metaverse Pioneers",
      creator: "Virtual Reality Labs",
      thumbnail: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=800&auto=format&fit=crop",
      accessType: "nft" as const,
      category: "documentaries"
    },
    {
      id: "content-6",
      title: "Smart Contract Development",
      creator: "Code Guild",
      thumbnail: "https://images.unsplash.com/photo-1565373679107-224d65a7b7f0?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const,
      category: "courses"
    },
    {
      id: "content-7",
      title: "Web3 Documentary",
      creator: "Decentralized Films",
      thumbnail: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const,
      category: "documentaries"
    },
    {
      id: "content-8",
      title: "Crypto Art Revolution",
      creator: "Digital Creators Collective",
      thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      accessType: "nft" as const,
      category: "documentaries"
    },
    {
      id: "content-9",
      title: "DAO Governance",
      creator: "Governance Labs",
      thumbnail: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const,
      category: "tutorials"
    },
    {
      id: "content-10",
      title: "Zero Knowledge Proofs",
      creator: "Privacy Tech",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      accessType: "pay-per-view" as const,
      category: "courses"
    },
    {
      id: "content-11",
      title: "Layer 2 Scaling",
      creator: "Blockchain Academy",
      thumbnail: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?q=80&w=800&auto=format&fit=crop",
      accessType: "subscription" as const,
      category: "tutorials"
    },
    {
      id: "content-12",
      title: "Tokenomics Explained",
      creator: "Crypto Economics",
      thumbnail: "https://images.unsplash.com/photo-1607918921591-0044e456a67a?q=80&w=800&auto=format&fit=crop",
      accessType: "free" as const,
      category: "courses"
    }
  ];
  
  // Filter content based on search query and active tab
  const filterContent = (category: string) => {
    return allContent
      .filter(item => 
        category === "all" || item.category === category
      )
      .filter(item =>
        searchQuery === "" || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.creator.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };
  
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Content</h1>
          <p className="text-muted-foreground">
            Discover blockchain-secured content from independent creators
          </p>
        </div>
        
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full md:w-80 p-2 pl-4 rounded-lg border border-input bg-background"
              placeholder="Search content or creators"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="documentaries">Documentaries</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterContent("all").length > 0 ? (
              filterContent("all").map(content => (
                <ContentCard key={content.id} {...content} />
              ))
            ) : (
              <div className="col-span-4 py-10 text-center">
                <p className="text-muted-foreground">No content matches your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="documentaries" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterContent("documentaries").length > 0 ? (
              filterContent("documentaries").map(content => (
                <ContentCard key={content.id} {...content} />
              ))
            ) : (
              <div className="col-span-4 py-10 text-center">
                <p className="text-muted-foreground">No documentaries match your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterContent("courses").length > 0 ? (
              filterContent("courses").map(content => (
                <ContentCard key={content.id} {...content} />
              ))
            ) : (
              <div className="col-span-4 py-10 text-center">
                <p className="text-muted-foreground">No courses match your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterContent("tutorials").length > 0 ? (
              filterContent("tutorials").map(content => (
                <ContentCard key={content.id} {...content} />
              ))
            ) : (
              <div className="col-span-4 py-10 text-center">
                <p className="text-muted-foreground">No tutorials match your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Browse;
