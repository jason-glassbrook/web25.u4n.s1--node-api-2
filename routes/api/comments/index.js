/*******************************************************************************
  ~/api/comments router
*******************************************************************************/

/// tools ///
const express = require ('express')
const db = require ('../../../data/db')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/***************************************
  handle requests
***************************************/

router.get ('/', (ri, ro) => {
  ro
    .status (200)
    .json ({
      message : `hello! i'm ~/api/comments.`,
    })
})

/**************************************/

/// exports ///
module.exports = router
