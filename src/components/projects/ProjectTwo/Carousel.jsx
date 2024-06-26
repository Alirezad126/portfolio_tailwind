import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";

function Carousel() {

  const carouselRef = useRef(null);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / texts.length;
      carouselRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / texts.length;
      carouselRef.current.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
  };

  const texts = [
    {
      text: (
        <div>
          <p className="font-extrabold text-3xl text-orange-400">Description</p>
          <p className="font-light text-[1vw] text-[#9e9e9e] text-justify">
            This project involves the development of a personalized chatbot that
            serves as a virtual representation of myself. Utilizing the latest
            advancements in AI, the chatbot is built using LangChain and
            OpenAI's powerful language models, specifically leveraging the
            Retrieval-Augmented Generation (RAG) technique. This approach
            enriches the bot's responses, allowing it to provide detailed,
            context-aware information pulled from a comprehensive data set. The
            bot is particularly well-versed in discussing my academic thesis and
            personal professional experiences, making it a robust tool for
            interactive queries about my background and work.
          </p>
        </div>
      ),
    },

    {
      text: (
        <div>
          <p className="font-extrabold text-3xl text-orange-400 ">
            How it works?{" "}
          </p>

          <div className="flex flex-col gap-4">
            <div className="text-[#9e9e9e]">
              <p className="font-light text-[1vw]  ">
                <TbPoint className="inline " />
                <b className="font-bold text-[#ffffff]">
                  Document Processing and Data Preparation
                </b>
              </p>

              <ol>
                <li className="pl-[50px] text-[1vw] text-justify ">
                  <b className="text-[#ffffff]">PDF Processing:</b> The system
                  begins by extracting text from a PDF file, likely containing
                  your thesis or other significant documents. This text is
                  formatted for usability.
                </li>

                <li className="pl-[50px] text-[1vw] text-justify">
                  <b className="text-[#ffffff]">Text Chunking:</b> The extracted
                  text is segmented into smaller chunks. This step ensures that
                  the data can be effectively converted into vectors, which are
                  manageable in size and semantically rich.
                </li>
              </ol>
            </div>

            <div className=" text-[#9e9e9e]">
              <p className="font-light text-[1vw] text-[#ffffff] ">
                <TbPoint className="inline" />
                <b className="font-bold ">Building the Vector Database</b>
              </p>

              <ol>
                <li className="pl-[50px] text-[1vw] text-justify">
                  <b className="text-[#ffffff]">Text Embedding:</b> Each text
                  chunk is transformed into a numerical vector using an
                  embedding model. These vectors capture the semantic essence of
                  the text, facilitating content-based retrieval.
                </li>

                <li className="pl-[50px] text-[1vw] text-justify">
                  <b className="text-[#ffffff]">Vector Storage:</b> The vectors
                  are stored in a vector database designed for fast retrieval
                  based on semantic similarity, setting the foundation for the
                  chatbot's information retrieval capabilities.
                </li>
              </ol>
            </div>
          </div>
        </div>
      ),
    },

    {
      text: (
        <div>
          <p className="font-extrabold text-3xl text-orange-400 ">
            How it works?{" "}
          </p>

          <div className="flex flex-col gap-4 ">
            <div className=" text-[#9e9e9e] ">
              <p className="font-light text-[1vw] text-[#ffffff] ">
                <TbPoint className="inline" />
                <b className="font-bold ">Chatbot Interaction</b>
              </p>

              <ol>
                <li className="pl-[50px] text-[1vw] text-justify">
                  <b className="text-[#ffffff]">Query Handling:</b> User queries
                  are converted into vectors similarly. These query vectors are
                  used to fetch semantically related text chunks from the vector
                  database.
                </li>

                <li className="pl-[50px] text-[1vw] text-justify">
                  <b className="text-[#ffffff]">
                    Retrieval-Augmented Generation (RAG):
                  </b>{" "}
                  The chatbot employs a RAG approach to both retrieve relevant
                  text and generate coherent responses. This ensures answers are
                  not only contextually accurate but also conversationally
                  appropriate.
                </li>

                <li className="pl-[50px] text-[1vw]">
                  <b className="text-[#ffffff]">
                    Using History-Aware Retrieval:
                  </b>{" "}
                  This system stores the history of the conversation—keeping
                  track of both questions and responses. It then uses this
                  history to reformulate incoming questions, ensuring they can
                  be understood and responded to in isolation. This isolation is
                  crucial for the model to handle each new query as a standalone
                  item, even though it's informed by past interactions. This
                  process allows for precise retrieval and response generation
                  that's deeply integrated with the conversation's context.
                </li>
                <li className="pl-[50px] text-[1vw]">
                  <b className="text-[#ffffff]">
                    Response Generation and Delivery:
                  </b>{" "}
                  Finally, the chatbot generates a response based on the
                  retrieved data and the re-contextualized query. This response
                  is then delivered to the user, completing the interaction
                  loop.
                </li>
              </ol>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const Slides = texts.map((slide) => {
    return <div className="text-[1vw]">{slide.text}</div>;
  });
  
  return (
    <div className="w-full h-full m-auto py-5 px-5 relative rounded-3xl">
      <div
        onClick={scrollToPrevious}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-50px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="carousel" ref={carouselRef}>
        {Slides}
      </div>

      <div
        onClick={scrollToNext}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-50px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Carousel;
