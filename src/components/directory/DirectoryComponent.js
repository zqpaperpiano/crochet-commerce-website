import CategoryItem from '../category-item/CategoryItem';
import '../../categories.style.scss';

const DirectoryComponent = ({categories}) => {
    return(
        <div className="categories-container">
        {categories.map((cat) => {
        const { id} = cat;
        return(
          <CategoryItem key={id} category={cat}/>
        )
      })}

      

    </div>
    );
}

export default DirectoryComponent;