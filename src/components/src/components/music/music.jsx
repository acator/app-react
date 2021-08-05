import './music.css'
import React from 'react';
import music from './pictureMusic/apple_music_android_logo_icon_134021.png'
import { useState } from 'react';
import close from "./../profile/iconeClose/close_icon-icons.com_48658.png"
import ReactDOM from 'react-dom';
import Modal from '../Modal/modal';

const ConstructorMusic = (props) => {
    return (
        <div className ="box_player">
            <div>{props.title}</div>
            <audio controls loop  className="audioPlayer">
                <source src="../../../../app-react/src/components/music/musicFile/Кино - Группа крови.mp3" type="audio/mp3" />
            </audio>
        </div>
    )
}
const ConstructorAlbums =(props)=>{
    let [musicHide, setMusic] = useState(false)
    return (
          <div>
              <h3>{props.album.titles}</h3>
            <button><img alt ="music" src={music} onClick= {()=>{setMusic(true)}} /></button>{
                
            musicHide && ReactDOM.createPortal(
            <Modal>
               
                <div className="modalMusicAlbum" >
                   
                        <img alt="music" src={music}/>
                        <button onClick={() => { setMusic(false) }}><img alt="music" src={close} /></button>

                <div className="musicAlbum">
                   {props.album.musicAlbum.map((m) => <ConstructorMusic title= {m.title}/>)}
                </div>
            </div>
           </Modal> 
                , document.getElementById("portal"))
}
        </div>
    )
}
const Music = (props) => {
  
    return (
        <div className="contentMusic">
            <div className="myAlbums">
                <h1>Mои альбомы</h1>
                <div className="album">
                {props.album.map((e) => <ConstructorAlbums album={e} />) }
                </div>
            </div>
            <div className ="myMusic">
            <h1>Моя музыка</h1>
           { props.music.map((m) => <ConstructorMusic  key={m.id} src = {m.src} title ={m.title}/>)}
            <ConstructorMusic src="Кино - Группа крови.mp3" title="Группа крови" />
            </div>
        </div>
    )
}
export default Music;