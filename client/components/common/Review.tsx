import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Star, YellowStar } from '../../assets/iconsCustom'

const DATA = {
  starNum: 4,
  time: 'Today, 12:30 pm',
  userAvt:
    'https://steamuserimages-a.akamaihd.net/ugc/1782857511239293956/F8D9A28DC154287629BCB9E5F599F4D2BE075D15/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
  userName: 'Gái nhà quê',
  content: 'Dango là nhất',
  imageReview: [
    'https://upload-os-bbs.hoyolab.com/upload/2021/09/22/107564949/4890ea57289a5fc710979c0ab9ab3544_4578436378514736626.png',
    'https://i.ytimg.com/vi/0uGYD1nus7o/maxresdefault.jpg',
    'https://i.ytimg.com/vi/Tw_LKHjKWhE/maxresdefault.jpg'
  ]
}

interface Props {
  review: {
    starNum: number
    time: string
    userAvt: string
    userName: string
    content: string
    imageReview: string[]
  }
}

const Review = ({ review }: Props) => {
  const [data, setData] = useState(review)
  useEffect(() => {
    setData(review)
  }, [])

  return (
    <View className='py-4'>
      {/* Stars and time */}
      <View className='flex-1 flex-row'>
        {Array.from({ length: data.starNum }, (_, index) => (
          <YellowStar className='mr-1' key={index} />
        ))}
        {Array.from({ length: 5 - data.starNum }, (_, index) => (
          <Star className='mr-1' key={index} />
        ))}
        <Text className='flex-1 text-right font-app-light text-body2 text-giratina-500'>{data.time}</Text>
      </View>

      {/* user and content  */}
      <View className='my-3'>
        <View className='flex-1 flex-row items-center'>
          <Image source={{ uri: data.userAvt }} className='mr-2 h-6 w-6 rounded-full' resizeMode='cover' />
          <Text className='font-app-medium text-body1'>{data.userName}</Text>
        </View>
        <Text className='mt-0.5 w-full flex-shrink font-app-regular text-body1 text-giratina-500'>{data.content}</Text>
      </View>

      {/* images */}
      <FlatList
        data={data.imageReview}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image className='mr-2 h-[54px] w-[54px] rounded-md' resizeMode='cover' source={{ uri: item }} />
        )}
      />
    </View>
  )
}

export default Review
