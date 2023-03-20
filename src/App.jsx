import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const [isLodaing, setisLodaing] = useState(false);

  const [prompt, setPrompt] = useState(
    "Enter your prompt and generate your imagination"
  );
  async function fetchData() {
    try {
      setisLodaing(true);
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });
      setImageUrl(response.data.data[0].url);
      setisLodaing(false);
    } catch (e) {
      setisLodaing(false);
      setPrompt("Enter a vlid prompt");
    }
  }
  return (
    <div className="flex  flex-col items-center justify-center w-full h-screen gradient__bg text-white gap-12">
      <h1 className="lg:text-7xl text-4xl py-4 gradient__text">
        Image Generator
      </h1>
      {isLodaing ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={imageUrl}
            alt={prompt}
            className=" flex items-center text-center mx-auto"
          />
        </>
      )}

      <input
        type="text"
        placeholder="Enter your prompt"
        onChange={(e) => setPrompt(e.target.value)}
        className="w-1/2 h-10 rounded-lg outline-none px-4 gradient__input_text"
      />
      <button
        onClick={fetchData}
        className="gradient__btn  text-sm leading-6 font-medium py-2 px-3 rounded-lg"
      >
        Generate
      </button>
      <footer>
        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://atharvamulgund.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-6 font-medium py-2 px-3 rounded-lg gradient__text"
          >
            Atharva Mulgund
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
