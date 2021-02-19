import React from "react";
import firebase from "../services/firebaseApi";

import { nanoid } from "nanoid";
export default function AdminPage() {
  const addDataToFirestore = (path, data) => {
    firebase
      .firestore()
      .collection(path)
      .add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (e.target.text.value.trim().length <= 1) return false;
    const path = e.target.name;
    const data = {
      id: nanoid(16),
      text: e.target.text.value,
    };
    e.target.text.value = ""
    addDataToFirestore(path, data);
  };

  return (
    <section className="admin section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form name="truth" onSubmit={formSubmit}>
              <label htmlFor="question" className="form-label">
                <b>Добавить вопрос</b>
              </label>
              <input
                type="text"
                name="text"
                id="question"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>

          <div className="col">
            <form name="dare" onSubmit={formSubmit}>
              <label htmlFor="dare" className="form-label">
                <b>Добавить действие</b>
              </label>
              <input
                type="text"
                name="text"
                id="dare"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>
          <div className="col">
            <form name="never" onSubmit={formSubmit}>
              <label htmlFor="never" className="form-label">
                <b>Добавить "Я никогда не..."</b>
              </label>
              <input
                type="text"
                name="text"
                id="never"
                className="form-control mb-3"
              />
              <button className="btn w-100 btn-primary" type="submit">
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
