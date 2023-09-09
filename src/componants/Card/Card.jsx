

const Card = () => {
    const title = "hello this is my custom title";
    const myObj = {
         views : '100k'
    }
    const myResult = (a,b) =>{
         return a+b;
    }
    const myStyle = {
        color : "orange",
        fontSize : "24px"
    }
    return (
    <>
    
     
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title "style={myStyle} >{title}</h2>
    <p>{myObj.views}</p>
    <p>{myResult(10,20)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    
    
    
    </>
     
    );
};

export default Card;