import {useState} from 'react';

function Login() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }/*,{
      id: 2,
      name: 'name 2'
    },{
      id: 3,
      name: 'name 3'
    }*/]);
  const getDataFromChild = (data) => {
    console.log(`viendo Dta desde App: ${data}`);
  };
  return (
    <div>
      
    </div>
  );
}

export default Login;
