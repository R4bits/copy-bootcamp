import { NewsItem } from '../../assets/perrosNews'
import styled from 'styled-components'

type Props = {
  news: NewsItem;
}

function News(props: Props) {

  return (
    <Card>
      <h2>{props.news.title}</h2>
      <img src={props.news.urlToImage} alt="" />
      <p>{props.news.description}</p>
    </Card>
  )
}

const Card = styled.article`
width: 80%;
margin: 2rem auto;
border: solid black 2px;
border-radius: 2rem;
background-color: gray;

&:hover {
  border-color: hotpink;
}

h2 {
  color: white
}

p {
  text-align: center;
  font-size: large;
  font-weight: 700;
}

img {
  width: 500px;
}

`

export default News