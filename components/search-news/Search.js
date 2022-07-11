import {Box, FormControl, Input, Button, InputGroup, Text} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import NewsCard from '../latest-news/NewsCard';
const Search = () => {
    const [query, setQuery] = useState('')
    const [searchData, setSearchData] = useState([])
    console.log(query)
    console.log(searchData)

    const handleSearch = async () => {
        if(query){
            const url = 'https://hn.algolia.com/api/v1/search?query=' + query + '&tags=story';
            const res = await fetch(url);
            const data = await res.json();
            setSearchData(data.hits)
        }
    }

    return ( 
        <Box
        w='100%'
        >
            <Text
            variant='regularHeading'
            >
                Search News
            </Text>
            <FormControl
            w={['85%', '85%', '55%', '45%']}
            display='flex'
            mx='auto'
            alignItems='center'
            justifyContent='center'
            >
                    <Input 
                    type='text'
                    bgColor='white'
                    w='70%'
                    shadow='md'
                    value={query}
                    onChange={(e) => {setQuery(e.target.value)}}
                    borderEndRadius='0px'
                    />
                    <Button
                    onClick={handleSearch}
                    borderStartRadius='0px'
                    bgColor='rgb(246, 174, 45)'
                    >
                        <Search2Icon/>
                    </Button>
            </FormControl>
            <Box
            w={['85%', '85%', '55%', '57%']}
            m='auto'
            >
                
            {
                searchData.map((story)=> {
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
        </Box>
     );
}


export default Search;