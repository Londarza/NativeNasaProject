import React, { FC } from "react"
import { Button, Image, Text, View } from "react-native"
import { PostImage } from "@/src/types/types"
import styles from "./styles"


const TodayImage: FC<PostImage> = ({ date, title, hdurl, url }) => {

    const handlePress = () => { }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: hdurl }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" />
            </View>

        </View>
    )

}

export default TodayImage