import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    completedBuy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35
    }
})

export default styles