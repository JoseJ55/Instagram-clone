const User = require('./user');
const Stories = require('./stories');
const Post = require('./post');
const Likes = require('./likes');
const Follows = require('./follows');
const Feed = require('./feed');
const Comment = require('./comment');

User.hasMany(Post);
User.hasMany(Comment);
User.hasMany(Likes);
User.hasMany(Follows);
User.hasMany(Stories);

Post.belongsTo(User);
Post.hasMany(Comment);

Comment.belongsTo(Post);
Comment.belongsTo(User);

Likes.belongsTo(Post);
Likes.belongsTo(User);

Follows.belongsTo(User, { as: 'user_id', foreignKey: 'id' });
Follows.belongsTo(User, { as: 'follower_id', foreignKey: 'id' });

Feed.hasMany(Post);

Stories.belongsTo(User);

module.exports = {
    User,
    Stories,
    Post,
    Likes,
    Follows,
    Feed,
    Comment
};