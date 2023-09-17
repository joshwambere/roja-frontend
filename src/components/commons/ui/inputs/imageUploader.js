import {Image, View, Text} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";
import SecondaryButton from "../buttons/secondaryButton";
import {ScaledSheet} from "react-native-size-matters";
import Upload from "../../images/upload";
import * as FileSystem from 'expo-file-system';
import { Video, AVPlaybackStatus } from 'expo-av';


const ImageUploader = ()=>{
    const [photo, setPhoto] = useState(null);
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/johnson-rw/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'johnson-blog';


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setPhoto(result?.uri);

            const image = await FileSystem.readAsStringAsync(result?.uri, { encoding: 'base64' })


          let base64Img = `data:video/mp4;base64,${image}`
            let data = {
                "file": base64Img,
                "upload_preset": CLOUDINARY_UPLOAD_PRESET,
            }
            fetch(CLOUDINARY_URL, {
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
            }).then(async r => {
                let data = await r.json()
                setPhoto(data.url);
            }).catch(err => console.log(err))
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
                 <View>
                     <Video
                            source={{ uri: photo }}
                      />

                     <Text>{photo}</Text>

                 </View>

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
