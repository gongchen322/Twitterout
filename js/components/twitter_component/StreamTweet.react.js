var React = require('react');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

  getInitialState: function () {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },

  componentWillMount: function () {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
    
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  },
  

  componentWillReceiveProps: function (nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    });

    window.snapterest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
    
    return (nextProps.tweet.text.length > 1);
  },

  componentWillUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  },

  componentDidUpdate: function (prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
    
    window.snapterest.numberOfDisplayedTweets++;
  },

  componentWillUnmount: function () {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');
    
    delete window.snapterest;
  },

  render: function () {
    console.log('[Snapterest] StreamTweet: Running render()');
    
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection} />
      </section>
    ); 
  }
});

module.exports = StreamTweet;