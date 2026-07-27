import React from 'react';

// Simple map for common language colors
const getLanguageColor = (lang) => {
  const colors = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'TypeScript': '#3178c6',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Ruby': '#701516',
    'Go': '#00ADD8',
    'PHP': '#4F5D95',
    'Vue': '#41b883',
    'React': '#61dafb'
  };
  return colors[lang] || '#8b949e';
};

const ProjectCard = ({ repo }) => {
  const languageColor = getLanguageColor(repo.language);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_4px_30px_rgba(59,130,246,0.15)] group h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2 break-all">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
          {repo.name}
        </h3>
      </div>
      
      <p className="text-slate-300 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
        {repo.description || 'No description provided.'}
      </p>
      
      <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5 font-medium">
            <span 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: languageColor }}
            ></span>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"></path></svg>
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
