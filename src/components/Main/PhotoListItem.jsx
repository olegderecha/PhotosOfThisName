// React
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Components
import { StyleSheet, View, Text, Image } from 'react-native'

// Utils
import moment from 'moment'
import { getImageUrl } from 'utils/urlUtils'

// Styles
import colors from 'styles/colors'

// Constants
import { POST_DATE_FORMAT } from 'constants/dateConstants'

const WIDTH = 150

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    minHeight: 200,
    backgroundColor: colors.BACKGROUND_COLOR_2,
    borderColor: colors.BORDER_COLOR_1,
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: WIDTH,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  infoContainer1: {
    flex: 1,
  },
  infoContainer2: {
    flex: 0.01,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: colors.TEXT_PRIMARY,
  },
  description: {
    marginBottom: 10,
    color: colors.TEXT_PRIMARY,
  },
  info2: {
    marginBottom: 5,
    color: colors.TEXT_PRIMARY,
  },
})

const PhotoListItem = ({ item }) => {
  // const [isVisible, setIsVisible] = useState(true)

  const uri = getImageUrl(item)
  const ratio = (+item.originalWidth || +item.largeWidth) / (+item.originalHeight || +item.largeHeight)
  const height = !isNaN(ratio) ? WIDTH / ratio : null
  const lastUpdate = moment.unix(item.lastUpdate).format(POST_DATE_FORMAT)

  return (
    <View style={styles.container}>
      <Image style={[styles.image, { height }]} source={{ uri }} />
      <View style={styles.infoContainer}>
        <View style={styles.infoContainer1}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={4}>
            {item.descriptionContent}
          </Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.info2} numberOfLines={1}>{`Posted by: ${item.owner}`}</Text>
          <Text style={styles.info2} numberOfLines={1}>{`Posted: ${lastUpdate}`}</Text>
        </View>
      </View>
    </View>
  )
}

PhotoListItem.propTypes = {
  item: PropTypes.Object,
}

export default PhotoListItem
