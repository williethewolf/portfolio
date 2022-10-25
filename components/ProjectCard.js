export default function ProjectCard({name,thumbnail,description,url}) {
  return (
    <div class="max-w-m bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 place-content-center">
    <a href="#">
        <img class="shadow-xl" src={thumbnail} alt={name} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href={url} target="_blank" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
            View in Gitub
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    
  )
}