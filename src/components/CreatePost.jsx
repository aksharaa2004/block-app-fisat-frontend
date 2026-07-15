import React, { useState } from "react";
import axios from "axios";

function CreatePost() {

  const [input, setInput] = useState({
    Message: "",
    userId: ""
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const sendPost = async () => {

    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const payload = {
      Message: input.Message,
      userId: userId
    };

    try {

      const response = await axios.post(
        "http://localhost:7500/create",
        payload,
        {
          headers: {
            token: token,
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.status === "success") {

        alert("Post Created Successfully");

        setInput({
          Message: "",
          userId: ""
        });

      } else {

        alert(response.data.status);

      }

    } catch (error) {

      console.log(error);
      alert("Something went wrong");

    }

  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Create Post</h3>
            </div>

            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">Message</label>

                <textarea
                  className="form-control"
                  rows="5"
                  name="Message"
                  value={input.Message}
                  onChange={inputHandler}
                  placeholder="Enter your message"
                ></textarea>

              </div>

              <div className="d-grid">
                <button
                  className="btn btn-primary"
                  onClick={sendPost}
                >
                  CREATE POST
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreatePost;