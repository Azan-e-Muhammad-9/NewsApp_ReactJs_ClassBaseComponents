import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    const { title, description, urlToImage, url, author, date, source } =
      this.props;
    return (
      <div className="card my-4">
        <img
          src={
            urlToImage === null
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm66jWb1DELMqWVRTmggAv4QjwmekMBsSdXNoLkmOxpB6vQ5utr3_K7o_Fe2-JnTNhKQ&usqp=CAU"
              : urlToImage
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <span className="badge bg-danger">{source}</span>
          <p></p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
