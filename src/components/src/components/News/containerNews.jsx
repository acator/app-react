import './news.css'
import React from 'react';
import News from './news';
import { connect } from 'react-redux';

class ContainerNews extends React.Component{
    render(){
    return (
        <News news={this.props.news}/>
    )
    }

}
let mapStateToProps = (state) => {
    return {
        news: state.news.postNews
    }

    
}

let ConnectContainerNews = connect(mapStateToProps)(ContainerNews)
 export default ConnectContainerNews;

