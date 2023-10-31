import { NewsItem as Noticia } from '../../assets/perrosNews'
import News from '../News/News'
import { section } from './NewsList.module.css'

type NewsListProps = {
    news: Noticia[]
}

function NewsList(props: NewsListProps) {



    return (
        <section className={section}>
            {
                props.news.map((newsItem) => <News key={newsItem.publishedAt} news={newsItem} />)
            }
        </section>
    )
}

export default NewsList
