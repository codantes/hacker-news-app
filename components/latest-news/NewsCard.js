import {Box, Text, VStack} from '@chakra-ui/react'
import Link from 'next/link'
import {motion} from 'framer-motion'
const NewsCard = ({title, date, author, id}) => {
    return ( 
        <Link
            href={'/news/' + id}
        >
        <Box
        as={motion.div}
        whileHover={{
            scale : 1.1,
            transition: { duration: 0.3 },
        }}
        m='1rem'
        p='6' 
        rounded='md' 
        shadow='md'
        bgColor='rgb(246, 174, 45)'
        >
            
                <Text
                variant='cardHeading'
                fontWeight='semibold'
                cursor='pointer'
                >
                    {title}
                </Text>
            
            <Text
            varaint='cardHeading'
            >
                by {author}
            </Text>
        </Box>
        </Link>
     );
}
 
export default NewsCard;