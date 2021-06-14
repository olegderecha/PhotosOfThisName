// Libs
import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, map, mergeMap, pluck, switchMap } from 'rxjs/operators'

// Actions
import Actions from 'actions'

// API
import { get } from 'api/apiClient'
import methods from 'api/methods'

// Constants
import { PAGE_SIZE } from 'constants/endpointConstants'

export const searchPhotosEpic = (action$) =>
  action$.pipe(
    ofType(Actions.SEARCH_PHOTOS_REQUESTED),
    pluck('payload'),
    switchMap(({ text, page = 1 }) =>
      from(
        get(methods.searchPhotos, {
          text,
          extras: 'description, last_update, owner_name, o_dims',
          page,
          per_page: PAGE_SIZE,
        })
      ).pipe(
        map(({ photos }) => photos),
        mergeMap((photos) => of(Actions.searchPhotoReceived(photos))),
        catchError((error) => of(Actions.searchPhotoFailed(error)))
      )
    )
  )
