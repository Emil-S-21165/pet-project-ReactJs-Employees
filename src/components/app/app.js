
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployessAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
       {name: "Alex M.", salary: 2800, increase: true, id: 1},
       {name: "Kate S.", salary: 1500, increase: false, id: 2},
       {name: "Mike L.", salary: 800, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployessAddForm/>
        </div>
    );
}

export default App;