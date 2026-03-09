import Skeleton from "@mui/joy/Skeleton";
import { useEffect, useRef, useState } from "react";

const YouTubePlayer = ({ videoId, forcePause, opacity, setOpacity, isPlaying, variant }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  
  // State for UI
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0); // Start at 0 because of mute policy
//   const [opacity, setOpacity] = useState(0); // Start invisible for fade-in effect

// STATE: Track if video is actually playing frames or loading/buffering
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // Keep a ref of the latest forcePause so event callbacks always see current value
  const forcePauseRef = useRef(forcePause);
  useEffect(() => { forcePauseRef.current = forcePause; }, [forcePause]);

  // 1. Load API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => setApiReady(true);
  }, []);

  // 2. Initialize Player
  useEffect(() => {
    if (!apiReady || !videoId || !containerRef.current) return;

    if (playerRef.current) {
      // If forced pause is active, don't load new video yet or handle accordingly
      if(typeof playerRef.current.loadVideoById === "function") {
         playerRef.current.loadVideoById(videoId);
      }
      return;
    }

    playerRef.current = new window.YT.Player(containerRef.current, {
      width: "100%",
      height: "100%",
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        mute: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event) => {
          if (!forcePauseRef.current) {
            event.target.playVideo();
            setOpacity(1);
            setIsPlayerActive(true)
          }
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setOpacity(1);
            setIsVideoLoaded(true);
            setIsPlayerActive(true)
          }

          // Use the ref so we always consult the latest forcePause value
          if (event.data === window.YT.PlayerState.PAUSED && !forcePauseRef.current) {
            // setOpacity(0);
            setIsVideoLoaded(false);
            setIsPlayerActive(false)
          }

          // 0 = Ended or 2 = Paused
          if (event.data === 0 ){
            setOpacity(0)
              
          }
            if (event.data === 2){
              setIsPlayerActive(false)
              setIsVideoLoaded(true)
             // Optional: Hide video if it ends? 
             // Usually better to keep it visible if paused manually
          }
        }
      },
    });

    return () => {
      if (playerRef.current) {
        try {
           // Attempt to remove the player cleanly
           const player = playerRef.current;
           // Check if destroy exists (sometimes API behaves oddly)
           if (typeof player.destroy === 'function') {
               player.destroy();
           }
        } catch (error) {
           console.warn("YouTube Player cleanup error:", error);
        }
        
        // Always reset the ref, even if destroy failed
        playerRef.current = null;
      }
    };
  }, [apiReady, videoId, setOpacity]);


  // Volume Logic
  const handleVolumeChange = (e) => {
    const newVol = parseInt(e.target.value);
    setVolume(newVol);
    
    if (playerRef.current) {
      playerRef?.current.setVolume(newVol);
      
      if (newVol > 0 && isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else if (newVol === 0 && !isMuted) {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

//   const handelMouseEnter = () => {
//     if (playerRef.current) {
//         playerRef.current.playVideo()
//         setOpacity(1)
//     }
//   }

  const handelMouseLeave = () => {
    if (playerRef.current) {
        playerRef.current.pauseVideo()
        setOpacity(0)
    }
  }

  
 //  THIS IS THE IMPORTANT PART
  useEffect(() => {
    if (!playerRef.current || typeof playerRef.current.pauseVideo !== 'function') return;

    if (forcePause) {
      playerRef.current.pauseVideo();
    } else {
      if (typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
      setOpacity(1);
    }
  }, [forcePause, setOpacity]);


  return (
    <div className={`z-[9999] w-full h-[70vh] relative ${variant === 'container' ? 'h-[40vh]' : ''}`}  onMouseLeave={handelMouseLeave}>
      
      {/* Video Container with Fade Transition */}
      <div 
        className={`w-full h-full pointer-events-none scale-[1.40] transition-opacity duration-1000 ease-in-out ${variant === 'container' ? 'scale-[1.44]' : ''}`}
        style={{ opacity: opacity }} // Controls the Fade In/Out
      > 
        <div ref={containerRef} className={` w-full h-full ${variant === 'container' ? 'w-full m-w-[650px] h-[50vh] ' : ''}`}/>

        {!isVideoLoaded &&
          <Skeleton animation="wave" variant="overlay" className=" absolute inset-0 z-50 !bg-[#151515] !h-[70vh] w-full" >
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              className={`object-contain !h-[80vh] w-full ${variant === 'container' ? '!w-[480px] h-[50vh]' : ''}`}
            />
          </Skeleton>
        }
      </div>

      {/* Controls */}
      <div className={`absolute bottom-[120px] left-[35px] flex items-center gap-4 z-20 ${variant === 'container' ? 'bottom-[300px] left-[35px]' : ''}`}>
        <button
          className="bg-white px-4 py-2 rounded text-black font-bold hover:bg-gray-200"
          onClick={() => { 
            
            if (isPlayerActive){
              playerRef.current?.pauseVideo();
              setIsVideoLoaded(true)
            }
            else{
                playerRef.current?.playVideo();
            }
          }}

        >
        {isPlayerActive ? (
           
          <>
            {/* SVG for Pause Icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>Pause</svg>
              
            </>
          ) : (
            <>
              {/* SVG for Play Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/>Play</svg>
              
            </>
         )}
        </button>

        {/* Volume Slider */}
        <div className="flex items-center gap-2 bg-black/50 p-2 rounded">
            <span className="text-white text-xs font-bold">{isMuted ? 'Muted' : `${volume}%`}</span>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 cursor-pointer accent-red-600"
            />
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;