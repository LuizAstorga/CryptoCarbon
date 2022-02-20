import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./VideoItem.css";
import useVideos from "../Hooks/useVideos";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("anime");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect(() => {
  //   onTermSubmit("Anime");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   console.log("term=" + term);
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   setVideos(response.data.items);
  // setSelectedVideo(response.data.items[0]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      {/*<Djang moves={this.state.djangcontent   />  */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { djangcontent: "Djangamang", videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("Anime");
//   }

//   onTermSubmit = async (term) => {
//     console.log("term=" + term);
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({ djangcontent: term });
//     console.log(response);
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         {/*<Djang moves={this.state.djangcontent   />  */}
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 videos={this.state.videos}
//                 onVideoSelect={this.onVideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
