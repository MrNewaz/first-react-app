import { v4 as uuidv4 } from "uuid";
import "../styles/CreateTweet.scss";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  //Functions

  //Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
        placeholder="What's on your mind?"
        required
      ></textarea>
      <button>Post</button>
    </form>
  );
};

export default CreateTweet;
