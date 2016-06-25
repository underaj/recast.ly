var VideoDetails = ({videoDetails}) => (
  <div className='video-details'>
    <p>ViewCount {videoDetails.statistics === undefined ? '' : videoDetails.statistics.viewCount}</p>
  </div>
);

// {VideoDetails.statistics.commentCount}
