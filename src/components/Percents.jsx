import React from 'react';
import FlagIcon from './FlagIcon'

 export default function Percents({name, percent,flag ,top}) {
  return (
    <li>
        <div href="" class="flex items-center text-left p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
          <FlagIcon code={flag} size='3x' />
          
          <span class="flex-1 ml-3 whitespace-nowrap">{name}</span>
          {top ? <span class="inline-flex items-center justify-end px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Top Contributor</span> : <span class=""></span>}
          <span class="flex-1 ml-3 w-full whitespace-nowrap text-right pr-3">{percent || '—'}</span>
           
        </div>
    </li>
  )
}