import { StyleSheet, Text, View,ImageSourcePropType, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import DiceOne from '../assets/diceOne.png'
import DiceTwo from '../assets/diceTwo.png'
import DiceThree from '../assets/diceThree.png'
import DiceFour from '../assets/diceFour.png'

import DiceFive from '../assets/diceFive.png'
import DiceSix from '../assets/diceSix.png'

type Diceprops = PropsWithChildren<{
    imageUrl:ImageSourcePropType
}>

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

const Dice=({imageUrl}:Diceprops):JSX.Element=>{
    return (
        <View>
            <Image style={styles.diceImage}
            source={imageUrl}
            />
        </View>
    )
}


export default function App() {

    const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)

    const rollDiceOnTap=()=>{
        let randomNum=Math.floor(Math.random()*6)+1;

        switch (randomNum){
            case 1:
                setDiceImage(DiceOne)
                break;
            case 2:
                    setDiceImage(DiceTwo)
                    break;
            case 3:
                        setDiceImage(DiceThree)
                    break;  
            case 4:
                        setDiceImage(DiceFour)
                        break; 
            case 5:
                            setDiceImage(DiceFive)
                            break;  
             case 6:
                setDiceImage(DiceSix)
                break;    
                
            default:
                setDiceImage(DiceOne)
                break;
        }
        ReactNativeHapticFeedback.trigger("impactLight", options);
    }
  return (
    <View style={styles.container}>
        <Dice imageUrl={diceImage}/>
        <Pressable
        onPress={rollDiceOnTap}>

         <Text style={styles.dicetext}
         >Roll the dice</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    diceImage:{
        width:200,
        height:200
    },
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
},
dicetext:{
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#000000',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
}
})