
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedContentProps {
  id: string;
  title: string;
  description: string;
  creator: string;
  thumbnail: string;
  accessType: "free" | "subscription" | "pay-per-view" | "nft";
}

const FeaturedContent = ({
  id,
  title,
  description,
  creator,
  thumbnail,
  accessType
}: FeaturedContentProps) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-end pb-16 pt-32">
        <div className="max-w-2xl space-y-4">
          <div className="blockchain-badge mb-2">
            <Shield className="h-3 w-3" />
            <span>Blockchain Secured Content</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-sm md:text-base text-muted-foreground">By {creator}</p>
          <p className="text-sm md:text-base text-muted-foreground">{description}</p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link to={`/watch/${id}`}>Watch Now</Link>
            </Button>
            
            <Button variant="outline" asChild size="lg">
              <Link to={`/details/${id}`}>More Info</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
