import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
import {Image} from "react-native";
import common from "../../styles/common";


const Google = ()=>{
    return(
        <Image source={{uri: 'https://picsum.photos/200/200'}} style={common.commonStyles.profileImage}/>
    )
}

export default Google;
