type NewsItem = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const articulos: NewsItem[] = [
  {
    author: 'Sergio Parra',
    title: 'Fue en Alemania, hace entre 16.000 y 14.000 años, cuando nació el perro europeo, según nuevo estudio',
    description: 'Según un equipo de investigación liderado por el Centro Senckenberg para la Evolución Humana y el Paleoambiente de la Universidad de Tubinga, la transición de lobos salvajes a perros domesticados en Europa pudo haber ocurrido en el suroeste de Alemania hace e…',
    url: 'https://www.xatakaciencia.com/antropologia/fue-alemania-hace-16-000-14-000-anos-cuando-nacio-perro-europeo-nuevo-estudio',
    urlToImage: 'https://i.blogs.es/4a762c/wolf-3151876_640/840_560.jpg',
    publishedAt: '2021-03-05T09:11:41Z'
  },
  {
    author: 'Rocío Sánchez',
    title: 'Cómo enseñar a tu perro a dar la pata',
    description: 'Cuando levante la patita para intentar coger el snack deberás premiarle y regalarle palabras cariñosas. Además, es fundamental que tengas paciencia y que practiques esta orden varias veces hasta que tu peludo la comprenda.',
    url: 'https://www.muyinteresante.es/mascotas/articulo/como-ensenar-a-tu-perro-a-dar-la-pata-911616447812',
    urlToImage: 'https://imagenes.muyinteresante.es/files/vertical_composte_image/uploads/2022/10/13/634828d5428c7.jpeg',
    publishedAt: '2021-03-22T21:47:00Z'
  },
  {
    author: 'Rocío Sánchez',
    title: '¿Qué hacer si tu perro o gato se pelea con otro animal?',
    description: 'Si puedes, coloca una barrera entre los animales, como un pedazo de cartón, una silla o incluso una mochila. Además, nunca deberías detener la pelea de forma física, ya que este es el último recurso.',
    url: 'https://www.muyinteresante.es/mascotas/articulo/que-hacer-si-tu-perro-o-gato-se-pelea-con-otro-animal-531616407310',
    urlToImage: 'https://imagenes.muyinteresante.es/files/vertical_composte_image/uploads/2022/10/13/63482839e1f40.jpeg',
    publishedAt: '2021-03-22T17:14:00Z'
  },
  {
    author: 'redaccion@20minutos.es (20minutos)',
    title: 'Los signos que revelan que tu perro está estresado',
    description: 'Los perros son sensibles anímicamente, y situaciones como el confinamiento por la pandemia del coronavirus pueden afectar a su carácter y hacer que se estresen. Aunque hay síntomas muy obvios, hay otros más sutiles que pueden indicar que tu mejor amigo sufre …',
    url: 'https://www.20minutos.es/noticia/4626273/0/signos-revelan-perro-estresado/',
    urlToImage: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/03/20/perro-bostezando.jpeg',
    publishedAt: '2021-03-20T11:48:10Z'
  },
  {
    author: 'redaccion@20minutos.es (20minutos)',
    title: 'El emotivo reencuentro de un perro robado con su dueña',
    description: 'El vínculo que hay entre un perro y su dueño es uno de los más fuertes que existen. El que no lo crea puede convencerse tras ver el emocionante vídeo del reencuentro de Nala, una perrita que fue robada, con su dueña.',
    url: 'https://www.20minutos.es/gonzoo/noticia/4627313/0/emotivo-reencuentro-perro-robado-duena/',
    urlToImage: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/03/21/reencuentro.png',
    publishedAt: '2021-03-21T17:35:33Z'
  }
]

export default articulos;

export type { NewsItem };
