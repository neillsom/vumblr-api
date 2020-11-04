const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
	// id: 1,
	// originalPostedDate: {},
	// source: {},
	// originalPoster: {},
	// postContent: {
	imageUrl: {
		type: String,
	},
	text: {
		type: String,
	},
	title: {
		type: String,
	},
	// tags: {
	// 	type: Array,
	// },
	// },
	// isLiked: false,
	// noteCount: 1,
});

module.exports = mongoose.model('Post', postSchema);
