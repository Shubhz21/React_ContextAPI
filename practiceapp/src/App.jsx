
import './App.css';

import Input from './components/Input';
import CalculationOverview from './components/CalculationOverview';

import { InputValueProvider } from './context/InputValueContext';

// const defaultFormData={
//   title:"", body:""
// }

function App() {
  
  // const [success,setSuccess]=useState(false);
  // const [error,setError]=useState(false);
  // const [formdata,setFormdata]= useState(defaultFormData);
  // const {title,body}=formdata;
  

  

  // const onChange=(e)=> {setFormdata(prevState=>({...prevState,[e.target.id]:e.target.value
  // }));
  // };
  // const [data,setData]= useState(null);
  // const [loading,setLoading]= useState(false);
  // const [error,setError]= useState(false);

//   useEffect(()=>{
// const fetchPosts =async()=>{
//     try {
//       setLoading(true);
//       const response =await axios.get("http://localhost:3000/Students");
  
//       setData(response.data);
//       setLoading(false);
//       setError(false);
      
//     } catch (error) {
//       setError(true);
//       setLoading(false);
//     }

    
//   };
//     fetchPosts();
//   },[]);

  // const onSubmit =async(e)=>{
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:3000/NewData',formdata)
  //     setSuccess(true)
  //   } catch (error) {
  //     setError(true)
  //   }
  //   setFormdata(defaultFormData);
  // };



  
  return (
    <>

<h1>Multiply by 2</h1>

<InputValueProvider>
<Input  />
<CalculationOverview/>
</InputValueProvider>
  


    {/* <h1>Sample Form</h1>
    <p>Create a Post</p>

    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <br/>
      <input type="text" id="title" value={title} onChange={onChange} />
      <br/>
      <br/>
      <label htmlFor="body">Body</label>
      <br/>
      <input type="text" id="body" value={body} onChange={onChange} />
      <br/>
      <br/>
      <button type="submit">Upload</button>
    </form>

    {error && <p>Coudn't upload</p>}
    {success && <p>upload success</p>} */}
    {/* {loading && 'Loading...'}
    
    {error && "no response try later...!"}
    {data && data.map((post)=>{
      const {id,name,yearOfpassing,gender,age}=post;
      return(
       <article key={id}>
      <p>{name}</p>
      <p>{id}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{yearOfpassing}</p>
      </article>
      );
    })} */}
    
    

    </>
  );
}

export default App;
