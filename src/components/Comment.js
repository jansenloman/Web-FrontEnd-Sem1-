import React from "react";
import { IoMdContact } from "react-icons/io";
import { RiSendPlaneFill } from 'react-icons/ri'

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: [
        {
          guest_name: "Zharall",
          questions:
            "Wah, Novelnya bagus banget bikin aku jadi sedih. Kedepannya makin update ya min aku suka banget baca novel di situs ini.",
        },
      ],
      name: "",
      question: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
  }
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (this.state.question.length === 0) {
        return;
      }
      const newItem = {
        guest_name: this.state.name,
        questions: this.state.question,
      };
      this.setState((state) => ({
        guests: state.guests.concat(newItem),
        name: "",
        question: "",
      }));
    }
  };
  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleQuestion(e) {
    this.setState({ question: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.question.length === 0) {
      return;
    }
    const newItem = {
      guest_name: this.state.name,
      questions: this.state.question,
    };
    this.setState((state) => ({
      guests: state.guests.concat(newItem),
      name: "",
      question: "",
    }));
  }
  render() {
    let all_guest_name = this.state.guests.map((item) => {
      return (
        <div className="kontenercomment" key={item.name}>
          <span>{item.guest_name}</span>
          <IoMdContact className="iconorang" />
          <div className="kontenerisikomen">{item.questions}</div>
        </div>
      );
    });
    return (
      <div className="allcommentcontainer">
        <div className="kontenerongoing comment">
          <h3>Comment ({this.state.guests.length})</h3>
        </div>
        {all_guest_name}
        <div className="postkomen">
          <input
            type="text"
            className="form-control namaku"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter a comment..."
            onChange={this.handleQuestion}
            value={this.state.question}
            onKeyDown={this.handleKeyDown}
          />
          <button className="send" type="submit" onClick={this.handleSubmit}>
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
