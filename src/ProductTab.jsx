import Product from "./Product";
import Price from "./Price";    

function ProductTab() {
    let styles ={
        display:"flex",
        flexWrap:"wrap"
        
        

    }
    return (
        <div style={styles}>
            
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Magic Mouse" idx={1}/>
        <Product title="Microsoft Surface Mouse" idx={2}/>
        <Product title="Razer DeathAdder" idx={3}/>

        </div>

    )
}

export default ProductTab;