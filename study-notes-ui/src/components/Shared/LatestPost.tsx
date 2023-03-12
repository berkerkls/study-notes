import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function LatestPost() {
  interface CarouselNoteTypes {
    topic: string;
    title: string;
    image: string;
    desc: string;
  }

  const notesArray: Array<CarouselNoteTypes> = [
    {
      topic: "React",
      title: "How to Use useState Hook in React",
      image:
        "https://pbs.twimg.com/card_img/1630659844754513931/y2ZJSuXO?format=png&name=medium",
      desc: "These are the notes that describe usage of useState",
    },
    {
      topic: "TypeScript",
      title: "What is TypeScript",
      image:
        "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
      desc: "These are the notes that describe TypeScript",
    },
    {
      topic: "JavaScript",
      title: "What is JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      desc: "These are the notes that describe JavaScript",
    },
    {
      topic: "CSS",
      title: "What is CSS",
      image:
        "data:image/jpeg;base64,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",
      desc: "These are the notes that describe CSS",
    },
    {
      topic: "Vue",
      title: "What is Vue",
      image:
        "data:image/png;base64,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",
      desc: "These are the notes that describe Vue",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      className="w-full lg:w-11/12 mx-auto bg-slate-50"
    >
      {notesArray.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="card card-compact w-96 mb-5 bg-slate-50 shadow-lg mx-auto"
          >
            <figure>
              <img
                src={item.image}
                alt="Note image"
                className="object-fit w-auto h-40"
              />
            </figure>
            <div className="card-body">
              <div className="badge bg-transparent text-black">
                {item.topic}
              </div>
              <h2 className="card-title">{item.title}</h2>
              <p>{item.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm bg-indigo-700 hover:bg-indigo-700 text-white hover:border-indigo-700 hover:opacity-80">
                  Read
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
