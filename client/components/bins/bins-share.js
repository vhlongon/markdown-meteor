import React, {Component} from 'react';

class BinsShare extends Component {

  constructor(props) {
    super(props);
  }

  onShareClick() {
    const email = this.refs.email.value;
    console.log(email);
    Meteor.call('bins.share', this.props.bin, email);
  }

  renderShareList() {
    return this.props.bin.sharedWith.map(email => {
      return <button key={email} className="btn btn-default">{email}</button>;
    });
  }

  render() {
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input className="form-control" ref="email" />
          <div className="input-group-btn">
            <button className="btn btn-default" onClick={this.onShareClick.bind(this)}>
              Share bin
            </button>
          </div>
        </div>
        <div>
          Shared width:
          <div className="btn-group">
            {this.renderShareList()}
          </div>
        </div>
      </footer>
    );
  }
}

export default BinsShare;
