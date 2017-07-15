import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail'
const API_KEY = 'AIzaSyBG0k35sC72spMm4noocemn1UKimfHOvBs';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Tesla');
  }

  videoSearch(term) {

    YTSearch({key: API_KEY, term: term}, (videos) => {
      // Similar to this.setState({videos: videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })

  }

  render() {
    // debounce return a new function that can only be called once ever
    // 300 milliseconds.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 )
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
