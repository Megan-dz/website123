// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Megan Dcruz',
    title: 'Undergraduate Student',
    image: getAsset('images/Resume_Pic (1).png'), // Customize or replace with your profile image
    description:
      'A first year Economics and Data Science major who loves exploring the role of data in economics.\n' +
      '\n' +
      'Christ University\n' +
      '\n' +
    
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Exploring economics through data analytics.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Megan Dcruz – Undergraduate Student',
    description: "Portfolio website showcasing my education, projects, and experience.",
  },

  animatedText: ['Economics student', 'Data analytics enthusiast', 'Christ University', 'Data Science student'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
 


  education: [
    {
      institution: 'Christ university',
      degree: 'Bachelor of Science in Economics with Data Science',
      year: '2025–2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Mathematics, Statistical tools, Data Visualization, Microeconomics, Macroeconomics'],
    },
  ],


  // ✅ Experience section updated
  experience: [
    {
      title: 'Your Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Your Organization',
      time: '(MMM YYYY – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
    {
      title: 'Previous Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Previous Organization',
      time: '(MMM YYYY – MMM YYYY)',
      desp: ['Key contribution 1', 'Key contribution 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Netflix_Rating_Analysis',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'An analysis of Netflix ratings using Excel and data visualization to uncover viewer trends and preferences.',
      Githublink: 'https://github.com/Megan-dz/Netflix_Content_Analysis',
    },

  ],


  contact: {
    email: 'megandz07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/megan-anriya-dcruz-mnsk070711/',
    github: 'https://github.com/Megan-dz',
  },
};

export default siteConfig;
