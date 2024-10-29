const model = require('../model/post');

class MyPosts {
  async getPosts(req, res) {
    try {
      const { following ,user} = req.body; // Assuming following is an array of user IDs
      following.append(user.Id)
      if (!Array.isArray(following) || following.length === 0) {
        return res.status(400).json({ message: 'Following list is required.' });
      }

      // Fetch posts where the user email is in the following list
      const posts = await model.find({
        userId: { $in: following } // Change to match your query logic
      }).sort({ createdAt: -1 }); // Sort by createdAt timestamp

      return res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred while fetching posts.' });
    }
  }
}

module.exports = MyPosts;
