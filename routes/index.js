/*******************************************************************************
  ~ router
*******************************************************************************/

/// tools ///
const express = require ('express')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/***************************************
  setup children
***************************************/

router.use ('/api', require ('./api'))

/***************************************
  handle requests
***************************************/

router.get ('/', (ri, ro) => {
  ro
    .status (200)
    .json ({
      message : `hello! i'm the server.`,
    })
})

/**************************************/

/// exports ///
module.exports = router
