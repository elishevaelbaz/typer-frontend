import React, {Component} from 'react'

const URL = process.env.REACT_APP_API_URL || "https://typ3out.herokuapp.com"

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
    fetch(`${URL}/passages`, {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(r => r.json())
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
