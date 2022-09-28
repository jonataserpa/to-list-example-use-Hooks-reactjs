import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Tweet from "./components/Tweet";
import Tweet2 from "./components/Count1";
import Count1 from "./components/Count1";
import Count2 from "./components/Count2";
import CountUseCallback1 from "./components/CountUseCallback1";
import CountUseCallback2 from "./components/CountUseCallback2";
import axios from "axios";
import { Title } from "./style";

type TPropsTest = {
  id: number;
  name: string;
};

const test1: TPropsTest[] = [
  {
    id: 1,
    name: "test1",
  },
  {
    id: 2,
    name: "test2",
  },
  {
    id: 3,
    name: "test3",
  },
];

type TRepository = {
  fullname: string;
  description: string;
};

function App() {
  const [tweets, setTweets] = useState<TPropsTest[]>(test1);
  const inputText = useRef<HTMLInputElement>(null);
  const [disabledButtonAdd, setDisabledButtonAdd] = useState(true);
  const [valurInput, setValueInput] = useState("");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [repositorys, setRepositorys] = useState<TRepository[]>([]);

  function handelCLickAddTweet(): void {
    const tweet = {
      id: tweets.length + 1,
      name: inputText.current?.value.toString() ?? "",
    };
    setTweets([...tweets, tweet]);

    if (inputText.current && inputText.current.value !== "") {
      inputText.current.value = "";
    }

    inputText.current?.focus();
    setDisabledButtonAdd(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTweets(test1);

    if (e.target.value !== "") {
      const filtered = tweets.filter((t) => t.name.includes(e.target.value));
      setTweets(filtered);
    }
  }

  function handleRemoveTweets(id: number): void {
    const filtered = tweets.filter((t) => t.id !== id);
    setTweets(filtered);
    setDisabledButtonAdd(true);
  }

  const chooseColors = useMemo(() => {
    for (let i = 0; i < 10 ** 9; i++) {
      i += 1;
      i -= 1;
    }

    if (count1 % 2 === 0) {
      return "red";
    }

    if (count1 % 3 === 0) {
      return "blue";
    }

    if (count1 % 3 === 0) {
      return "gree";
    }

    return "orange";
  }, [count1]);

  const totalTweetsWIthOne = useMemo(() => {
    console.log("teste totalTweetsWIthOne ");
    return tweets.filter((t) => t.name.includes("1")).length;
  }, [tweets]);

  useEffect(() => {
    if (valurInput !== "") {
      setDisabledButtonAdd(false);
    } else {
      setDisabledButtonAdd(true);
    }
  }, [valurInput]);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  /**
   * Example fetch
   */
  // useEffect(() => {
  //   fetch("https://api.github.com/users/jonataserpa/repos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRepositorys(data);
  //     });
  // }, []);

  /**
   * Example axios: https://api.github.
   */
  useEffect(() => {
    axios
      .get("https://api.github.com/users/jonataserpa/repos")
      .then((response) => {
        setRepositorys(response.data);
      });
  }, []);

  return (
    <div>
      <Title background="black" fontSize={18} > Lista <span>to do</span></Title>

      <input
        type="text"
        ref={inputText}
        onChange={(e) => setValueInput(e.target.value)}
      />

      <button onClick={handelCLickAddTweet} disabled={disabledButtonAdd}>
        ADD tweet
      </button>

      <input
        placeholder="Pesquise aqui..."
        type="text"
        onChange={handleChange}
      />

      {/* Exemplo to list */}
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            name={tweet.name}
            id={tweet.id}
            handleRemoveTweets={() => handleRemoveTweets(tweet.id)}
          />
        );
      })}

      <p>Result total one: {totalTweetsWIthOne}</p>

      {/* <p>Exemplo consumindo api git hub</p> */}

      <ul>
        {repositorys.map((repository) => {
          return (
            <li key={repository.fullname}>
              <strong>{repository.fullname}</strong>
              <p>{repository.description}</p>
            </li>
          );
        })}
      </ul>

      {/* Exemplo memo */}

      {/* <Count1 value={count1} />
      <button onClick={() => setCount1(count1 + 1)}>
        Increment count 1
      </button>

      <Count2 value={count2} />
      <button onClick={() => setCount2(count2 + 1)}>
        Increment count 2
      </button> */}

      {/* Exemplo useCallback */}

      {/* <CountUseCallback1 value={count1} setValueCount={handleIncrement1} />
      <CountUseCallback2 value={count2} setValueCount={handleIncrement2} /> */}

      {/* Exemplo useMemo */}

      {/* <CountUseCallback1 value={count1} color={chooseColors} setValueCount={handleIncrement1} />
      <CountUseCallback2 value={count2} setValueCount={handleIncrement2} /> */}
    </div>
  );
}

export default App;
