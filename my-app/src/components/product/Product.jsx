import styles from './Product.module.scss';

const Product=(props)=>{
    const {product}=props;

    return (<div className={styles.product}>
        <p>{product.title}</p>
        <p className='styles.price'>{product.price}</p>
        <p className='styles.price'>{product.discount}</p>
    </div>)
}
export default Product;