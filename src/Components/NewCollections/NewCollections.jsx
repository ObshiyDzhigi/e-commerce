import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
const NewCollections = () => {
    return (
        <div className="new-collections">
            <div className="new-collections-container container">
            <h1>New Collections</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item,index)=>{
                  return <Item    
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  
                  
                  />
                })}
            </div>
            </div>
        </div>
    );
}
 
export default NewCollections;