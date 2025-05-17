'use client'

export interface IVideo {
    id:string;
    key:string;
    name:string;
}

interface Props {
    video:IVideo;
    onOpen:()=>void;
    selectedVideo:(video:IVideo)=>void
}

export default function VideoCard({video, onOpen, selectedVideo}:Props) {
    const handleOpen = () => {
        onOpen();
        selectedVideo(video);
    }

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5 relative'>
            <div className='w-full h-full absolute top-0 left-0' onClick={handleOpen}>
            </div>
            <iframe key={video.id} width="450px" height="250px" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; frameborder; allowfullscreen"></iframe>
        
            <h4>{video.name}</h4>
        </div>
    </div>
  )
}