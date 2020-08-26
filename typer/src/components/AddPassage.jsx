import React, {Component} from 'react'
import { createPassage } from '../fetches'

export default class AddPassage extends Component {
  passageTitle = React.createRef()
  passageBody = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      name: this.passageTitle.current.value,
      text: this.passageBody.current.value,
      time_allotted: 60
    }
    createPassage(obj)
      .then(() => this.props.history.push("/"))
    e.currentTarget.reset()
  }

  render() {


    return (
      <div className="passageFormWrapper">
        <div className="passageFormInner">
          <form className="passageForm" onSubmit={this.handleSubmit}>
            <input placeholder="Title" className="passageTitleInput"type="text" ref={this.passageTitle} required/>
            <textarea placeholder="Add your passage here" className="passageTextArea" ref={this.passageBody} required></textarea>
            <input className="passageSubmit" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}
