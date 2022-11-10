// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return (
        <div style = {{width:"300px"}}>
            <img src = {props.item.image} alt="" width = "300px"/>
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
            <div>{props.item.price}
                <button onClick={()=>props.updateCart(props.index)}>Add to Cart</button>
            </div>
        </div>
    )
}