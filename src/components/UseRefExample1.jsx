import { useRef } from "react"

function UseRefExample1() {
    const inputRef = useRef() //useRef is used to update the element without rendering the components
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = 'SAMEER'
        inputRef.current.style.backgroundColor = 'red'
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name" className="">Name</label>
            <input type="text" ref={inputRef} name="name" id="name" className="form-control mb-2"/>
            <button className="btn btn-primary">Submit</button>
            <p ref={paraRef} onClick={() => inputRef.current.focus()  }>This is before submitting the form</p>
        </form>
    </div>
  )
}

export default UseRefExample1