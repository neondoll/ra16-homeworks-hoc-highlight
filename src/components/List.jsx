import Article from "./Article.jsx";
import Video from "./Video.jsx";
import withHighlight from "./hoc/withHighlight.jsx";

const HighlightedArticle = withHighlight(Article);
const HighlightedVideo = withHighlight(Video);

function List(props) {
  return props.list.map((item, index) => {
    const key = index + 1;

    switch (item.type) {
      case "video":
        return (
          <HighlightedVideo {...item} key={key} />
        );

      case "article":
        return (
          <HighlightedArticle {...item} key={key} />
        );
    }
  });
}

export default List;
