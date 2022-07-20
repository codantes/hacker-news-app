import {Box, Text} from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons';

const Comment = ({data}) => {
    const hasChildren = data.children && data.children.length

    return ( 
        <Box
        m='1rem'
        marginRight='0px'
        py='4' 
        w='85%'
        overflowX='hidden'
        rounded='md' 
        shadow='lg'
        bgColor='yellow.300'
        borderLeft='3px solid orangered'
        >   
            <Box
            display='flex'
            m='1rem'
            alignItems='center'
            >
            <AtSignIcon/>
            <Text
            mx='0.3rem'
            fontWeight='semibold'
            fontSize='20px'
            >
                 {data.author}
            </Text>
            </Box>
            <Text
            m='1rem'
            >
            <div className="comment" dangerouslySetInnerHTML={{ __html: data.text }}></div>
            </Text>
            {
                (hasChildren) ?
                (
                    data.children.map((comment) => {
                        return(
                            <Comment
                            key={comment.id}
                            data={comment}
                            />
                        )
                    })
                ) : null
            }
        </Box>
     );
}
 
export default Comment;