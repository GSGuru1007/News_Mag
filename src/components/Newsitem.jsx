import image from "../assets/news.jpeg";

export const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 d-inline-block"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt={title ? title : "News image"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No Description Available"}
        </p>
        <a
          href={url || "#"}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
