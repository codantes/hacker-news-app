import {Box, Text, VStack} from '@chakra-ui/react'
import Link from 'next/link'
const NewsCard = ({title, date, author, id}) => {
    return ( 
        <Box
        m='1rem'
        p='6' 
        rounded='md' 
        shadow='md'
        bgColor='rgb(246, 174, 45)'
        >
            <Link
                href={'/news/' + id}
                >
                <Text
                variant='cardHeading'
                fontWeight='semibold'
                cursor='pointer'
                >
                    {title}
                </Text>
            </Link>
            <Text
            varaint='cardHeading'
            >
                by {author}
            </Text>
        </Box>
     );
}
 
export default NewsCard;