import useFetch from "../hooks/useFetch"
function CustomHook1() {

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})
    // console.log(res);

    if(loading) {
        return <h3>Loading...</h3>
    }

  return (
    <div>
        {data.map((post) => (
            <h3 key={post.id}> {post.title} </h3>
        ))}
    </div>
  )
}

export default CustomHook1 