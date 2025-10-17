import express from "express";
const router = express.Router();

import registerController from "../controllers/registerController.js";
import loginController from "../controllers/loginController.js";
import refreshTokenController from "../controllers/refreshTokenController.js";
import logOutController  from "../controllers/logOutController.js";


router.post("/register", registerController);

router.post("/login", loginController);


router.post("/refresh-token", refreshTokenController);

router.post("/logout", logOutController);

export default router;



