const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
const multers=require("multer")
const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer();
//const diskStorage=multer.diskStorage({

const diskStorage=multer.diskStorage({
  destination:function(req,err,cb){
    cb(null,'public/resume/')
  },filename:function(req,file,cb){
    cb(null,Date.now()+file.originalname)
  }
})
const diskStorage2=multer.diskStorage({
  destination:function(req,err,cb){
    cb(null,'public/profile/')
  },filename:function(req,file,cb){
    cb(null,Date.now()+file.originalname)
  }
})
const uploaded=multers({storage:diskStorage})
const uploaded2=multers({storage:diskStorage2})
router.post("/resume", uploaded.single("file"),(req, res) => {
  // const { file } = req;
  // console.log(file)
  res.send("file uploaded")

  // if (file.detectedFileExtension != ".pdf") {
  //   res.status(400).json({
  //     message: "Invalid format",
  //   });
  // } else {
  //   const filename = `${uuidv4()}${file.detectedFileExtension}`;

  //   pipeline(
  //     file.stream,
  //     fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
  //   )
  //     .then(() => {
  //       res.send({
  //         message: "File uploaded successfully",
  //         url: `/host/resume/${filename}`,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(400).json({
  //         message: "Error while uploading",
  //       });
  //     });
  // }
});
router.post("/profile", uploaded2.single("file"),(req, res) => {
  // const { file } = req;
  // console.log(file)
  res.send("file uploaded")

  // if (file.detectedFileExtension != ".pdf") {
  //   res.status(400).json({
  //     message: "Invalid format",
  //   });
  // } else {
  //   const filename = `${uuidv4()}${file.detectedFileExtension}`;

  //   pipeline(
  //     file.stream,
  //     fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
  //   )
  //     .then(() => {
  //       res.send({
  //         message: "File uploaded successfully",
  //         url: `/host/resume/${filename}`,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(400).json({
  //         message: "Error while uploading",
  //       });
  //     });
  // }
});

// router.post("/profile", upload.single("file"), (req, res) => {
//   const { file } = req;
//   if (
//     file.detectedFileExtension != ".jpg" &&
//     file.detectedFileExtension != ".png"
//   ) {
//     res.status(400).json({
//       message: "Invalid format",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;

//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
//     )
//       // .then(() => {
//       //   res.send({
//       //     message: "Profile image uploaded successfully",
//       //     url: `/host/profile/${filename}`,
//       //   });
//       // })
//       // .catch((err) => {
//       //   res.status(400).json({
//       //     message: "Error while uploading",
//       //   });
//       // });
//       try {
//          pipeline(
//           file.stream,
//           fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
//         );
//         res.send({
//           message: "File uploaded successfully",
//           url: `/host/resume/${filename}`,
//         });
//       } catch (error) {
//         console.error("Error during file upload:", error);
//         res.status(500).json({
//           message: "Error while uploading",
//         });
//       }
//   }
// });

module.exports = router;
