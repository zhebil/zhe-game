import React, { useEffect } from "react";
import Header from "./components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TruthPage from "./pages/Truth-page";
import NeverPage from "./pages/Never-page";
import QuestionsPage from "./pages/Questions-page";
import AdminPage from "./pages/Admin-page";
import SelectPlayersPage from "./pages/Select-players-page";
import "./sass/style.scss";
import { useDispatch } from "react-redux";
import { setData, setTruth } from "./actions";
import { getData } from "./utillity/getData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {


    function AES() {
      let aes = {};
  
      aes.encrypt = async (message, password, passwordBits, iterations) => {
        let rounds = iterations || 5000;
        let msg = new TextEncoder().encode(message);
        let pass;
  
        if (password) {
          pass = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(password),
            {
              name: "PBKDF2",
            },
            false,
            ["deriveBits"]
          );
        }
  
        if (passwordBits) {
          pass = await crypto.subtle.importKey(
            "raw",
            new Uint8Array(passwordBits),
            {
              name: "PBKDF2",
            },
            false,
            ["deriveBits"]
          );
        }
  
        let salt = crypto.getRandomValues(new Uint8Array(32));
        let iv = crypto.getRandomValues(new Uint8Array(12));
  
        let bits = await crypto.subtle.deriveBits(
          {
            name: "PBKDF2",
            salt: salt,
            iterations: rounds,
            hash: {
              name: "SHA-256",
            },
          },
          pass,
          256
        );
  
        let key = await crypto.subtle.importKey(
          "raw",
          bits,
          {
            name: "AES-GCM",
          },
          false,
          ["encrypt"]
        );
  
        let enc = await crypto.subtle.encrypt(
          {
            name: "AES-GCM",
            iv: iv,
          },
          key,
          msg
        );
  
        let iterationsHash = btoa(rounds.toString());
  
        let saltHash = btoa(
          Array.from(new Uint8Array(salt))
            .map((val) => {
              return String.fromCharCode(val);
            })
            .join("")
        );
  
        let ivHash = btoa(
          Array.from(new Uint8Array(iv))
            .map((val) => {
              return String.fromCharCode(val);
            })
            .join("")
        );
  
        let encHash = btoa(
          Array.from(new Uint8Array(enc))
            .map((val) => {
              return String.fromCharCode(val);
            })
            .join("")
        );
  
        return iterationsHash + "." + saltHash + "." + ivHash + "." + encHash;
      };
  
      aes.decrypt = async (encrypted, password, passwordBits) => {
        let parts = encrypted.split(".");
        let rounds = parseInt(atob(parts[0]));
  
        let salt = new Uint8Array(
          atob(parts[1])
            .split("")
            .map((val) => {
              return val.charCodeAt(0);
            })
        );
  
        let iv = new Uint8Array(
          atob(parts[2])
            .split("")
            .map((val) => {
              return val.charCodeAt(0);
            })
        );
  
        let enc = new Uint8Array(
          atob(parts[3])
            .split("")
            .map((val) => {
              return val.charCodeAt(0);
            })
        );
  
        let pass;
  
        if (password) {
          pass = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(password),
            {
              name: "PBKDF2",
            },
            false,
            ["deriveBits"]
          );
        }
  
        if (passwordBits) {
          pass = await crypto.subtle.importKey(
            "raw",
            new Uint8Array(passwordBits),
            {
              name: "PBKDF2",
            },
            false,
            ["deriveBits"]
          );
        }
  
        let bits = await crypto.subtle.deriveBits(
          {
            name: "PBKDF2",
            salt: salt,
            iterations: rounds,
            hash: {
              name: "SHA-256",
            },
          },
          pass,
          256
        );
  
        let key = await crypto.subtle.importKey(
          "raw",
          bits,
          {
            name: "AES-GCM",
          },
          false,
          ["decrypt"]
        );
  
        let dec = await crypto.subtle.decrypt(
          {
            name: "AES-GCM",
            iv: iv,
          },
          key,
          enc
        );
  
        return new TextDecoder().decode(dec);
      };
  
      return aes;
    }
    const encrypted =
      "NTAwMA==.zj3k+U9mgfmPLyxtgAb3itGa7mmHcUGv2LlPjpyTssk=.qfWT9mPHINpbwUVw.7YDWYFiXxuzeIvVrfJ1L4onH7FTreS9LxuVZcbgC";
  
    for (let i = 11111; i < 100000; i++) {
      AES()
        .decrypt(encrypted, i)
        .then((decrypted) => {
          console.log("decrypted", decrypted);
          // decryptedContentElement.innerHTML = decrypted;
        }).catch(e=> {
          console.log(e);
        });
    }
  



    const dataType = ["truth", "dare", "never"];
    let data = {};
    dataType.forEach((item) => {
      data[item] = getData(item);
    });
    dispatch(setData(data));
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <TruthPage />
          </Route>
          <Route path="/never">
            <NeverPage />
          </Route>
          <Route path="/questions">
            <QuestionsPage />
          </Route>
          <Route path="/select-players">
            <SelectPlayersPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>

          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
