"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

const Dashboard = () => {
  // const [data, setData] = useState([])  
  // const [error, setError] = useState(false)  
  // const [isLoading, setIsLoading] = useState(false)  

  // useEffect(() => {

  // const getData = async () => {
  //   setIsLoading(true)
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     cache: "no-store"
  //   })
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data')
  //   }
  //   const data = await res.json()
  //   setData(data)
  //   setIsLoading(false)
  // }

  // getData()
  // }, [])

  // console.log(data)

  const session = useSession()

  const router = useRouter()
  //string da biblioteca SWR
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  if (error) return <div>Loading fail </div>
  if (isLoading) return <div>carregando...</div>

  if (session.status === 'loading') {
    return (
      <p>Loading...</p>
    )
  }
  //Importante pois serve para caso a pessoa n estiver na sua conta ela volte para se registar
  if (session.status === 'unauthenticated') {
    router?.push("/dashboard/login")
  }
  console.log(session)



  const handleSubmit= async (e) =>{
    e.preventDefault()
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    //valida se a url é válida para n bugar no mongo db e bugar o site todo
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(image)) {
    // URL inválida, faça o tratamento adequado (exibindo mensagem de erro, etc.)
    console.log('URL inválida');
    alert("Url da image errada")
    return;
  }


    try {
      await fetch("/api/posts", {
        method: "POST",
        //quando usamos o body temos q passar o jsonstringfy
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      //esse mutate serve para dar refresh na pagina dps de criar o post
      mutate();
     e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete= async(id)=> {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }
  
  //se tiver autenticado, retornamos a página normal do dashboard
  if (session.status === "authenticated") {
    return (
      <div className='flex gap-24'>
        <div className='flex-1'>
        {isLoading ? "loading..." : data?.map(post => (
          <div key={post._id} className='flex items-center justify-between m-[50px]'>
           
              <Image src={post.image} width={200} height={100} alt='image' className='rounded' />
           
            <h2>
              {post.title}
            </h2>
            <span onClick={()=>handleDelete(post._id)} className='cursor-pointer text-red-600'>X</span>
          </div>
        ))}
        </div>

        <form onSubmit={handleSubmit} className='flex flex-1 flex-col gap-5'>
            <h1>Add New Post</h1>
            <input type="text"  placeholder='Title' className='p-3 bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-lg font-bold'/>
            <input type="text"  placeholder='Description' className='p-3 bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-lg font-bold'/>
            <input type="text"  placeholder='Image' className='p-3 bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-lg font-bold'/>
            <textarea placeholder='Content' cols="30" rows="10" className='p-3 bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-lg font-bold'></textarea>
            <button type='submit' className='p-5 cursor-pointer bg-green1 rounded-md text-[#eee] font-bold'>Send</button>
        </form>
      </div>
    )
  }

}

export default Dashboard