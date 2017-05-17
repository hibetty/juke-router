import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';
import Albums from './Albums';

export default class Artist extends React.Component {
  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

  }

	render(){
    const artist = this.props.selectedArtist;
    const albums = this.props.artistAlbums;
    const songs = this.props.artistSongs;
    const currentSong = this.props.currentSong;

		return (
			<div>
			  <h3>{artist.name}</h3>

        <Albums albums={albums} />
        <Songs songs={songs}
          currentSong={currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />

			</div>
			)
	}
}
