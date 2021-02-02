//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import { useState, useEffect } from "react";
import "./styles/App.scss";

function App() {
  const [name, setName] = useState("- Saif");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "React Shikhtesi Khub";

  useEffect(() => {
    console.log("Yeeeeeet");
  }, [tweets]);
  return (
    <div className="body">
      <h1>Saif's Social Media</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
