import {useState, useEffect} from 'react';
import ProgressBar from 'react-progressbar';

export default function ProjectCard({name,thumbnail,description,url, index}) {
    const [languages, setLanguages] = useState({});

    const languageColors = {
        JavaScript: '#f1e05a',
        TypeScript: '#007acc',
        CSS: '#563d7c',
        HTML: '#e34c26',
        Python: '#3572A5',
        Ruby: '#701516',
        Java: '#b07219',
        C: '#555555'
        // add more language-color mappings as needed
      };
  
    useEffect(() => {
            async function fetchLanguages() {
            const response = await fetch(`https://api.github.com/repos${url.slice(18)}languages`);
            const data = await response.json();
            setLanguages(data);
            }
            fetchLanguages();
        }, [url]);

  let totalLines = 0;
  for (const [language, lines] of Object.entries(languages)) {
    totalLines += lines;
  }

  const progressBars = (
    <div className="relative w-full flex">
      {Object.entries(languages).map(([language, lines]) => {
        const percentage = (lines / totalLines) * 100;
        if (percentage < 5 && percentage > 1) {
            percentage = 5;
          }
        else if (percentage < 1) return null
        return (
          <div key={language} className="relative flex-row" style={{width:`${percentage}%`,}}>
            <ProgressBar
            //   className="absolute top-0 left-0"
              completed={100}
              color={languageColors[language] || '#333'}
            />
            <p className="absolute top-0 left-0.5 center text-xs font-medium text-white" style={{}}>{language}</p>
          </div>
        );
      })}
    </div>
  );
  return (
    <div key={index} className="max-w-m bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 place-content-center text-left">
        {/* Working on adding language usage from the Git hub API */}
        
        
        <div className=''>
            <p className='text-xs place-content-left'>Languages used:</p>
          {progressBars}
        </div>
        <a href={url}>
            <img className="shadow-xl" src={thumbnail} alt={name} />
        </a>
        <div className="p-5">
            <a href={url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
            </div>
            <a href={url} target="_blank" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                View in Gitub
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    
  )
}