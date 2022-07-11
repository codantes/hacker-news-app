import {Box, Text, VStack, HStack, Tag} from '@chakra-ui/react'
import Comment from '../../components/Comment';

export const getServerSideProps = async (context) => {
    const newsId = context.params.newsId;
    const url = 'http://hn.algolia.com/api/v1/items/' + newsId;
    const res = await fetch(url);
    const data = await res.json();

    return {
        props : {storyData : data}
    }
};

const NewsDetails = ({storyData}) => {
    return ( 
        <VStack
        bgColor='rgb(44, 54, 63)'
        p='2rem'
        textAlign='left'
        >
            <Text
            variant='regularHeading'
            fontWeight='semibold'
            textAlign='left'
            fontSize='35px'
            >
                {storyData.title}
            <Text
            textAlign='left'
            fontWeight='light'
            >
                By {storyData.author} (points: {storyData.points})
            </Text>
            </Text>
            <Text
            my='6rem'
            variant='regularHeading'
            >
                Comments
            </Text>
            {
                (storyData.children.length == 0) ? (
                    <Box
                    h='70vh'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    >
                        <Text
                        variant='regularHeading'
                        color='gray.800'
                        fontSize='40px'
                        >
                            No comments yet
                        </Text>
                    </Box>
                ) : null
                

            }
            {
                (storyData.children) &&
                    storyData.children.map((comment) => {
                        return(
                            <Comment
                            key={comment.id}
                            data={comment}
                            />
                        )
                    })
                
            }
        </VStack>
     );
}
 
export default NewsDetails;