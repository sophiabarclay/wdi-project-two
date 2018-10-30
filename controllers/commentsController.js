const Exhibition = require('../models/Exhibition');

function createComment(req, res) {
  Exhibition
    .findById(req.params.id)
    .then(exhibitions => {
      exhibitions.comments.push(req.body);
      exhibitions.save().then(exhibition => res.redirect(`exhibitions/${exhibition.id}`)) ;
    });
}

function deleteComment(req, res) {
  console.log('deleting comment', req.paramas.commentId);
  Exhibition
    .findByIdAndDelete(req.params.id)
    .then(exhibition => {
      exhibition.commments.id(req.params.commentId).remove();
      exhibition.save()
        .then(() => res.redirect(`/exhibitions/${req.params.exhibitionId}`));
    });
}

module.exports = {
  createComment: createComment,
  deleteComment: deleteComment
};
