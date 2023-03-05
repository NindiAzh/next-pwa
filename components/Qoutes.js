// import Image from 'next/image'
// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

// const Qoutes = () => {
//   const URL = 'https://randomuser.me/api/?results=6'
//   const { data, error, isLoading } = useSWR(URL, fetcher)

 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>

//   return (
//   )
// }

// export default Qoutes


import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const url = 'https://jsonplaceholder.typicode.com/posts';

export const useGetPosts = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};