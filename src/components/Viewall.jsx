import React, { useState, useEffect } from "react";
import axios from "axios";


const ViewAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:7500/viewall",
        {},
        {
          headers: {
            token: token,
          },
        }
      );

      console.log(response.data);

      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch posts");
    }
  };

  return (
    <div>


      <div className="container mt-5">
        <h2 className="text-center mb-4">View All Posts</h2>

        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="col-md-6 mb-3" key={post._id}>
                <div className="card shadow">

                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Post</h5>
                  </div>

                  <div className="card-body">

                    <p>
                      <strong>Message:</strong>
                    </p>

                    <p>{post.Message}</p>

                    <hr />

                    <p>
                      <strong>User ID:</strong> {post.userId}
                    </p>

                  </div>

                  <div className="card-footer text-muted">
                    <strong>Posted Date:</strong>{" "}
                    {new Date(post.PostedDate).toLocaleString()}
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No Posts Found</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;