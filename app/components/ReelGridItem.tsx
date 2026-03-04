import type { Reel } from "~/schemas/reel.schema";

export function ReelGridItem({ reel }: { reel: Reel }) {
  // Function to convert a standard YouTube URL to an embed URL
  const getYouTubeEmbedUrl = (url: string) => {
      // Add a defensive check to ensure the URL is a valid string
      if (!url || typeof url !== 'string') {
          return null; // Return null to prevent the crash
      }
      // Regular expression to find the video ID
      const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
      const match = url.match(regExp);
      
      // Check if the video ID was found
      if (match && match[1]) {
          const videoId = match[1];
          // Create the base embed URL
          let embedUrl = `https://www.youtube.com/embed/${videoId}`;
          
          // Extract and add the start time if present
          const timeMatch = url.match(/[?&]t=(\d+s)/);
          if (timeMatch && timeMatch[1]) {
              // Remove the 's' for the parameter
              const startTime = timeMatch[1].replace('s', ''); 
              embedUrl += `?start=${startTime}`;
          }
          
          return embedUrl;
      }
      return "https://www.youtube.com/embed/invalid"; // Fallback URL for invalid input
  };

  const embedUrl = getYouTubeEmbedUrl(reel.video_url);

  return (
    <div className='relative w-full aspect-[9/16] overflow-hidden bg-gray-200'>
      {/* <img
        src={embedUrl ?? ""}
        alt={reel.caption || "Reel thumbnail"}
        className='w-full h-full object-cover'
      /> */}
      <iframe
          src={embedUrl ?? ""}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full "
      ></iframe>
      <div className='absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center'>
        ▶️ {reel.views}
      </div>
    </div>
  );
}