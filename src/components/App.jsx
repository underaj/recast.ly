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
      videoList: []
    };
  }
  
  componentDidMount() {
    this.callYouTube();
  }



  callYouTube(title) {
    var that = this;
    title = title || 'Wu-tang';
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: title,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    }, 
      function(value) {
        that.setState({
          currentVideo: value[0],
          videoList: value
        });
      });
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav search={this.callYouTube.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)} />
        </div>
      </div>
    );
  }
}

window.App = App;