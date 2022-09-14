import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type="text"
            className="form-control search-input" // from bootstrap
            placeholder="Найти сотрудника"
         />
    )
} 

export default SearchPanel;