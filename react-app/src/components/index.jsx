import { useEffect, useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { Card } from "./Card";
import "./styles.css";

export function GitHubProfileFinder() {
  const [input, setInput] = useState("loharharsh222");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  function handleSubmit() {
    fetchDetails();
  }

  async function fetchDetails() {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`, {
        headers: {
          Authorization: "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",
        },
      });
      const data = await response.json();
      console.log(data);

      if (data) {
        setUserData(data);
        setLoading(false);
        setInput("");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrMsg(err.message);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      document.getElementById("find-username").click();
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <div className="github-search-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput((prev) => e.target.value);
            }}
            className="github-username"
            id="github-username"
            placeholder="Enter a GitHub Username"
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button id="find-username" onClick={handleSubmit}>
            Find <BsFillSearchHeartFill size={10} />
          </button>
        </div>
      </div>
      <div className="profile-data">
        {loading && (
          <h2 style={{ textAlign: "center" }}>Loading...! Please wait</h2>
        )}
        {userData && userData.status !== "404" ? (
          <Card user={userData} />
        ) : null}
      </div>
    </div>
  );
}
