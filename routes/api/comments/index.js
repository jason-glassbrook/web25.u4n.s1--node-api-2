/*******************************************************************************
  ~/api/comments router
*******************************************************************************/

const _ = require ('lodash/fp')
const express = require ('express')

const db = require ('../../../data/db')

/***************************************
  setup router
***************************************/

const router = express.Router ()
const hello = {
  message : `hello! i'm ~/api/comments.`,
}
const error_500 = {
  error : 'something bad happened',
}

/***************************************
  handle requests
***************************************/

/*******************
  /
*******************/

router.route ('/')
  .get ((ri, ro) => {
    db.getAllComments ()
      .then ((comments) => {
        ro
          .status (200)
          .json (comments)
      })
      .catch ((error) => {
        ro
          .status (500)
          .json (error_500)
      })
  })

/*******************
  /:comment_id
*******************/

router.route ('/:comment_id')
  .get ((ri, ro) => {
    const { comment_id } = ri.params
    db.getComment (comment_id)
      .then ((comment) => {
        ro
          .status (200)
          .json (comment)
      })
      .catch ((error) => {
        ro
          .status (500)
          .json (error_500)
      })
  })
  .put ((ri, ro) => {
    const { comment_id } = ri.params
    ro
      .status (501)
      .json (hello)
  })
  .delete ((ri, ro) => {
    const { comment_id } = ri.params
    ro
      .status (501)
      .json (hello)
  })

/**************************************/

/// exports ///
module.exports = router
