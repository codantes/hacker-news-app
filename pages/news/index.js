import { VStack } from "@chakra-ui/react";
import LatestNews from "../../components/latest-news/LatestNews";

export const getStaticProps = async () => {
    const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story');
   const data = await response.json();
  return {
      props: { newsData: data },
  };
}

const News = ({newsData}) => {
    return ( 
        <VStack
        bgColor='rgb(44, 54, 63)'
        p='1rem'
        >
            <LatestNews
            newsData={newsData}
            />
        </VStack>
     );
}
 
export default News;