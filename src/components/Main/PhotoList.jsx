// React & Redux
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { StyleSheet, View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import SearchBar from 'components/Main/SearchBar'
import PhotoListItem from 'components/Main/PhotoListItem'

// Actions
import Actions from 'actions'

// Styles
import colors from 'styles/colors'

const ON_END_REACHED_TRESHOLD = 0.75

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  warningContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: {
    color: colors.TEXT_PRIMARY,
  },
  loadingIndicator: {
    marginBottom: 15,
  },
})

export const PhotoList = () => {
  const dispatch = useDispatch()

  const { searchText, isRefreshing, warning } = useSelector((state) => state.photoReducer)
  const { photos, page, pages } = useSelector((state) => state.photoReducer.data)

  const hasData = !!photos.length

  const keyExtractor = (item) => `${item.id}`

  const loadData = (pageNum = 1, refreshing: false) => {
    dispatch(Actions.searchPhotosRequested({ page: pageNum, text: searchText, isRefreshing: refreshing }))
  }

  const getFooter = () => {
    if (warning) {
      return (
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>{warning}</Text>
        </View>
      )
    }

    return (
      hasData &&
        <ActivityIndicator
          style={styles.loadingIndicator}
          size={'small'}
          color={colors.LOADING_INDICATOR}
        />
    )
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          tintColor={colors.LOADING_INDICATOR}
          onRefresh={() => !!searchText.length && loadData(1, true)}
        />
      }
      scrollIndicatorInsets={{ right: 1 }}
      style={styles.container}
      data={photos}
      keyExtractor={keyExtractor}
      ListHeaderComponent={SearchBar}
      ListFooterComponent={getFooter()}
      renderItem={({ item }) => <PhotoListItem item={item} />}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='handled'
      onEndReached={() => page <= pages && loadData(page + 1)}
      onEndReachedThreshold={ON_END_REACHED_TRESHOLD}
    />
  )
}

export default PhotoList
