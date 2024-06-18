import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllArticlesCard from '../AllArticlesCard/AllArticlesCard';
import PremiumCard from '../AllArticlesCard/PremiumCard';
import SectionTitle from '../../Components/SectionTitle';

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [publisher, setPublisher] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      let query = '?';
      if (publisher) query += `publisher=${publisher}&`;
      if (tags) query += `tags=${tags}&`;
      const response = await fetch(`http://localhost:5000/All-Articles${query}`);
      const data = await response.json();
      setAllArticles(data);
    };
    fetchArticles();
  }, [publisher, tags]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SectionTitle heading={"All Articles"} subHeading={"Discover Content from All Our Esteemed Publishers"}></SectionTitle>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by Title"
        className="lg:w-[500px] flex mx-auto px-4 py-2 mb-4 rounded-lg border-2 border-[#E3963E]"
      />
      <input
        type="text"
        value={publisher}
        onChange={e => setPublisher(e.target.value)}
        placeholder="Filter by Publisher"
        className="lg:w-[500px] flex mx-auto px-4 py-2 mb-4 rounded-lg border-2 border-[#E3963E]"
      />
      <input
        type="text"
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="Filter by Tags (comma separated)"
        className="lg:w-[500px] flex mx-auto px-4 py-2 mb-4 rounded-lg border-2 border-[#E3963E]"
      />

      <div className='lg:grid lg:grid-cols-3 mx-auto'>
        {filteredArticles.map((article, index) => (
          <AllArticlesCard key={article._id} articles={article} />
        ))}
      </div>

      <PremiumCard></PremiumCard>
    </div>
  );
};

export default AllArticles;