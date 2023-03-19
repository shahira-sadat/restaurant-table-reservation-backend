/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */
 const methodNotAllowed = require("../errors/notFound");
 const router = require("express").Router();
 const controller = require("../controller/tablesController");
 
 router
   .route("/")
   .get(controller.list)
   .post(controller.create)
   .all(methodNotAllowed);
 
 router
   .route("/:table_id/seat")
   .put(controller.update)
   .delete(controller.delete)
   .all(methodNotAllowed);
 
 router
   .route("/:table_id")
   .get(controller.read)
   .all(methodNotAllowed);
 
 module.exports = router;