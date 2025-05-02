
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Play, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ContentCardProps {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  accessType: "free" | "subscription" | "pay-per-view" | "nft";
  className?: string;
  priority?: boolean;
}

const ContentCard = ({
  id,
  title,
  creator,
  thumbnail,
  accessType,
  className,
  priority = false
}: ContentCardProps) => {
  return (
    <div className={cn("content-card group", className)}>
      <img 
        src={thumbnail} 
        alt={title}
        className="w-full h-full object-cover aspect-video"
        loading={priority ? "eager" : "lazy"}
      />
      
      <div className="content-card-overlay">
        <div className="flex items-start justify-between mb-2">
          <div className="blockchain-badge">
            <Shield className="h-3 w-3" />
            <span>Blockchain Secured</span>
          </div>
          
          {accessType !== "free" && (
            <div className="blockchain-badge">
              <Lock className="h-3 w-3" />
              <span>{accessType === "subscription" ? "Subscription" : accessType === "pay-per-view" ? "Pay Per View" : "NFT Access"}</span>
            </div>
          )}
        </div>

        <h3 className="font-medium text-base line-clamp-1 mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground mb-3">by {creator}</p>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button asChild size="sm" className="w-full">
            <Link to={`/watch/${id}`}>
              <Play className="h-4 w-4 mr-2" />
              Watch Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
