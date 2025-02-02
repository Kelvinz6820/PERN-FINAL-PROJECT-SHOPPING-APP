
import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './ProductList.css'




/*function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => setProducts(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
  <div>
      <ul>
        {products.map((products) => (
          <li key={products.name}>{products.name}</li>
        ))}
      </ul>
    </div>
  );
}
*/
export default class ProductList extends Component {
    render() {
        return (
            <div className='list'>
                {this.props.products.map((product, i) => {
                    return (
                      //pass backend id as prop
                        <Link className='product' key={`${product.id}`} to={`/products/${product.id}`}>
                            <img src={product.url} alt="product"></img>
                            <h2>{product.name}</h2>
                        </Link>

                    )
                })}
            </div>
        )
    }
}