import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// const API_KEY = 'AIzaSyAZhSBoZWsJMhXQOf_hTKQoXCcm-bjZArI';

const API_KEY = 'AIzaSyCNN8RtyTzQqvzMPlWwV8Dp6KHuJA_kQiY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        setTimeout(
        YTSearch({ key: API_KEY, term: 'pavan kalyan' }, (data) => {
            this.setState({ videos: data });
        }), 5000);
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));