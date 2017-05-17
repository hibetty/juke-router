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
    const children = this.props.children;
    const toggleOne = this.props.toggleOne;
    const isPlaying = this.props.isPlaying;
    const propsToPassToChildren = {
      /**todo: make sure to include all the props that the child components need! **/
      artist, albums, songs, currentSong, toggleOne, isPlaying
    }

		return (
			<div>
			  <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`} activeClassName="active">ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`} activeClassName="active">SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }


        {/*
        <Albums albums={albums} />
        <Songs songs={songs}
          currentSong={currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
        */}

			</div>
			)
	}
}
