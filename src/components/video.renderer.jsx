
const absoluteCenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}

const defaultVideoStyle = {
  width : '70%', height : 'auto', ...absoluteCenter
}

export const YoutubeVideo = ({ src }) => (
    <iframe
      style={{ ...defaultVideoStyle, height : '70%', border: "none" }}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
);

const VideoRenderer = ({ src, bgStyle = {}, children}) => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "black",
      position: "relative",
      ...bgStyle,
    }}
  >
    {
      children ? <>{children}</> : 
      (
        <video src={src} controls style={defaultVideoStyle}>
        Your browser does not support HTML video.
        </video>
      )
    }
  </div>
);
 
export default VideoRenderer;