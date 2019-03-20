
<!--

   _   _ ____  _____
  | | | / ___|| ____|
  | | | \___ \|  _|
  | |_| |___) | |___
   \___/|____/|_____|


-->

<!--

   _   _ ____  __  __
  | \ | |  _ \|  \/  |
  |  \| | |_) | |\/| |
  | |\  |  __/| |  | |
  |_| \_|_|   |_|  |_|


-->

This is built using NPM




1. create DB  (find out what FE needs for tables)
2. make api   Signup/login
3. Routes folder
4. //router.get('api/post/:postId', isAuth, feedController.getPost);
5. controllers folder
6. //exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });



Server.js
//app.use('api/profile', feedRoutes);