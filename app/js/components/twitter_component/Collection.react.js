var React = require('react');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var CollectionUtils = require('../utils/CollectionUtils');
var CollectionStore = require('../stores/CollectionStore');

var Collection = React.createClass({

  getInitialState: function () {
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    }
  },

  componentDidMount: function () {
    CollectionStore.addChangeListener(this.onCollectionChange);
  },

  componentWillUnmount: function () {
    CollectionStore.removeChangeListener(this.onCollectionChange);
  },

  onCollectionChange: function () {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    });
  },

  render: function () {

    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);

    if (numberOfTweetsInCollection > 0) {
      
      return (
        <div>
          <CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection} />
          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
});

module.exports = Collection;