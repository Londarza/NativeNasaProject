import React, { FC } from "react"
import { Button, Image, ScrollView, Text, View } from "react-native"
import { PostImage } from "@/src/types/types"
import styles from "./styles"
import FiveDaysCard from "../FiveDaysCard/FiveDaysCard"


const LastFiveDaysImages: FC<{postImages?: PostImage[]}> = ({postImages}) => {
   
    return (
        <View style={styles.container}>            
            <Text style={styles.title}>Last 5 Days</Text>
            
            <ScrollView style={styles.scrollContainer}>
                {
                    postImages?.map(
                        image=>(
                            <FiveDaysCard key={`post-key-${image.date}`} {...image}/>
                        )
                    )
                }
            </ScrollView>

        </View>
    )

}

export default LastFiveDaysImages