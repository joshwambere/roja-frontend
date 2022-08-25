import {Image, View, Button, Text} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {useEffect, useState} from "react";
import SecondaryButton from "../buttons/secondaryButton";
import {ScaledSheet} from "react-native-size-matters";
import Upload from "../../images/upload";
const ImageUploader = ()=>{
    const [photo, setPhoto] = useState(null);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setPhoto(result?.uri);
        }
    };

    return (
        <View>
            {
                !photo && (<>
                <View style={styles.uploaderContainer}>
                    <View style={styles.uploadHeader}>
                        <Upload />
                        <Text style={styles.uploadTitle}>Upload Pictures</Text>
                    </View>
                    <Text style={styles.uploadLimit}>Images must be under 2Mb</Text>
                    <SecondaryButton style={styles.uploadButton} title={'Upload'} navigate={pickImage} />
                </View>

                </>)
            }
            {
             photo && (
                 <>
                     <Image source={{uri: photo.uri}} style={{width: 200, height: 200}} />
                 </>

                )
            }
        </View>
    )
}


export default ImageUploader;

const styles = ScaledSheet.create({
    uploaderContainer:{
        maxHeight:'180@s',
        backgroundColor:'#F6F6F6',
        borderRadius:'5@s',
        marginTop:'10@s',
        paddingHorizontal:'10@s',
        alignItems:'center',
    },
    uploadHeader:{
        paddingVertical:'10@s',
        alignItems:'center',
    },
    uploadTitle:{
        fontSize:'16@s',
        fontWeight:'500',
    },
    uploadLimit:{
        fontSize:'12@s',
        color:'#000000',
        opacity:0.5,
        paddingBottom:'10@s',
    },
    uploadButton:{
        paddingHorizontal:'20@s',
        marginBottom:'10@s',
    }
})
