import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
function ProjectTwoMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = {
    id: 1,
    title: "AI Chatbot with Retrieval-Augmented Generation ",
    img: "./chatbot_title.jpg",
  };

  const slides = [
    {
      text: (
        <div>
          <p className="font-extrabold text-[2.1vh]">Description</p>
          <p className="font-light text-gray-400">
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
          <p className="font-extrabold text-[2.1vh]">How it works?</p>
          <p className="font-light text-gray-400 text-[1.9vh]">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold text-[1.7vh]">Document Processing</b> The
            system begins by extracting text from a PDF file, likely containing
            your thesis or other significant documents. This text is formatted
            for usability.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Text Chunking:</b> The extracted text is
            segmented into smaller chunks. This step ensures that the data can
            be effectively converted into vectors, which are manageable in size
            and semantically rich.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Building the Vector Database</b> Each text
            chunk is transformed into a numerical vector using an embedding
            model. These vectors capture the semantic essence of the text,
            facilitating content-based retrieval.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <p className="font-extrabold text-[2.1vh]">How it works?</p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Vector Storage:</b> The vectors are stored
            in a vector database designed for fast retrieval based on semantic
            similarity, setting the foundation for the chatbot's information
            retrieval capabilities.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Query Handling:</b> User queries are
            converted into vectors similarly. These query vectors are used to
            fetch semantically related text chunks from the vector database.
          </p>

          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Retrieval-Augmented Generation (RAG)</b>{" "}
            The chatbot employs a RAG approach to both retrieve relevant text
            and generate coherent responses. This ensures answers are not only
            contextually accurate but also conversationally appropriate.
          </p>
        </div>
      ),
    },

    {
      text: (
        <div>
          <p className="font-extrabold text-[2.1vh]">How it works?</p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Using History-Aware Retrieval:</b> This
            system stores the history of the conversation—keeping track of both
            questions and responses. It then uses this history to reformulate
            incoming questions, ensuring they can be understood and responded to
            in isolation. This isolation is crucial for the model to handle each
            new query as a standalone item, even though it's informed by past
            interactions. This process allows for precise retrieval and response
            generation that's deeply integrated with the conversation's context.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Response Generation and Delivery:</b>{" "}
            Finally, the chatbot generates a response based on the retrieved
            data and the re-contextualized query. This response is then
            delivered to the user, completing the interaction loop.
          </p>
        </div>
      ),
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative">
      <div className="flex flex-col justify-center text-center m-auto w-4/5 h-3/7 pt-[100px]">
        <img
          className="h-full w-3/5 md:w-1/2 m-auto rounded-xl object-fit "
          src={item.img}
          alt=""
        />
        <h1 className="flex justify-center font-bold text-[2.2vh] items-center">
          {item.title}{" "}
          <a
            href="https://github.com/Alirezad126/PySnake"
            target="_blank"
            className=""
          >
            <AiOutlineGithub className="w-10 h-10 sm:w-15 sm:h-15 " />
          </a>{" "}
        </h1>
      </div>

      <div className="w-5/6 h-2/3 m-auto py-5  relative overflow-hidden">
        <div className="text-[1.7vh]  w-4/5 m-auto">
          {slides[currentIndex].text}
        </div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[0px]text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
        >
          <div className="hidden md:block z-50">
            <BsChevronCompactLeft size={30} />
          </div>

          <div className="sm:hidden z-50">
            <BsChevronCompactLeft size={20} />
          </div>
        </div>
        {/* Rigth Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[0px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
        >
          <div className="hidden md:block z-50">
            <BsChevronCompactRight size={30} />
          </div>

          <div className="sm:hidden z-50">
            <BsChevronCompactRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectTwoMobile;
