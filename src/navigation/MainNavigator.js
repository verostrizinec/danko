import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { colors } from '../global/colors'

const MainNavigator = () => {

    const idToken = useSelector(state => state.auth.idToken)
    const dispatch = useDispatch()

    useEffect(() =>{
      (async () =>{
        const sessions = await fetchSession()
        if(sessions.row.length){
        dispatch(setUser(sessions.rows._array[0]))
      }
      })()
    },[])

  return (
   <NavigationContainer>
        {idToken ? <TabNavigator/>  : <AuthStack/> }
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
  })