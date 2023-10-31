import news from './assets/perrosNews';
import NewsList from './components/NewsList/NewsList';

function App() {

    return (
        <>
            <h1>React + TypeScript</h1>
            <NewsList news={news} />
        </>
    );
}

export default App;
