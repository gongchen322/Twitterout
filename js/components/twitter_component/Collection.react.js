var React = require('react');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({



  getListOfTweetIds: function () {
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection: function () {
    return this.getListOfTweetIds().length;
  },

  render: function () {
    var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (numberOfTweetsInCollection > 0) {
      var tweets = this.props.tweets;
     
      var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
      
      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
  
            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
});

module.exports = Collection;