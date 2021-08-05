import React from 'react'


class ProfileStatus extends React.Component  {

    state = {
        
          editMode:false,
          status:this.props.status
       
      }
      
    activeEditMode()   {
         this.setState({
             editMode:true
         })
    }
    diActiveEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    changeStatus(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status)
        this.setState({
            status:this.props.status
        })
        

    }
    render(){




      return   <>
         {!this.state.editMode && 
              <div><span onDoubleClick={this.activeEditMode.bind(this)} >{this.props.status  !== ""||null ? this.props.status :"Введите новый статус"}</span></div>
         }
            {this.state.editMode &&
        <div>
              <input onChange={this.changeStatus.bind(this)} autoFocus = {true} onBlur={this.diActiveEditMode.bind(this)} type="text" value={this.state.status}/>
        </div>
    }
        </>
}
}

export default ProfileStatus;