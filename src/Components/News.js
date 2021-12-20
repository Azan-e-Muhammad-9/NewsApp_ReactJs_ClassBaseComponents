import React, { Component } from "react";
import propTypes from "prop-types";

import Spinner from "./Spinner";
import Newsitems from "./Newsitems";

import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {


   


  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string.isRequired,
    pageSize: propTypes.number,
    apiKey: propTypes.string.isRequired,
  };

   capatilizeTheFirstChar=(str) => {

  return str.charAt(0).toUpperCase() + str.slice(1);
  
}

  constructor(props) {
    super(props);
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title=this.capatilizeTheFirstChar(this.props.category)+" news.Az"
  }

  async newsUpdate() {

    this.props.setProgress(0);
    let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(newsApiUrl);
    this.props.setProgress(30);
    let dataInJson = await data.json();
    this.setState({
      articles: dataInJson.articles,
      totalArticles: dataInJson.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  fetchMoreData = async() => {
   

    this.setState({page:this.state.page+1});

    let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(newsApiUrl);
    let dataInJson = await data.json();
    this.setState({
      articles: this.state.articles.concat(dataInJson.articles),
      totalArticles: dataInJson.totalResults,
      loading: false,
    });


  };

  render() {
    return (
      <>
          <h1 className="text-center my-3" style={{paddingTop:"60px"}}> {`Latest ${this.capatilizeTheFirstChar(this.props.category)} News`}</h1>

          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}

        >

        <div className="container ">

          <div className="row">
            {
              this.state.articles.map((obj) => {
                return (
                  <div className="col-md-4" key={obj.url}>
                    <Newsitems
                      title={obj.title}
                      description={
                        obj.description === null ? " " : obj.description
                      }
                      urlToImage={obj.urlToImage}
                      url={obj.url}
                      author={obj.author}
                      date={obj.publishedAt}
                      source={obj.source.name}
                    />
                  </div>
                );
              })}
          </div>

        </div>
    

          </InfiniteScroll>

      </>
    );
  }
}

export default News;
