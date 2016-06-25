var videoPlaceHolder = {
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0
      },
      medium: {
        url: '',
        width: 0,
        height: 0
      },
      high: {
        url: '',
        width: 0,
        height: 0
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: videoPlaceHolder,
      videoList: [],
      videoDetails: {}
    };
  }
  
  componentDidMount() {
    this.callYouTube();
  }

  callYouTube(title) {
    title = title || 'Wu-tang';
    var options = {
      key: YOUTUBE_API_KEY,
      q: title,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    };
    this.props.searchYouTube(options, this.updateVideoList.bind(this));
  }

  updateVideoList(value) {
    this.setState({
      currentVideo: value[0],
      videoList: value
    });
    this.getVideoDetails(value[0]);
  }

  getVideoDetails(video) {
    var id = video.id.videoId;
    var options = {
      key: YOUTUBE_API_KEY,
      part: 'statistics',
      id: id
    };
    this.props.searchYouTube(options, this.updateVideoDetails.bind(this), 'videos'); 
  }

  updateVideoDetails(value) {
    this.setState({
      videoDetails: value[0]
    });
    console.log(value);
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
    this.getVideoDetails(video);
  }

  render () {
    return (
      <div>
        <Nav search={this.callYouTube.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} videoDetails={this.state.videoDetails} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)} />
        </div>
      </div>
    );
  }
}

window.App = App;