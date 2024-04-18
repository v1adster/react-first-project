import  data from "../../data.json";
import Product from "../product/Product";
import styles from './ProductList.module.scss';

const ProductList = ()=>{

    return (
        <div>
            <h2>List</h2>
            <div className={styles.productlist}>
                {data.map((item,index)=>(
                <div key={index}> 
                    <Product product={item}/>
                </div>
            ))}
            </div>
        </div>
    )
}
export default ProductList;