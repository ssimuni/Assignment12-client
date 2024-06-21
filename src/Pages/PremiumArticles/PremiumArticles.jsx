import React from 'react';
import PremiumCard from '../AllArticlesCard/PremiumCard';
import SectionTitle from '../../Components/SectionTitle';
import useArticles from '../../Hooks/useArticles';

const PremiumArticles = () => {
    const [allArticles] = useArticles();

    // Filter articles to show only those with isPremium value 'Yes'
    const premiumArticles = allArticles.filter(article => article.isPremium === 'Yes');

    return (
        <div>
            <SectionTitle heading="Premium Articles" subHeading="Discover Content from All Our Esteemed Publishers" />
            <div className="lg:grid lg:grid-cols-3 mx-auto mb-5">
                {premiumArticles.map((article) => (
                    <PremiumCard key={article._id} article={article} />
                ))}
            </div>
        </div>
    );
}

export default PremiumArticles;
