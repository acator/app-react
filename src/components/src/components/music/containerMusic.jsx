import './music.css'
import React from 'react';
import Music from './music';
import { connect } from 'react-redux';
class ContainerMusic extends React.Component {
    render(){
        return (
            <Music music = {this.props.music} album ={this.props.album} />
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        music:state.music.music,
        album:state.music.album
    }
    
}
const ConnectContainerMusic = connect(mapStateToProps)(ContainerMusic)
export default ConnectContainerMusic;