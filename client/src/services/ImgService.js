// app.post('/uploadphoto', upload.single('picture'), (req, res) => {
//     const img = fs.readFileSync(req.file.path);

//  const encode_image = img.toString('base64');
//  // Define a JSONobject for the image attributes for saving to database
  
//  const finalImg = {
//       contentType: req.file.mimetype,
//       image:  new Buffer(encode_image, 'base64')
//    };
// db.collection('quotes').insertOne(finalImg, (err, result) => {
//     console.log(result)
 
//     if (err) return console.log(err)
 
//     console.log('saved to database')
//     res.redirect('/')
   
     
//   })
// })

const baseURL = 'http://localhost:3000/api/img/';

export default {
    getImg() {
      return fetch(baseURL)
        .then(res => res.json());
    },
  
    addImg(img) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(img),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },
  
    updateImg(Img) {
      return fetch(baseURL + Img._id, {
        method: 'PUT',
        body: JSON.stringify(Img),
        headers: { 
          'Content-Type': 'application/json' 
        }
      })
        .then(res => res.json());
    },
  
    deleteImg(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
    }
  };



