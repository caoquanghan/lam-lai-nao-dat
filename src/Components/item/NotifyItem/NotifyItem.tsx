import { colors } from "@/Components/colors";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { NotifyItemProps } from "./types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from "react-native";
import RegularText from "@/Components/texts/RegularText";
const NotifyContainerItem = styled.View`
    flex-direction: column;
    background-color: ${colors.lightgray};
    border-radius: 10px;
    margin-vertical: 2px;
    width: 90%;
    justify-content:center;
    padding-bottom: 5px;
`

const NotifyItem: FunctionComponent<NotifyItemProps> = (props) => {
    return (
        <NotifyContainerItem>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name="information" size={24} color="black" style={{marginHorizontal: 10}} />
                <View>
                    <RegularText textStyles={{marginTop:10, fontWeight:'600'}}>
                        {props.title}
                    </RegularText>
                    <RegularText textStyles={{width:350, fontWeight:'400'}} >
                        {props.detail}
                    </RegularText>
                </View>
            </View>
            <View>
                <RegularText textStyles={{textAlign:'right', marginHorizontal:10,color: '#64748b'}}>
                    {props.time}
                </RegularText>
            </View>
        </NotifyContainerItem>
    )
}
export default NotifyItem