
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-platform-purple to-platform-teal flex items-center justify-center">
                <span className="font-bold text-white">MS</span>
              </div>
              <span className="font-heading font-bold text-lg">MasterStream</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Secure, transparent, and decentralized streaming platform powered by blockchain technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground">Browse Content</Link></li>
              <li><Link to="/create" className="text-sm text-muted-foreground hover:text-foreground">Create & Upload</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/blockchain" className="text-sm text-muted-foreground hover:text-foreground">Blockchain 101</Link></li>
              <li><Link to="/creators" className="text-sm text-muted-foreground hover:text-foreground">For Creators</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/copyright" className="text-sm text-muted-foreground hover:text-foreground">Copyright</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MasterStream. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">Twitter</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">Discord</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
