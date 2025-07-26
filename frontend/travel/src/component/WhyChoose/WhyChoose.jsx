import React from 'react';
import './WhyChoose.css';

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const StarRatingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CuratedHeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 7.5L12 12" />
    <path d="M14.5 9.5L9.5 14.5" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.69a12 12 0 0 0 6.06 6.06l.69-.7a2 2 0 0 1 2.19-1.18 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M18 9a2.22 2.22 0 0 0-2 2h4a2.22 2.22 0 0 0-2-2Z" />
    <path d="M18 13a2.22 2.22 0 0 0-2 2h4a2.22 2.22 0 0 0-2-2Z" />
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card p-3 h-100">
      <Icon />
      <h5 className="fw-semibold text-dark mb-2">{title}</h5>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
};

const WhyChooseThrillophilia = () => {
  const features = [
    {
      id: 1,
      icon: HeartIcon,
      title: '10k+',
      description: 'Happy customers from 65+ countries all around.',
    },
    {
      id: 2,
      icon: StarRatingIcon,
      title: '4.7 / 5.0',
      description: 'Cumulative ratings of our trips across platforms.',
    },
    {
      id: 3,
      icon: CuratedHeartIcon,
      title: 'Instant Refund',
      description: 'Expert-guided trips with meticulous planning.',
    },
    //         {
    //   id: 4,
    //   icon: SupportIcon,
    //   title: 'Lowest Price Guarantee',
    //   description: 'We are always there to help you pre, post and on the trip.',
    // },
    {
      id: 4,
      icon: SupportIcon,
      title: '24*7 Support',
      description: 'We are always there to help you pre, post and on the trip.',
    },

  ];

  return (
    <section className="why-thrillophilia  bg-white" id='about'>
      <div className="container">
        <h3 className="mb-5 fw-bold text-dark" style={{fontSize:'28px'}}>Why Choose Sabeer Travel</h3>
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-12 col-sm-6 col-lg-3">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseThrillophilia;
