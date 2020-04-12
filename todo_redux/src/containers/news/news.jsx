import React, {Component} from 'react'

import Title from '../../components/title/title'
import NewsPost from '../../components/news/news'
import Input from '../../components/input/input'
import Select from '../../components/select/select'
import Pagination from '../../components/pagination/pagination'

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SERCH_PARAM = 'query=';
const PAGE_HITS = 'hitsPerPage=';
const PAGE_PARAM = 'page=';
const HITS = [
  {
    value: 10,
    label: 10
  },
   {
    value: 20,
    label: 20
  },
   {
    value: 30,
    label: 30
  },
   {
    value: 40,
    label: 40
  },
   {
    value: 50,
    label: 50
  },
]

class News extends Component {
    state = {
        searchQuery: "",
        result: {},
        hitsPerPage: 20,
        page: 0
    }

    componentDidMount() {
      const {searchQuery, hitsPerPage, page} = this.state;
      this.fetchData(searchQuery, hitsPerPage, page);
    }

    fetchData = (searchQuery, hitsPerPage, page) => {
      console.log(`${BASE_PATH}${SEARCH_PATH}?${SERCH_PARAM}${searchQuery}`);
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SERCH_PARAM}${searchQuery}&${PAGE_HITS}${ hitsPerPage}&${PAGE_PARAM}${page}`)
        .then(res => res.json())
        .then(result => this.setNews(result))
        .catch(error => error)
    }

    handleSearch = ({target: {value}}) => {
      this.setState({
        searchQuery: value
      })
    }
    handleHits = ({target: {value}}) => {
      const {searchQuery} = this.state;

      this.setState({
        hitsPerPage: +value,
        page: 0
      },
        () => {
          this.fetchData(searchQuery, this.state.hitsPerPage, 0)
        });
    }

    getSearch = ({key}) => {
      if(key === 'Enter') {
        const { searchQuery, hitsPerPage } = this.state;
        this.setState({
          page: 0
        });
        this.fetchData(searchQuery, hitsPerPage, 0);
      }
    }

    handlePageChange = ({target}) => {
      const btnType = target.getAttribute('data-name');
      let {page} = this.state;
      if(!isNaN(btnType)) {
        this.updatePage(+btnType);
      } else {
        switch (btnType) {
          case 'next':
            this.updatePage(page + 1);
            break;
          case 'prev':
            this.updatePage(page - 1);
            break;
            default: return null;
        }
      }
    }

    updatePage = (number) => {
      const {searchQuery, hitsPerPage} = this.state;
      this.setState({
        page: number,
      }, () => {
        this.fetchData(searchQuery, hitsPerPage, number);
      })
    }

    setNews = result => {
        this.setState({ result })
    }

  render() {
      const { searchQuery, result, hitsPerPage } = this.state;
      const { hits = [], page, nbPages } = result;
      console.log('result: ', result);
    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select options={HITS} handleChange={this.handleHits} value={hitsPerPage} />
        <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={nbPages}
         />
        <Input onChange={this.handleSearch} onKeyPress={this.getSearch} value={searchQuery} />
        <ul className="newsList">
          {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) =>
            <NewsPost
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
             />
          )}
        </ul>
      </div>
    );
  }
}

export default News;
