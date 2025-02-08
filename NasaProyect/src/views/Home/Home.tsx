import Header from "@/src/components/Header/Header";
import React, { useEffect, useState } from "react";
import fetch from "@/src/utils/fetch";
import { View } from "react-native";
import TodayImage from "@/src/components/todayImage/TodayImage";
import { PostImage } from "@/src/types/types";

export default function Home() {
  const [todaysImage,setTodaysImage] = useState<PostImage>({})
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
    loadTodayImage()
  },[])
  return (
    <View>
        <Header/>
        <TodayImage {...todaysImage}/>
    </View>

  );
}