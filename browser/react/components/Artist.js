import React from 'react';
import {Link} from 'react-router';

export default class Artist extends React.Component {
  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

  }

	render(){
    const artist = this.props.selectedArtist;

		return (
			<div>
			  <h3>{artist.name}</h3>
			  <h4>ALBUMS</h4>
			  <h4>SONGS</h4>
			</div>
			)
	}
}
