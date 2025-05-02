
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContentCard, { ContentCardProps } from "@/components/ContentCard";

interface ContentRowProps {
  title: string;
  items: Omit<ContentCardProps, 'priority'>[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update button states after scrolling
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className="opacity-70 hover:opacity-100 disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className="opacity-70 hover:opacity-100 disabled:opacity-30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div 
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x" 
        ref={rowRef}
        onScroll={checkScrollButtons}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="min-w-[280px] w-[280px] snap-start" style={{ scrollSnapAlign: 'start' }}>
            <ContentCard {...item} priority={index < 2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
