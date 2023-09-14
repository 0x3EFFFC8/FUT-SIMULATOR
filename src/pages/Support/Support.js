import {useState} from 'react';
import Contenedor from './../../Components/Nvar/Nvar';

function Support() {
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
      {post.map((p, i) => (
          <Contenedor
            key={p.id}
            name={p.name}
            getData={getDataFromChild}
          />
      ))}
    </div>
  );
}

export default Support;
