const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../Configs/dbMySql");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      //body = {email, username, password}
      //query SELECT email FROM users WHERE email=body.email
      //jika ada hasilnya (data.length > 0) reject(You Have Been Registered)
      //hasilnya kosong (data.length === 0) lanjutkan step berikutnya
      //query SELECT username FROM users WHERE username=body.username
      //jika ada hasilnya (data.length > 0) reject(Username Has Been Taken)
      //hasilnya kosong (data.length === 0) lakukan proses registrasi

      //Start Registartion
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { password } = body;
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
          const newBody = { ...body, password: hashedPassword };
          const qs = "INSERT INTO users SET ?";
          db.query(qs, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
      //End Registration
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      //   console.log(body);
      const qs =
        "SELECT username, password, level_id FROM users WHERE username=?";
      db.query(qs, body.username, (err, data) => {
        if (err) {
          reject(err);
        }
        if (!data.length) {
          reject("User Not Found");
        } else {
          //   console.log(data[0].password);
          bcrypt.compare(body.password, data[0].password, (err, result) => {
            if (result) {
              const { username } = body;
              const { level_id } = data[0];
              const payload = {
                username,
                level_id,
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "2h",
              });
              const msg = "Login Success";
              resolve({ msg, token });
            }
            if (!result) {
              reject({ msg: "Wrong Password" });
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
};

module.exports = authModel;
