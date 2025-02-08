import Header from "@/src/components/Header/Header";
import React, { useEffect, useState } from "react";
import fetch from "@/src/utils/fetch";
import { View } from "react-native";
import TodayImage from "@/src/components/todayImage/TodayImage";
import { PostImage } from "@/src/types/types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "@/src/components/lastFiveDaysImages/LastFiveDaysImages";

export default function Home() {
  const [todaysImage,setTodaysImage] = useState<PostImage>({})
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[] | null>(null)

  useEffect(()=>{
    const loadTodayImage = async()=>{
     try {
      const todaysImageResp =await fetch()
      setTodaysImage(todaysImageResp)
     } catch (error) {
      console.error(error)
      setTodaysImage({})
     } 
    }

    const loadLastFiveDaysImages = async()=>{
      try {
        const date= new Date()
        const todaysFormated = format(date, "yyyy-MM-dd"); 
        const fiveAgoFormated = format(sub(date, { days: 5 }), "yyyy-MM-dd")
       const dateParams = `&start_date=${fiveAgoFormated}&end_date=${todaysFormated}`

       const backDaysImageResp =await fetch(dateParams)

       setLastFiveDaysImage(backDaysImageResp)
      } catch (error) {
       console.error(error)
       setLastFiveDaysImage([])
      } 
     }
    loadTodayImage()

    loadLastFiveDaysImages()
    
    
  },[])
  
  
  return (
    <View style={{ flex: 1 }}>
        <Header/>
        <TodayImage {...todaysImage}/>
        {lastFiveDaysImage && <LastFiveDaysImages postImages={lastFiveDaysImage} />}
    </View>

  );
}