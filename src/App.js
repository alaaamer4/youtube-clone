import react from "react";
import youtube from "./APIs/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
class App extends react.Component {
  state = { vedios: [], selectedVedio: null };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      vedios: response.data.items,
      selectedVedio: response.data.items[0],
    });
  };
  onVedioSelect = (vedio) => {
    this.setState({ selectedVedio: vedio });
  };
  render() {
    return (
      <div className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <div className="video-container">
          {this.state.selectedVedio && (
            <VideoDetails video={this.state.selectedVedio} />
          )}
          <VideoList
            onVedioSelect={this.onVedioSelect}
            vedios={this.state.vedios}
          />
        </div>
      </div>
    );
  }
}

export default App;
