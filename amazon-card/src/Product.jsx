import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrice = ["$79.99", "$99.99", "$89.99", "$69.99"];
    let newPrice = ["$59.99", "$79.99", "$69.99", "$49.99"];
    let description= [["8,000 DPI", "Wireless"], ["7 buttons", "Ergonomic"], ["Multi-Touch", "Scroll Wheel"], ["1 button", "Ergonomic"]];

    return (
        <div className ="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );

}

export default Product;