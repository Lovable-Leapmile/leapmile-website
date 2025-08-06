import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoPopupProps {
  videoUrl: string;
  buttonText?: string;
  className?: string;
}

const VideoPopup = ({ videoUrl, buttonText = "View in Action", className = "" }: VideoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={`group ${className}`}>
          <Play className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full">
        <div className="aspect-video w-full">
          <video 
            className="w-full h-full rounded-lg" 
            controls 
            autoPlay
            onLoadStart={() => console.log('Video loading...')}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;