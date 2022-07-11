import Head from 'next/head'
import {Text, Box, Grid, GridItem, VStack} from '@chakra-ui/react'
import LatestNews from '../components/latest-news/LatestNews'
import Search from "../components/search-news/Search";

export const getStaticProps = async () => {
    const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story');
   const data = await response.json();
  return {
      props: { newsData: data },
  };
}

const Home = ({newsData}) => {
  return ( 
         <>
         <Head>
          <title>Hacker news</title>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
         <VStack
         bgColor='rgb(44, 54, 63)'
         >
          <Text
            variant='gradientHeading'
          >
            Hacker News
          </Text>
          <Search />
          <LatestNews newsData={newsData}/>
         </VStack>
         </>
   );
}
 
export default Home;
