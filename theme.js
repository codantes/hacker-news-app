import { extendTheme } from "@chakra-ui/react";
import {textStyles as Text} from './styles/TextComponent'

const components = {
    Text
}

const theme = extendTheme({components});
export default theme;