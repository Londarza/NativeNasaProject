import React, { FC } from "react"
import { Button, Image, ScrollView, Text, View } from "react-native"
import styles from "./styles"
import { PostImage } from "@/src/types/types"




const FiveDaysCard: FC<PostImage> = ({title, date}) => {

   
    return (
        <View style={styles.cardContainer}>            
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="view"></Button>
            </View>
        </View>
    )

}
export default FiveDaysCard