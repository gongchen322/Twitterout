var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CollectionExportUtils = require('../utils/CollectionExportUtils');

var CHANGE_EVENT = 'change';

var collectionTweets = {};
var collectionName = 'new';
var tweetIndex=0;

function addTweetToCollection(tweet) {
	collectionTweets[tweet.id]= tweet;
}

function removeTweetFromCollection(tweetId) {
	delete collectionTweets[tweetId];
}

function removeAllTweetsFromCollection () {
	collectionTweets = {};
}

function exportAllTweetsFromCollection() {
	CollectionExportUtils.postJSON('/export', collectionTweets);
}

function setCollectionName (name) {
	collectionName=name;
}

function emitChange() {
	CollectionStore.emit(CHANGE_EVENT);
}


var CollectionStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getCollectionTweets: function () {
		return collectionTweets;
	},

	getCollectionName: function (){ 
		return collectionName;
	}
});

function handleAction (action) {

	switch (action.type) {

		case 'add_tweet_to_collection':
			addTweetToCollection(action.tweet);
			emitChange();
			break;

		case 'remove_tweet_from_collection':
			removeTweetFromCollection(action.tweetId);
			emitChange();
			break;

		case 'remove_all_tweets_from_collection':
			removeAllTweetsFromCollection();
			emitChange();
			break;

		case 'export_all_tweets_from_collection':
			exportAllTweetsFromCollection();
			emitChange();
			break;

		case 'set_collection_name':
			setCollectionName(action.collectionName);
			emitChange();
			break;

		default:

	}
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = CollectionStore;
