export const SET_FAVORITE='SET_FAVORITE'
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE'

export const  actionFavorites =(data)=>{
    return {
    
        type:SET_FAVORITE,
        payload:data,
    }
}

export  const RemoveFromFavoriteStar=(dataId)=>{
    return {
    
    type:REMOVE_FROM_FAVORITE,
        payload:dataId,
    }
}
