import { Badge } from "@/components/ui/badge";

const VideoTutorial = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-[700px]">
        <div 
          className="bg-white rounded-[10px] p-8 shadow-sm"
          style={{ border: '1px solid #E1E4E8' }}
        >
          {/* Quick Start Badge */}
          <div className="flex justify-center mb-4">
            <Badge 
              className="bg-[#4A154B] text-white hover:bg-[#4A154B]/90 px-4 py-1 text-sm font-medium"
            >
              Quick Start
            </Badge>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            🎬 Quick Setup — 3 Minutes
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-center mb-6">
            Everything you need to know to get started
          </p>

          {/* Video Embed */}
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p2Rn6F3036o"
              title="Corteza Quick Setup Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg max-w-full"
              style={{ maxWidth: '560px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTutorial;
