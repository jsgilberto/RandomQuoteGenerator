import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class RandomQuoteMachine extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quote: '',
      author: ''
    }

    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.handleTweetQuote = this.handleTweetQuote.bind(this);
  }

  componentDidMount() {
    const self = this;
    fetch('https://talaikis.com/api/quotes/random/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setState({
        quote: myJson.quote,
        author: myJson.author
      });
    });
  }

  handleNewQuote() {
    const self = this;
    fetch('https://talaikis.com/api/quotes/random/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setState({
        quote: myJson.quote,
        author: myJson.author
      });
    });
  }

  handleTweetQuote() {
    const txtToTweet = this.state.quote + " - " + this.state.author;
    const tweetLink = 'http://twitter.com/home?status=' + encodeURIComponent(txtToTweet);
    window.open(tweetLink);
  }

  render(){
    return (
      <div id="quote-box">
        <p id="text">{this.state.quote}</p>
        <h1 id="author">{this.state.author}</h1>
        <div id="buttons">
          <button onClick={this.handleNewQuote} id="new-quote">New Quote</button>
          <button onClick={this.handleTweetQuote} id="tweet-quote">Tweet Quote</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <RandomQuoteMachine />, 
  document.getElementById('root')
);

