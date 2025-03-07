import type { FetchResult } from './dataFetch'

import { dataReducer } from 'stores/slices/dataSlices'

// 🔹 Funkce pro odeslání dat do Redux store
export const dispatchData = (dispatch: any, data: FetchResult) => {
  dispatch(dataReducer.actions.changeTitle(data.title))
  dispatch(dataReducer.actions.changeCategoryTitle(data.categoryTitle))
  dispatch(dataReducer.actions.changeDescription(data.description))
  dispatch(dataReducer.actions.changeArticles(data.articles))
  dispatch(dataReducer.actions.changeType(data.type))
  dispatch(dataReducer.actions.changeShortTitle(data.shortTitle))
  dispatch(dataReducer.actions.changeShortDescription(data.shortDescription))

  if (data.articleBase) {
    dispatch(dataReducer.actions.changeArticleBase(data.articleBase))
  }
}
