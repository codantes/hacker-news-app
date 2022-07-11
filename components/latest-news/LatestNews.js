import NewsCard from './NewsCard'
import {Box, Text} from '@chakra-ui/react'

const LatestNews = ({newsData}) => {
    return ( 
        <Box>
            <Text
              variant='regularHeading'
              textAlign='center'
            >
              Latest News
            </Text>  
              {
                newsData.hits.map((story) => {

                  return(
                    <NewsCard 
                    key={story.objectID}
                    title={story.title}
                    author={story.author}
                    id={story.objectID}
                    />
                  )
                })
              }
        </Box>
     );
}
 
export default LatestNews;