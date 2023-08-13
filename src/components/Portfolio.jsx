import React ,{useEffect,useState} from 'react'
import '../css/Portfolio.css';
import axios from 'axios'


const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    axios.get('modal/data.json').then((response) => {
      setPortfolio(response.data.portfolio);
    });
  }, []);

  const portfolioList = portfolio
    .filter(item => currentCategory === 'All' || item.category === currentCategory)
    .map(portfolioItem => (
      <div key={portfolioItem.id}>
        <img src={portfolioItem.image} alt="img" />
      </div>
    ));

  const categories = ['All', ...new Set(portfolio.map(item => item.category))];

  return (
    <div className="portfolio">
      <h2 className="heading" style={{ textAlign: "center" }}>
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        {categories.map(category => (
          <li
            key={category}
            className={`portfolio-item ${currentCategory === category ? 'activePorto' : ''}`}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="box">
        {portfolioList}
      </div>
    </div>
  );
};

export default Portfolio;
