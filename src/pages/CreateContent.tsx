
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileUp, Shield, Lock, CreditCard } from "lucide-react";
import { useState } from "react";

const CreateContent = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };
  
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Create Content</h1>
      <p className="text-muted-foreground mb-8">
        Upload and manage your blockchain-secured content
      </p>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="manage">Manage Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter content title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your content" 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="documentaries">Documentaries</SelectItem>
                      <SelectItem value="courses">Courses</SelectItem>
                      <SelectItem value="tutorials">Tutorials</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="access-type">Access Type</Label>
                  <Select>
                    <SelectTrigger id="access-type">
                      <SelectValue placeholder="Select access type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="pay-per-view">Pay Per View</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="nft">NFT Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="blockchain, tutorial, ethereum" />
              </div>
              
              {/* Upload area */}
              <div className="border border-dashed border-border rounded-lg p-8 text-center space-y-4">
                {!isUploading ? (
                  <>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Upload Video</h3>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop your video file here or click to browse
                      </p>
                    </div>
                    <Button onClick={simulateUpload}>
                      <FileUp className="mr-2 h-4 w-4" />
                      Select file
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-pulse">
                      <FileUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Uploading...</h3>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {uploadProgress}% complete
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-6 space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Blockchain Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your content will be secured with blockchain-based DRM to prevent unauthorized access and piracy.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Configure Security
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg border border-border p-6 space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Access Controls
                </h3>
                <p className="text-sm text-muted-foreground">
                  Set up who can access your content and under what conditions or payment requirements.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Manage Access
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg border border-border p-6 space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Monetization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Set pricing for pay-per-view or subscription access, or mint as an NFT for exclusive content.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Configure Pricing
                  </Button>
                </div>
              </div>
              
              <Button className="w-full">Save & Publish</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="manage">
          <div className="rounded-lg border border-border p-8 text-center space-y-4">
            <h3 className="text-xl font-medium">Your Content Library</h3>
            <p className="text-muted-foreground">
              You haven't uploaded any content yet. Go to the Upload tab to add your first video.
            </p>
            <Button asChild variant="outline">
              <a href="#upload">Upload Content</a>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="rounded-lg border border-border p-8 text-center space-y-4">
            <h3 className="text-xl font-medium">Content Analytics</h3>
            <p className="text-muted-foreground">
              Analytics data will be available once you have published content and received views.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateContent;
